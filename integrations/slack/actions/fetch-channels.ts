import { createAction } from 'nango';
import { SlackChannel } from '../models.js';
import { z } from 'zod';
import type { ProxyConfiguration } from 'nango';
import type { SlackChannelResponse } from '../types.js';

const FetchChannelsInput = z.object({
    limit: z.number().optional(),
    types: z.string().optional(),
    excludeArchived: z.boolean().optional()
});

const FetchChannelsOutput = z.object({
    channels: z.array(SlackChannel)
});

const action = createAction({
    description: 'Fetch channels from Slack workspace. Supports filtering by channel types and archived status.',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/channels',
        group: 'Channels'
    },

    input: FetchChannelsInput,
    output: FetchChannelsOutput,

    scopes: ['channels:read'],

    exec: async (nango, input): Promise<{ channels: SlackChannel[] }> => {
        const limit = input?.limit || 200;
        const types = input?.types || 'public_channel,private_channel,mpim,im';
        const excludeArchived = input?.excludeArchived ?? true;

        const proxyConfig: ProxyConfiguration = {
            endpoint: 'conversations.list',
            params: {
                limit: limit.toString(),
                types,
                exclude_archived: excludeArchived.toString()
            },
            retries: 10
        };

        const response = await nango.get<{
            channels: SlackChannelResponse[];
            ok: boolean;
        }>(proxyConfig);

        if (!response.data.ok) {
            throw new nango.ActionError({
                message: 'Failed to fetch channels from Slack'
            });
        }

        const channels: SlackChannel[] = response.data.channels.map((record) => ({
            id: record.id,
            name: record.name,
            is_channel: record.is_channel,
            is_group: record.is_group,
            is_im: record.is_im,
            created: record.created,
            creator: record.creator,
            is_archived: record.is_archived,
            is_general: record.is_general,
            name_normalized: record.name_normalized,
            is_shared: record.is_shared,
            is_private: record.is_private,
            is_mpim: record.is_mpim,
            updated: record.updated,
            num_members: record.num_members,
            raw_json: JSON.stringify(record)
        }));

        return {
            channels
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;