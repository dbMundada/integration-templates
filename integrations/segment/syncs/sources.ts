import { createSync } from 'nango';
import type { SegmentSourceResponse } from '../types.js';
import { toSource } from '../mappers/to-source.js';
import type { ProxyConfiguration } from 'nango';
import { SegmentSource } from '../models.js';
import { z } from 'zod';

const sync = createSync({
    description: 'Fetches all source configurations from Segment workspace',
    version: '1.0.0',
    frequency: 'every day',
    autoStart: true,
    syncType: 'full',

    endpoints: [
        {
            method: 'GET',
            path: '/sources',
            group: 'Sources'
        }
    ],

    scopes: ['workspace:read'],

    models: {
        SegmentSource: SegmentSource
    },

    metadata: z.object({}),

    exec: async (nango) => {
        const config: ProxyConfiguration = {
            // https://segment.com/docs/api/config-api/
            endpoint: '/sources',
            method: 'GET',
            retries: 10,
            params: {
                pagination: JSON.stringify({
                    count: 50
                })
            },
            paginate: {
                type: 'cursor',
                cursor_name_in_request: 'pagination',
                cursor_path_in_response: 'data.pagination.next',
                limit_name_in_request: 'count',
                response_path: 'data.sources',
                limit: 50
            }
        };

        for await (const sourceBatch of nango.paginate<SegmentSourceResponse>(config)) {
            const sources = sourceBatch.map(toSource);
            await nango.batchSave(sources, 'SegmentSource');
            await nango.log(`Synced ${sources.length} sources`);
        }

        await nango.deleteRecordsFromPreviousExecutions('SegmentSource');
    }
});

export type NangoSyncLocal = Parameters<(typeof sync)['exec']>[0];
export default sync;