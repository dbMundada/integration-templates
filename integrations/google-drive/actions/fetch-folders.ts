import { createAction } from 'nango';
import type { GoogleDriveFileResponse } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { Folder } from '../models.js';
import { z } from 'zod';

const FetchFoldersInput = z.object({
    parentId: z.string().optional(),
    limit: z.number().optional(),
    recursive: z.boolean().optional(),
    query: z.string().optional()
});

const FetchFoldersOutput = z.object({
    folders: z.array(Folder)
});

const action = createAction({
    description: 'Fetch folders from Google Drive. Can fetch folders from a specific parent, all folders recursively, or search folders by query.',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/folders',
        group: 'Folders'
    },

    input: FetchFoldersInput,
    output: FetchFoldersOutput,

    scopes: ['https://www.googleapis.com/auth/drive.readonly'],

    exec: async (nango, input): Promise<{ folders: Folder[] }> => {
        const { parentId = 'root', limit = 100, recursive = false, query } = input;

        const folders: Folder[] = [];
        const processedFolders = new Set<string>();

        // Helper function to fetch folders from a specific parent
        async function fetchFoldersFromParent(parent: string) {
            if (processedFolders.has(parent) && recursive) return;
            if (recursive) processedFolders.add(parent);

            let searchQuery: string;
            
            if (query) {
                // Use custom query but ensure it only returns folders
                searchQuery = `(${query}) and trashed = false and mimeType = 'application/vnd.google-apps.folder'`;
            } else {
                // Fetch folders in the specified parent
                searchQuery = `('${parent}' in parents) and trashed = false and mimeType = 'application/vnd.google-apps.folder'`;
            }

            const proxyConfiguration: ProxyConfiguration = {
                endpoint: `drive/v3/files`,
                params: {
                    fields: 'files(id, name, mimeType, webViewLink, parents, modifiedTime), nextPageToken',
                    pageSize: Math.min(limit, 100).toString(),
                    q: searchQuery,
                    corpora: 'allDrives',
                    supportsAllDrives: 'true',
                    includeItemsFromAllDrives: 'true'
                },
                paginate: {
                    response_path: 'files'
                },
                retries: 10
            };

            for await (const folderBatch of nango.paginate<GoogleDriveFileResponse>(proxyConfiguration)) {
                for (const folder of folderBatch) {
                    folders.push({
                        id: folder.id,
                        title: folder.name,
                        mimeType: folder.mimeType,
                        url: folder.webViewLink,
                        updatedAt: folder.modifiedTime
                    });

                    // If recursive is enabled, fetch subfolders
                    if (recursive && folders.length < limit) {
                        await fetchFoldersFromParent(folder.id);
                    }

                    if (folders.length >= limit) return;
                }
                if (folders.length >= limit) break;
            }
        }

        // If query is provided, search globally, otherwise search from parent
        if (query && parentId === 'root') {
            await fetchFoldersFromParent(''); // Empty parent for global search
        } else {
            await fetchFoldersFromParent(parentId);
        }

        return {
            folders: folders.slice(0, limit)
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;