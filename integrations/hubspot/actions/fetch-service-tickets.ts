import { createAction } from 'nango';
import type { ProxyConfiguration } from 'nango';
import { HubspotServiceTicket } from '../models.js';
import { z } from 'zod';

const FetchServiceTicketsInput = z.object({
    limit: z.number().optional(),
    properties: z.array(z.string()).optional(),
    modifiedSince: z.string().optional()
});

const FetchServiceTicketsOutput = z.object({
    serviceTickets: z.array(HubspotServiceTicket)
});

const action = createAction({
    description: 'Fetch service tickets from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/service-tickets',
        group: 'Service Tickets'
    },

    input: FetchServiceTicketsInput,
    output: FetchServiceTicketsOutput,

    scopes: ['tickets'],

    exec: async (nango, input): Promise<{ serviceTickets: HubspotServiceTicket[] }> => {
        const defaultProperties = [
            'hubspot_owner_id',
            'hs_pipeline',
            'hs_pipeline_stage',
            'hs_ticket_priority',
            'hs_ticket_category',
            'subject',
            'content'
        ];

        const properties = input?.properties || defaultProperties;
        const limit = input?.limit || 100;
        const modifiedSince = input?.modifiedSince;

        const payload: any = {
            sorts: [{ propertyName: 'hs_lastmodifieddate', direction: 'DESCENDING' }],
            properties,
            limit: limit.toString(),
            filterGroups: []
        };

        if (modifiedSince) {
            const queryDate = Date.parse(modifiedSince);
            payload.filterGroups.push({
                filters: [{ propertyName: 'hs_lastmodifieddate', operator: 'GT', value: queryDate }]
            });
        }

        const config: ProxyConfiguration = {
            endpoint: '/crm/v3/objects/tickets/search',
            data: payload,
            retries: 10
        };

        const response = await nango.post<{
            results: any[];
            paging?: any;
        }>(config);

        const serviceTickets: HubspotServiceTicket[] = response.data.results.map((ticket: any) => {
            const { id, createdAt, archived } = ticket;
            const {
                subject,
                content,
                hs_object_id,
                hubspot_owner_id,
                hs_pipeline,
                hs_pipeline_stage,
                hs_ticket_category,
                hs_ticket_priority
            } = ticket.properties;

            return {
                id,
                createdAt,
                updatedAt: ticket.properties.hs_lastmodifieddate,
                isArchived: archived,
                subject,
                content,
                objectId: hs_object_id,
                ownerId: hubspot_owner_id,
                pipeline: hs_pipeline,
                pipelineStage: hs_pipeline_stage,
                ticketCategory: hs_ticket_category,
                ticketPriority: hs_ticket_priority
            };
        });

        return {
            serviceTickets
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;