import { createAction } from 'nango';
import type { HubSpotProduct } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { Product } from '../models.js';
import { z } from 'zod';

const FetchProductsInput = z.object({
    limit: z.number().optional(),
    properties: z.array(z.string()).optional()
});

const FetchProductsOutput = z.object({
    products: z.array(Product)
});

const action = createAction({
    description: 'Fetch products from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/products',
        group: 'Products'
    },

    input: FetchProductsInput,
    output: FetchProductsOutput,

    scopes: ['e-commerce'],

    exec: async (nango, input): Promise<{ products: Product[] }> => {
        const defaultProperties = [
            'amount',
            'description',
            'discount',
            'hs_sku',
            'hs_url',
            'name',
            'price',
            'quantity',
            'recurringbillingfrequency',
            'tax'
        ];

        const properties = input?.properties || defaultProperties;
        const limit = input?.limit || 100;

        const config: ProxyConfiguration = {
            endpoint: '/crm/v3/objects/products',
            params: {
                properties: properties.join(','),
                limit: limit.toString()
            },
            retries: 10
        };

        const response = await nango.get<{
            results: HubSpotProduct[];
            paging?: any;
        }>(config);

        const products: Product[] = response.data.results.map((hproduct: HubSpotProduct) => ({
            id: hproduct.id,
            amount: hproduct.properties.amount,
            description: hproduct.properties.description,
            discount: hproduct.properties.discount,
            sku: hproduct.properties.hs_sku,
            url: hproduct.properties.hs_url,
            name: hproduct.properties.name,
            price: hproduct.properties.price,
            quantity: hproduct.properties.quantity,
            recurringBillingFrequency: hproduct.properties.recurringbillingfrequency,
            tax: hproduct.properties.tax,
            createdAt: hproduct.createdAt,
            updatedAt: hproduct.updatedAt
        }));

        return {
            products
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;