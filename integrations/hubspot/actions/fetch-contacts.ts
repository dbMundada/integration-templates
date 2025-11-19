import { createAction } from 'nango';
import { toContact } from '../mappers/toContact.js';
import type { HubSpotContactNonUndefined } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { Contact } from '../models.js';
import { z } from 'zod';

const FetchContactsInput = z.object({
    limit: z.number().optional(),
    properties: z.array(z.string()).optional()
});

const FetchContactsOutput = z.object({
    contacts: z.array(Contact)
});

const action = createAction({
    description: 'Fetch contacts from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/contacts',
        group: 'Contacts'
    },

    input: FetchContactsInput,
    output: FetchContactsOutput,

    scopes: ['crm.objects.contacts.read', 'oauth'],

    exec: async (nango, input): Promise<{ contacts: Contact[] }> => {
        const defaultProperties = [
            'firstname',
            'lastname',
            'email',
            'jobtitle',
            'notes_last_contacted',
            'notes_last_updated',
            'hs_lead_status',
            'lifecyclestage',
            'salutation',
            'mobilephone',
            'website',
            'createdate',
            'hubspot_owner_id'
        ];

        const properties = input?.properties || defaultProperties;
        const limit = input?.limit || 100;

        const config: ProxyConfiguration = {
            endpoint: '/crm/v3/objects/contacts',
            params: {
                properties: properties.join(','),
                limit: limit.toString()
            },
            retries: 10
        };

        const response = await nango.get<{
            results: HubSpotContactNonUndefined[];
            paging?: any;
        }>(config);

        const contacts = response.data.results.map((contact: HubSpotContactNonUndefined) => toContact(contact));

        return {
            contacts
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;