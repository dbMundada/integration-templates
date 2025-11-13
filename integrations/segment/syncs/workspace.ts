import { createSync } from 'nango';
import type { SegmentWorkspaceResponse } from '../types.js';
import { toWorkspace } from '../mappers/to-workspace.js';
import type { ProxyConfiguration } from 'nango';
import { SegmentWorkspace } from '../models.js';
import { z } from 'zod';

const sync = createSync({
    description: 'Fetches workspace information from Segment',
    version: '1.0.0',
    frequency: 'every day',
    autoStart: true,
    syncType: 'full',

    endpoints: [
        {
            method: 'GET',
            path: '/workspace',
            group: 'Workspace'
        }
    ],

    scopes: ['workspace:read'],

    models: {
        SegmentWorkspace: SegmentWorkspace
    },

    metadata: z.object({}),

    exec: async (nango) => {
        const config: ProxyConfiguration = {
            // https://segment.com/docs/api/config-api/
            endpoint: '',
            method: 'GET',
            retries: 10
        };

        const response = await nango.get<{ data: { workspace: SegmentWorkspaceResponse } }>(config);
        const workspaceData = response.data.data.workspace;
        
        const workspace = toWorkspace(workspaceData);
        await nango.batchSave([workspace], 'SegmentWorkspace');
        await nango.log(`Synced workspace: ${workspace.name}`);

        await nango.deleteRecordsFromPreviousExecutions('SegmentWorkspace');
    }
});

export type NangoSyncLocal = Parameters<(typeof sync)['exec']>[0];
export default sync;