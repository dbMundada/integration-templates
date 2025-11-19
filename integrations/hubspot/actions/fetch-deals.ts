import { createAction } from 'nango';
import { toDeal } from '../mappers/toDeal.js';
import type { HubSpotDealNonUndefined } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { Deal } from '../models.js';
import { z } from 'zod';

const FetchDealsInput = z.object({
    limit: z.number().optional(),
    properties: z.array(z.string()).optional(),
    includeAssociations: z.boolean().optional()
});

const FetchDealsOutput = z.object({
    deals: z.array(Deal)
});

const action = createAction({
    description: 'Fetch deals from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/deals',
        group: 'Deals'
    },

    input: FetchDealsInput,
    output: FetchDealsOutput,

    scopes: ['crm.objects.deals.read', 'oauth'],

    exec: async (nango, input): Promise<{ deals: Deal[] }> => {
        const defaultProperties = [
            'dealname',
            'amount',
            'closedate',
            'description',
            'hubspot_owner_id',
            'dealstage',
            'hs_deal_stage_probability'
        ];

        const properties = input?.properties || defaultProperties;
        const limit = input?.limit || 100;
        const includeAssociations = input?.includeAssociations || false;

        const config: ProxyConfiguration = {
            endpoint: '/crm/v3/objects/deals',
            params: {
                properties: properties.join(','),
                limit: limit.toString(),
                ...(includeAssociations && { associations: 'contact,company' })
            },
            retries: 10
        };

        const response = await nango.get<{
            results: HubSpotDealNonUndefined[];
            paging?: any;
        }>(config);

        const deals = response.data.results.map((deal: HubSpotDealNonUndefined) => {
            if (includeAssociations) {
                const companies: any[] = [];
                const contacts: any[] = [];

                if (deal.associations && !Array.isArray(deal.associations)) {
                    if (deal.associations.companies && deal.associations.companies.results) {
                        companies.push(...deal.associations.companies.results.map((company: any) => ({
                            id: company.id,
                            name: company.properties?.name || null
                        })));
                    }
                    if (deal.associations.contacts && deal.associations.contacts.results) {
                        contacts.push(...deal.associations.contacts.results.map((contact: any) => ({
                            id: contact.id,
                            first_name: contact.properties?.firstname || null,
                            last_name: contact.properties?.lastname || null
                        })));
                    }
                }

                return toDeal(deal, contacts, companies);
            } else {
                return toDeal(deal);
            }
        });

        return {
            deals
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;