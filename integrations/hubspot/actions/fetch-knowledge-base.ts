import { createAction } from 'nango';
import { HubspotKnowledgeBase } from '../models.js';
import { z } from 'zod';

interface HubspotDetailsResponse {
    portalId: number;
    timeZone: string;
    accountType: string;
    currency: string;
    utcOffset: string;
    utcOffsetMilliseconds: number;
}

interface HubspotKnowledgeBaseResponse {
    id: number;
    type: string;
    fields: any;
}

const FetchKnowledgeBaseInput = z.object({
    limit: z.number().optional(),
    term: z.string().optional()
});

const FetchKnowledgeBaseOutput = z.object({
    knowledgeBase: z.array(HubspotKnowledgeBase)
});

const action = createAction({
    description: 'Fetch knowledge base articles from HubSpot',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/knowledge-base',
        group: 'Knowledge Base'
    },

    input: FetchKnowledgeBaseInput,
    output: FetchKnowledgeBaseOutput,

    scopes: ['oauth'],

    exec: async (nango, input): Promise<{ knowledgeBase: HubspotKnowledgeBase[] }> => {
        const limit = input?.limit || 50;
        const term = input?.term || 'a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z';

        const portalResponse = await nango.get<HubspotDetailsResponse>({
            endpoint: '/integrations/v1/me',
            retries: 10
        });

        if (!portalResponse.data || !portalResponse.data.portalId) {
            throw new nango.ActionError({
                message: 'No portal id found'
            });
        }

        const searchResponse = await nango.get({
            endpoint: '/contentsearch/v2/search',
            params: {
                type: 'KNOWLEDGE_ARTICLE',
                term,
                portalId: portalResponse.data.portalId.toString(),
                limit: limit.toString(),
                offset: '0'
            },
            retries: 10
        });

        if (!searchResponse.data || searchResponse.data.total === 0) {
            return { knowledgeBase: [] };
        }

        const knowledgeBase: HubspotKnowledgeBase[] = [];

        for (const result of searchResponse.data.results) {
            try {
                const response = await nango.get<HubspotKnowledgeBaseResponse>({
                    endpoint: `/cms/v3/site-search/indexed-data/${result.id}`,
                    params: {
                        type: 'KNOWLEDGE_ARTICLE'
                    },
                    retries: 10
                });

                if (!response.data) {
                    continue;
                }

                const { data } = response;

                knowledgeBase.push({
                    id: data?.id.toString(),
                    publishDate: data.fields.publishedDate.value,
                    title: data.fields['title_nested.en'].value,
                    content: data.fields['html_other_nested.en'].value,
                    description: data.fields['description_nested.en'].value,
                    category: data.fields['category_nested.en'].value
                });
            } catch (error) {
                continue;
            }
        }

        return {
            knowledgeBase
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;