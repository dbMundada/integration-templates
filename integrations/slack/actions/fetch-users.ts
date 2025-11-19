import { createAction } from 'nango';
import type { SlackUserResponse } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { SlackUser } from '../models.js';
import { z } from 'zod';

const FetchUsersInput = z.object({
    limit: z.number().optional(),
    includeLocale: z.boolean().optional()
});

const FetchUsersOutput = z.object({
    users: z.array(SlackUser)
});

const action = createAction({
    description: 'Fetch users from Slack workspace',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/users',
        group: 'Users'
    },

    input: FetchUsersInput,
    output: FetchUsersOutput,

    scopes: ['users:read', 'users:read.email'],

    exec: async (nango, input): Promise<{ users: SlackUser[] }> => {
        const limit = input?.limit || 200;
        const includeLocale = input?.includeLocale || false;

        const config: ProxyConfiguration = {
            endpoint: 'users.list',
            retries: 10,
            params: {
                limit: limit.toString(),
                ...(includeLocale && { include_locale: 'true' })
            }
        };

        const response = await nango.get<{
            members: SlackUserResponse[];
            ok: boolean;
        }>(config);

        if (!response.data.ok) {
            throw new nango.ActionError({
                message: 'Failed to fetch users from Slack'
            });
        }

        const users: SlackUser[] = response.data.members.map((record) => ({
            id: record.id,
            team_id: record.team_id,
            name: record.name,
            deleted: record.deleted,
            tz: record.tz,
            tz_label: record.tz_label,
            tz_offset: record.tz_offset,
            profile: {
                avatar_hash: record.profile.avatar_hash,
                real_name: record.profile.real_name ? record.profile.real_name : null,
                display_name: record.profile.display_name ? record.profile.display_name : null,
                real_name_normalized: record.profile.real_name_normalized ? record.profile.real_name_normalized : null,
                display_name_normalized: record.profile.display_name_normalized ? record.profile.display_name_normalized : null,
                email: record.profile.email ? record.profile.email : null,
                image_original: record.profile.is_custom_image ? record.profile.image_original : null
            },
            is_admin: record.is_admin,
            is_owner: record.is_owner,
            is_primary_owner: record.is_primary_owner,
            is_restricted: record.is_restricted,
            is_ultra_restricted: record.is_ultra_restricted,
            is_bot: record.is_bot,
            updated: record.updated,
            is_app_user: record.is_app_user,
            raw_json: JSON.stringify(record)
        }));

        return {
            users
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;