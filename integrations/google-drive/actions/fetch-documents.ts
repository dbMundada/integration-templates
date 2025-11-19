import { createAction } from 'nango';
import type { GoogleDriveFileResponse } from '../types.js';
import type { ProxyConfiguration } from 'nango';
import { Document } from '../models.js';
import { z } from 'zod';

const FetchDocumentsInput = z.object({
    files: z.array(z.string()).optional(),
    folders: z.array(z.string()).optional(),
    mimeType: z.string().optional(),
    limit: z.number().optional(),
    includeSubfolders: z.boolean().optional(),
    query: z.string().optional()
});

const FetchDocumentsOutput = z.object({
    documents: z.array(Document)
});

const action = createAction({
    description: 'Fetch documents from Google Drive with flexible filtering options. Can fetch specific files, documents from folders, or search by query.',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/documents',
        group: 'Documents'
    },

    input: FetchDocumentsInput,
    output: FetchDocumentsOutput,

    scopes: ['https://www.googleapis.com/auth/drive.readonly'],

    exec: async (nango, input): Promise<{ documents: Document[] }> => {
        const { files, folders, mimeType, limit = 100, includeSubfolders = true, query } = input;

        if (!files && !folders && !query) {
            throw new nango.ActionError({
                message: 'At least one of files, folders, or query must be provided'
            });
        }

        const documents: Document[] = [];
        const processedFolders = new Set<string>();

        // Helper function to process a folder recursively
        async function processFolder(folderId: string) {
            if (processedFolders.has(folderId)) return;
            processedFolders.add(folderId);

            let searchQuery = `('${folderId}' in parents) and trashed = false`;
            if (mimeType) {
                searchQuery += ` and mimeType = '${mimeType}'`;
            } else {
                // Exclude folders from results unless specifically requested
                searchQuery += ` and mimeType != 'application/vnd.google-apps.folder'`;
            }

            const proxyConfiguration: ProxyConfiguration = {
                endpoint: `drive/v3/files`,
                params: {
                    fields: 'files(id, name, mimeType, webViewLink, parents, modifiedTime), nextPageToken',
                    pageSize: Math.min(limit, 100).toString(),
                    corpora: 'allDrives',
                    includeItemsFromAllDrives: 'true',
                    supportsAllDrives: 'true',
                    q: searchQuery
                },
                paginate: {
                    response_path: 'files'
                },
                retries: 10
            };

            for await (const files of nango.paginate<GoogleDriveFileResponse>(proxyConfiguration)) {
                for (const file of files) {
                    if (file.mimeType === 'application/vnd.google-apps.folder' && includeSubfolders) {
                        await processFolder(file.id); // Recursively process subfolders
                    } else if (file.mimeType !== 'application/vnd.google-apps.folder') {
                        documents.push({
                            id: file.id,
                            url: file.webViewLink,
                            mimeType: file.mimeType,
                            title: file.name,
                            updatedAt: file.modifiedTime
                        });

                        if (documents.length >= limit) return;
                    }
                }
            }
        }

        // Process folders if provided
        if (folders && folders.length > 0) {
            for (const folderId of folders) {
                await processFolder(folderId);
                if (documents.length >= limit) break;
            }
        }

        // Process individual files if provided
        if (files && files.length > 0) {
            for (const fileId of files) {
                if (documents.length >= limit) break;

                try {
                    const config: ProxyConfiguration = {
                        endpoint: `drive/v3/files/${fileId}`,
                        params: {
                            fields: 'id, name, mimeType, webViewLink, parents, modifiedTime',
                            supportsAllDrives: 'true'
                        },
                        retries: 10
                    };

                    const documentResponse = await nango.get<GoogleDriveFileResponse>(config);
                    const { data } = documentResponse;

                    // Apply mimeType filter if specified
                    if (!mimeType || data.mimeType === mimeType) {
                        documents.push({
                            id: data.id,
                            url: data.webViewLink,
                            mimeType: data.mimeType,
                            title: data.name,
                            updatedAt: data.modifiedTime
                        });
                    }
                } catch (error) {
                    await nango.log(`Error fetching file ${fileId}: ${error}`, { level: 'warn' });
                }
            }
        }

        // Process query search if provided and no other sources
        if (query && !files && !folders) {
            let searchQuery = `(${query}) and trashed = false`;
            if (mimeType) {
                searchQuery += ` and mimeType = '${mimeType}'`;
            } else {
                searchQuery += ` and mimeType != 'application/vnd.google-apps.folder'`;
            }

            const proxyConfiguration: ProxyConfiguration = {
                endpoint: `drive/v3/files`,
                params: {
                    fields: 'files(id, name, mimeType, webViewLink, parents, modifiedTime), nextPageToken',
                    pageSize: Math.min(limit, 100).toString(),
                    corpora: 'allDrives',
                    includeItemsFromAllDrives: 'true',
                    supportsAllDrives: 'true',
                    q: searchQuery
                },
                paginate: {
                    response_path: 'files'
                },
                retries: 10
            };

            for await (const files of nango.paginate<GoogleDriveFileResponse>(proxyConfiguration)) {
                for (const file of files) {
                    documents.push({
                        id: file.id,
                        url: file.webViewLink,
                        mimeType: file.mimeType,
                        title: file.name,
                        updatedAt: file.modifiedTime
                    });

                    if (documents.length >= limit) break;
                }
                if (documents.length >= limit) break;
            }
        }

        return {
            documents: documents.slice(0, limit)
        };
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;