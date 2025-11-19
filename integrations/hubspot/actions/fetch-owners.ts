import { createAction } from 'nango';
import type { ProxyConfiguration } from 'nango';
import { HubspotOwner } from '../models.js';
import { z } from 'zod';

const FetchOwnersInput = z.object({
    limit: z.number().optional()
});

const FetchOwnersOutput = z.object({
    owners: z.array(HubspotOwner)
});

const action = createAction({
    description: 'Fetch owners from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/owners',
        group: 'Owners'
    },

    input: FetchOwnersInput,
    output: FetchOwnersOutput,

    scopes: ['oauth'],

    exec: async (nango, input): Promise<{ owners: HubspotOwner[] }> => {
        const limit = input?.limit || 100;

        const config: ProxyConfiguration = {
            endpoint: '/crm/v3/owners',
            params: {
                limit: limit.toString()
            },
            retries: 10
        };

        const response = await nango.get<{
            results: any[];
            paging?: any;
        }>(config);

        const owners = response.data.results.map((owner: any): HubspotOwner => ({
            id: owner.id,
            email: owner.email,
            firstName: owner.firstName,
            lastName: owner.lastName,
            userId: owner.userId,
            createdAt: owner.createdAt,
            updatedAt: owner.updatedAt,
            archived: owner.archived
        }));

        return {
            owners
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;