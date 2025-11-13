import { createSync } from 'nango';
import type { SegmentSubscriptionResponse, SegmentDestinationResponse } from '../types.js';
import { toSubscription } from '../mappers/to-subscription.js';
import type { ProxyConfiguration } from 'nango';
import { SegmentSubscription } from '../models.js';
import { z } from 'zod';

const sync = createSync({
    description: 'Fetches all subscriptions from enabled destinations in Segment workspace',
    version: '1.0.0',
    frequency: 'every day',
    autoStart: true,
    syncType: 'full',

    endpoints: [
        {
            method: 'GET',
            path: '/subscriptions',
            group: 'Subscriptions'
        }
    ],

    scopes: ['workspace:read'],

    models: {
        SegmentSubscription: SegmentSubscription
    },

    metadata: z.object({}),

    exec: async (nango) => {
        // First, get all destinations to find enabled ones
        const destinationsConfig: ProxyConfiguration = {
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

        const allDestinations: SegmentDestinationResponse[] = [];
        for await (const destinationBatch of nango.paginate<SegmentDestinationResponse>(destinationsConfig)) {
            allDestinations.push(...destinationBatch);
        }

        const enabledDestinations = allDestinations.filter(dest => dest.enabled);
        await nango.log(`Found ${enabledDestinations.length} enabled destinations out of ${allDestinations.length} total`);

        const allSubscriptions: any[] = [];

        // For each enabled destination, fetch its subscriptions
        for (const destination of enabledDestinations) {
            const subscriptionsConfig: ProxyConfiguration = {
                // https://segment.com/docs/api/config-api/
                endpoint: `/destinations/${destination.id}/subscriptions`,
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
                    response_path: 'data.subscriptions',
                    limit: 50
                }
            };

            // @allowTryCatch
            try {
                for await (const subscriptionBatch of nango.paginate<SegmentSubscriptionResponse>(subscriptionsConfig)) {
                    const mappedSubscriptions = subscriptionBatch.map(sub => toSubscription(sub, destination.id));
                    allSubscriptions.push(...mappedSubscriptions);
                }
                await nango.log(`Synced subscriptions for destination: ${destination.name}`);
            } catch (error: any) {
                await nango.log(`Error syncing subscriptions for destination ${destination.id}: ${error.message}`);
            }

            // Rate limiting - small delay between destination requests
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        if (allSubscriptions.length > 0) {
            await nango.batchSave(allSubscriptions, 'SegmentSubscription');
            await nango.log(`Total subscriptions synced: ${allSubscriptions.length}`);
        }

        await nango.deleteRecordsFromPreviousExecutions('SegmentSubscription');
    }
});

export type NangoSyncLocal = Parameters<(typeof sync)['exec']>[0];
export default sync;