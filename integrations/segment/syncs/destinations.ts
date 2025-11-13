import { createSync } from 'nango';
import type { SegmentDestinationResponse } from '../types.js';
import { toDestination } from '../mappers/to-destination.js';
import type { ProxyConfiguration } from 'nango';
import { SegmentDestination } from '../models.js';
import { z } from 'zod';

const sync = createSync({
    description: 'Fetches all destination configurations from Segment workspace',
    version: '1.0.0',
    frequency: 'every day',
    autoStart: true,
    syncType: 'full',

    endpoints: [
        {
            method: 'GET',
            path: '/destinations',
            group: 'Destinations'
        }
    ],

    scopes: ['workspace:read'],

    models: {
        SegmentDestination: SegmentDestination
    },

    metadata: z.object({}),

    exec: async (nango) => {
        const config: ProxyConfiguration = {
            // https://segment.com/docs/api/config-api/
            endpoint: '/destinations',
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
                response_path: 'data.destinations',
                limit: 50
            }
        };

        for await (const destinationBatch of nango.paginate<SegmentDestinationResponse>(config)) {
            const destinations = destinationBatch.map(toDestination);
            await nango.batchSave(destinations, 'SegmentDestination');
            await nango.log(`Synced ${destinations.length} destinations`);
        }

        await nango.deleteRecordsFromPreviousExecutions('SegmentDestination');
    }
});

export type NangoSyncLocal = Parameters<(typeof sync)['exec']>[0];
export default sync;