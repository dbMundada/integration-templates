import { createAction } from 'nango';
import { toCompany } from '../mappers/toCompany.js';
import type { HubSpotCompanyNonUndefined } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { Company } from '../models.js';
import { z } from 'zod';

const FetchCompaniesInput = z.object({
    limit: z.number().optional(),
    properties: z.array(z.string()).optional()
});

const FetchCompaniesOutput = z.object({
    companies: z.array(Company)
});

const action = createAction({
    description: 'Fetch companies from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/companies',
        group: 'Companies'
    },

    input: FetchCompaniesInput,
    output: FetchCompaniesOutput,

    scopes: ['crm.objects.companies.read', 'oauth'],

    exec: async (nango, input): Promise<{ companies: Company[] }> => {
        const defaultProperties = [
            'name',
            'industry',
            'description',
            'country',
            'city',
            'createdAt',
            'hs_lead_status',
            'lifecyclestage',
            'hubspot_owner_id',
            'founded_year',
            'website'
        ];

        const properties = input?.properties || defaultProperties;
        const limit = input?.limit || 100;

        const config: ProxyConfiguration = {
            endpoint: '/crm/v3/objects/companies',
            params: {
                properties: properties.join(','),
                limit: limit.toString()
            },
            retries: 10
        };

        const response = await nango.get<{
            results: HubSpotCompanyNonUndefined[];
            paging?: any;
        }>(config);

        const companies = response.data.results.map((company: HubSpotCompanyNonUndefined) => toCompany(company));

        return {
            companies
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;