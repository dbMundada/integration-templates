import { createAction } from 'nango';
import type { HubspotCurrencyCodeResponse, HubspotCompanyCode } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { CurrencyCode } from '../models.js';
import { z } from 'zod';

const FetchCurrencyCodesOutput = z.object({
    currencyCodes: z.array(CurrencyCode)
});

const action = createAction({
    description: 'Fetch currency codes from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/currency-codes',
        group: 'Settings'
    },

    input: z.void(),
    output: FetchCurrencyCodesOutput,

    scopes: ['oauth', 'settings.currencies.read'],

    exec: async (nango): Promise<{ currencyCodes: CurrencyCode[] }> => {
        const config: ProxyConfiguration = {
            endpoint: '/settings/v3/currencies/codes',
            retries: 10
        };

        const response = await nango.get<HubspotCurrencyCodeResponse>(config);

        const currencyCodes = response.data.results.map((result: HubspotCompanyCode) => ({
            id: result.currencyCode,
            code: result.currencyCode,
            description: result.currencyName
        }));

        return {
            currencyCodes
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;