"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// google-drive/actions/fetch-documents.ts
var fetch_documents_exports = {};
__export(fetch_documents_exports, {
  default: () => fetch_documents_default
});
module.exports = __toCommonJS(fetch_documents_exports);

// google-drive/models.ts
var import_zod = require("zod");
var IdEntity = import_zod.z.object({
  id: import_zod.z.string()
});
var DocumentMetadata = import_zod.z.object({
  files: import_zod.z.string().array(),
  folders: import_zod.z.string().array()
});
var Document = import_zod.z.object({
  id: import_zod.z.string(),
  url: import_zod.z.string(),
  title: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  updatedAt: import_zod.z.string()
});
var Folder = import_zod.z.object({
  id: import_zod.z.string(),
  url: import_zod.z.string(),
  title: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  updatedAt: import_zod.z.string()
});
var JSONSpreadsheet = import_zod.z.object({
  spreadsheetId: import_zod.z.string(),
  properties: import_zod.z.object({}),
  sheets: import_zod.z.object({}).array(),
  namedRanges: import_zod.z.object({}).array(),
  spreadsheetUrl: import_zod.z.string(),
  developerMetadata: import_zod.z.object({}).array(),
  dataSources: import_zod.z.object({}).array(),
  dataSourceSchedules: import_zod.z.object({}).array()
});
var JSONDocument = import_zod.z.object({
  documentId: import_zod.z.string(),
  title: import_zod.z.string(),
  url: import_zod.z.string(),
  tabs: import_zod.z.object({}).array(),
  revisionId: import_zod.z.string(),
  suggestionsViewMode: import_zod.z.union([import_zod.z.literal("DEFAULT_FOR_CURRENT_ACCESS"), import_zod.z.literal("SUGGESTIONS_INLINE"), import_zod.z.literal("PREVIEW_SUGGESTIONS_ACCEPTED"), import_zod.z.literal("PREVIEW_WITHOUT_SUGGESTIONS")]),
  body: import_zod.z.object({}),
  headers: import_zod.z.object({}),
  footers: import_zod.z.object({}),
  footnotes: import_zod.z.object({}),
  documentStyle: import_zod.z.object({}),
  suggestedDocumentStyleChanges: import_zod.z.object({}),
  namedStyles: import_zod.z.object({}),
  suggestedNamedStylesChanges: import_zod.z.object({}),
  lists: import_zod.z.object({}),
  namedRanges: import_zod.z.object({}),
  inlineObjects: import_zod.z.object({}),
  positionedObjects: import_zod.z.object({})
});
var GoogleDocument = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  parents: import_zod.z.string().optional().array(),
  modifiedTime: import_zod.z.string().optional(),
  createdTime: import_zod.z.string().optional(),
  webViewLink: import_zod.z.string().optional(),
  kind: import_zod.z.string().optional()
});
var UploadFileInput = import_zod.z.object({
  content: import_zod.z.string(),
  name: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  folderId: import_zod.z.string().optional(),
  description: import_zod.z.string().optional(),
  isBase64: import_zod.z.boolean().optional()
});
var FolderContentInput = import_zod.z.object({
  id: import_zod.z.string().optional(),
  cursor: import_zod.z.string().optional()
});
var FolderContent = import_zod.z.object({
  files: GoogleDocument.array(),
  folders: GoogleDocument.array(),
  next_cursor: import_zod.z.string().optional()
});
var DriveCapabilities = import_zod.z.object({
  canAddChildren: import_zod.z.boolean(),
  canComment: import_zod.z.boolean(),
  canCopy: import_zod.z.boolean(),
  canDeleteDrive: import_zod.z.boolean(),
  canDownload: import_zod.z.boolean(),
  canEdit: import_zod.z.boolean(),
  canListChildren: import_zod.z.boolean(),
  canManageMembers: import_zod.z.boolean(),
  canReadRevisions: import_zod.z.boolean(),
  canRename: import_zod.z.boolean(),
  canShare: import_zod.z.boolean(),
  canTrashChildren: import_zod.z.boolean(),
  canRenameDrive: import_zod.z.boolean(),
  canChangeDriveBackground: import_zod.z.boolean(),
  canChangeCopyRequiresWriterPermissionRestriction: import_zod.z.boolean(),
  canChangeDomainUsersOnlyRestriction: import_zod.z.boolean(),
  canChangeDriveMembersOnlyRestriction: import_zod.z.boolean(),
  canChangeSharingFoldersRequiresOrganizerPermissionRestriction: import_zod.z.boolean(),
  canResetDriveRestrictions: import_zod.z.boolean(),
  canDeleteChildren: import_zod.z.boolean()
});
var DriveRestrictions = import_zod.z.object({
  adminManagedRestrictions: import_zod.z.boolean(),
  copyRequiresWriterPermission: import_zod.z.boolean(),
  domainUsersOnly: import_zod.z.boolean(),
  driveMembersOnly: import_zod.z.boolean(),
  sharingFoldersRequiresPublisherPermission: import_zod.z.boolean(),
  sharingFoldersRequiresOrganizerPermission: import_zod.z.boolean()
});
var Drive = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  kind: import_zod.z.string(),
  createdTime: import_zod.z.string(),
  hidden: import_zod.z.boolean(),
  capabilities: DriveCapabilities,
  restrictions: DriveRestrictions
});
var ListDrivesInput = import_zod.z.object({
  cursor: import_zod.z.string()
});
var DriveListResponse = import_zod.z.object({
  drives: Drive.array(),
  next_cursor: import_zod.z.string(),
  kind: import_zod.z.string()
});
var Anonymous_googledrive_action_fetchdocument_output = import_zod.z.string();

// google-drive/actions/fetch-documents.ts
var import_zod2 = require("zod");
var FetchDocumentsInput = import_zod2.z.object({
  files: import_zod2.z.array(import_zod2.z.string()).optional(),
  folders: import_zod2.z.array(import_zod2.z.string()).optional(),
  mimeType: import_zod2.z.string().optional(),
  limit: import_zod2.z.number().optional(),
  includeSubfolders: import_zod2.z.boolean().optional(),
  query: import_zod2.z.string().optional()
});
var FetchDocumentsOutput = import_zod2.z.object({
  documents: import_zod2.z.array(Document)
});
var action = {
  type: "action",
  description: "Fetch documents from Google Drive with flexible filtering options. Can fetch specific files, documents from folders, or search by query.",
  version: "1.0.0",
  endpoint: {
    method: "GET",
    path: "/documents",
    group: "Documents"
  },
  input: FetchDocumentsInput,
  output: FetchDocumentsOutput,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  exec: async (nango, input) => {
    const {
      files,
      folders,
      mimeType,
      limit = 100,
      includeSubfolders = true,
      query
    } = input;
    if (!files && !folders && !query) {
      throw new nango.ActionError({
        message: "At least one of files, folders, or query must be provided"
      });
    }
    const documents = [];
    const processedFolders = /* @__PURE__ */ new Set();
    async function processFolder(folderId) {
      if (processedFolders.has(folderId)) return;
      processedFolders.add(folderId);
      let searchQuery = `('${folderId}' in parents) and trashed = false`;
      if (mimeType) {
        searchQuery += ` and mimeType = '${mimeType}'`;
      } else {
        searchQuery += ` and mimeType != 'application/vnd.google-apps.folder'`;
      }
      const proxyConfiguration = {
        endpoint: `drive/v3/files`,
        params: {
          fields: "files(id, name, mimeType, webViewLink, parents, modifiedTime), nextPageToken",
          pageSize: Math.min(limit, 100).toString(),
          corpora: "allDrives",
          includeItemsFromAllDrives: "true",
          supportsAllDrives: "true",
          q: searchQuery
        },
        paginate: {
          response_path: "files"
        },
        retries: 10
      };
      for await (const files2 of nango.paginate(proxyConfiguration)) {
        for (const file of files2) {
          if (file.mimeType === "application/vnd.google-apps.folder" && includeSubfolders) {
            await processFolder(file.id);
          } else if (file.mimeType !== "application/vnd.google-apps.folder") {
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
    if (folders && folders.length > 0) {
      for (const folderId of folders) {
        await processFolder(folderId);
        if (documents.length >= limit) break;
      }
    }
    if (files && files.length > 0) {
      for (const fileId of files) {
        if (documents.length >= limit) break;
        try {
          const config = {
            endpoint: `drive/v3/files/${fileId}`,
            params: {
              fields: "id, name, mimeType, webViewLink, parents, modifiedTime",
              supportsAllDrives: "true"
            },
            retries: 10
          };
          const documentResponse = await nango.get(config);
          const {
            data
          } = documentResponse;
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
          await nango.log(`Error fetching file ${fileId}: ${error}`, {
            level: "warn"
          });
        }
      }
    }
    if (query && !files && !folders) {
      let searchQuery = `(${query}) and trashed = false`;
      if (mimeType) {
        searchQuery += ` and mimeType = '${mimeType}'`;
      } else {
        searchQuery += ` and mimeType != 'application/vnd.google-apps.folder'`;
      }
      const proxyConfiguration = {
        endpoint: `drive/v3/files`,
        params: {
          fields: "files(id, name, mimeType, webViewLink, parents, modifiedTime), nextPageToken",
          pageSize: Math.min(limit, 100).toString(),
          corpora: "allDrives",
          includeItemsFromAllDrives: "true",
          supportsAllDrives: "true",
          q: searchQuery
        },
        paginate: {
          response_path: "files"
        },
        retries: 10
      };
      for await (const files2 of nango.paginate(proxyConfiguration)) {
        for (const file of files2) {
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
};
var fetch_documents_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZ29vZ2xlLWRyaXZlL2FjdGlvbnMvZmV0Y2gtZG9jdW1lbnRzLnRzIiwgImdvb2dsZS1kcml2ZS9tb2RlbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB0eXBlIHsgR29vZ2xlRHJpdmVGaWxlUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy5qcyc7XG5pbXBvcnQgdHlwZSB7IFByb3h5Q29uZmlndXJhdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vbW9kZWxzLmpzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuY29uc3QgRmV0Y2hEb2N1bWVudHNJbnB1dCA9IHoub2JqZWN0KHtcbiAgZmlsZXM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgZm9sZGVyczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaW1pdDogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBpbmNsdWRlU3ViZm9sZGVyczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgcXVlcnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5jb25zdCBGZXRjaERvY3VtZW50c091dHB1dCA9IHoub2JqZWN0KHtcbiAgZG9jdW1lbnRzOiB6LmFycmF5KERvY3VtZW50KVxufSk7XG5jb25zdCBhY3Rpb24gPSB7XG4gIHR5cGU6IFwiYWN0aW9uXCIsXG4gIGRlc2NyaXB0aW9uOiAnRmV0Y2ggZG9jdW1lbnRzIGZyb20gR29vZ2xlIERyaXZlIHdpdGggZmxleGlibGUgZmlsdGVyaW5nIG9wdGlvbnMuIENhbiBmZXRjaCBzcGVjaWZpYyBmaWxlcywgZG9jdW1lbnRzIGZyb20gZm9sZGVycywgb3Igc2VhcmNoIGJ5IHF1ZXJ5LicsXG4gIHZlcnNpb246ICcxLjAuMCcsXG4gIGVuZHBvaW50OiB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBwYXRoOiAnL2RvY3VtZW50cycsXG4gICAgZ3JvdXA6ICdEb2N1bWVudHMnXG4gIH0sXG4gIGlucHV0OiBGZXRjaERvY3VtZW50c0lucHV0LFxuICBvdXRwdXQ6IEZldGNoRG9jdW1lbnRzT3V0cHV0LFxuICBzY29wZXM6IFsnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZS5yZWFkb25seSddLFxuICBleGVjOiBhc3luYyAobmFuZ28sIGlucHV0KTogUHJvbWlzZTx7XG4gICAgZG9jdW1lbnRzOiBEb2N1bWVudFtdO1xuICB9PiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZmlsZXMsXG4gICAgICBmb2xkZXJzLFxuICAgICAgbWltZVR5cGUsXG4gICAgICBsaW1pdCA9IDEwMCxcbiAgICAgIGluY2x1ZGVTdWJmb2xkZXJzID0gdHJ1ZSxcbiAgICAgIHF1ZXJ5XG4gICAgfSA9IGlucHV0O1xuICAgIGlmICghZmlsZXMgJiYgIWZvbGRlcnMgJiYgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgbmFuZ28uQWN0aW9uRXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiAnQXQgbGVhc3Qgb25lIG9mIGZpbGVzLCBmb2xkZXJzLCBvciBxdWVyeSBtdXN0IGJlIHByb3ZpZGVkJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRvY3VtZW50czogRG9jdW1lbnRbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZEZvbGRlcnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBwcm9jZXNzIGEgZm9sZGVyIHJlY3Vyc2l2ZWx5XG4gICAgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ZvbGRlcihmb2xkZXJJZDogc3RyaW5nKSB7XG4gICAgICBpZiAocHJvY2Vzc2VkRm9sZGVycy5oYXMoZm9sZGVySWQpKSByZXR1cm47XG4gICAgICBwcm9jZXNzZWRGb2xkZXJzLmFkZChmb2xkZXJJZCk7XG4gICAgICBsZXQgc2VhcmNoUXVlcnkgPSBgKCcke2ZvbGRlcklkfScgaW4gcGFyZW50cykgYW5kIHRyYXNoZWQgPSBmYWxzZWA7XG4gICAgICBpZiAobWltZVR5cGUpIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gYCBhbmQgbWltZVR5cGUgPSAnJHttaW1lVHlwZX0nYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEV4Y2x1ZGUgZm9sZGVycyBmcm9tIHJlc3VsdHMgdW5sZXNzIHNwZWNpZmljYWxseSByZXF1ZXN0ZWRcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gYCBhbmQgbWltZVR5cGUgIT0gJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5mb2xkZXInYDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3h5Q29uZmlndXJhdGlvbjogUHJveHlDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBlbmRwb2ludDogYGRyaXZlL3YzL2ZpbGVzYCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZmllbGRzOiAnZmlsZXMoaWQsIG5hbWUsIG1pbWVUeXBlLCB3ZWJWaWV3TGluaywgcGFyZW50cywgbW9kaWZpZWRUaW1lKSwgbmV4dFBhZ2VUb2tlbicsXG4gICAgICAgICAgcGFnZVNpemU6IE1hdGgubWluKGxpbWl0LCAxMDApLnRvU3RyaW5nKCksXG4gICAgICAgICAgY29ycG9yYTogJ2FsbERyaXZlcycsXG4gICAgICAgICAgaW5jbHVkZUl0ZW1zRnJvbUFsbERyaXZlczogJ3RydWUnLFxuICAgICAgICAgIHN1cHBvcnRzQWxsRHJpdmVzOiAndHJ1ZScsXG4gICAgICAgICAgcTogc2VhcmNoUXVlcnlcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGU6IHtcbiAgICAgICAgICByZXNwb25zZV9wYXRoOiAnZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHJldHJpZXM6IDEwXG4gICAgICB9O1xuICAgICAgZm9yIGF3YWl0IChjb25zdCBmaWxlcyBvZiBuYW5nby5wYWdpbmF0ZTxHb29nbGVEcml2ZUZpbGVSZXNwb25zZT4ocHJveHlDb25maWd1cmF0aW9uKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICBpZiAoZmlsZS5taW1lVHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5mb2xkZXInICYmIGluY2x1ZGVTdWJmb2xkZXJzKSB7XG4gICAgICAgICAgICBhd2FpdCBwcm9jZXNzRm9sZGVyKGZpbGUuaWQpOyAvLyBSZWN1cnNpdmVseSBwcm9jZXNzIHN1YmZvbGRlcnNcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpbGUubWltZVR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMuZm9sZGVyJykge1xuICAgICAgICAgICAgZG9jdW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogZmlsZS5pZCxcbiAgICAgICAgICAgICAgdXJsOiBmaWxlLndlYlZpZXdMaW5rLFxuICAgICAgICAgICAgICBtaW1lVHlwZTogZmlsZS5taW1lVHlwZSxcbiAgICAgICAgICAgICAgdGl0bGU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgdXBkYXRlZEF0OiBmaWxlLm1vZGlmaWVkVGltZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA+PSBsaW1pdCkgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb2Nlc3MgZm9sZGVycyBpZiBwcm92aWRlZFxuICAgIGlmIChmb2xkZXJzICYmIGZvbGRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBmb2xkZXJJZCBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGF3YWl0IHByb2Nlc3NGb2xkZXIoZm9sZGVySWQpO1xuICAgICAgICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA+PSBsaW1pdCkgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyBpbmRpdmlkdWFsIGZpbGVzIGlmIHByb3ZpZGVkXG4gICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgZmlsZUlkIG9mIGZpbGVzKSB7XG4gICAgICAgIGlmIChkb2N1bWVudHMubGVuZ3RoID49IGxpbWl0KSBicmVhaztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBjb25maWc6IFByb3h5Q29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgIGVuZHBvaW50OiBgZHJpdmUvdjMvZmlsZXMvJHtmaWxlSWR9YCxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZHM6ICdpZCwgbmFtZSwgbWltZVR5cGUsIHdlYlZpZXdMaW5rLCBwYXJlbnRzLCBtb2RpZmllZFRpbWUnLFxuICAgICAgICAgICAgICBzdXBwb3J0c0FsbERyaXZlczogJ3RydWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV0cmllczogMTBcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGRvY3VtZW50UmVzcG9uc2UgPSBhd2FpdCBuYW5nby5nZXQ8R29vZ2xlRHJpdmVGaWxlUmVzcG9uc2U+KGNvbmZpZyk7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0gPSBkb2N1bWVudFJlc3BvbnNlO1xuXG4gICAgICAgICAgLy8gQXBwbHkgbWltZVR5cGUgZmlsdGVyIGlmIHNwZWNpZmllZFxuICAgICAgICAgIGlmICghbWltZVR5cGUgfHwgZGF0YS5taW1lVHlwZSA9PT0gbWltZVR5cGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgIHVybDogZGF0YS53ZWJWaWV3TGluayxcbiAgICAgICAgICAgICAgbWltZVR5cGU6IGRhdGEubWltZVR5cGUsXG4gICAgICAgICAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgIHVwZGF0ZWRBdDogZGF0YS5tb2RpZmllZFRpbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBhd2FpdCBuYW5nby5sb2coYEVycm9yIGZldGNoaW5nIGZpbGUgJHtmaWxlSWR9OiAke2Vycm9yfWAsIHtcbiAgICAgICAgICAgIGxldmVsOiAnd2FybidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb2Nlc3MgcXVlcnkgc2VhcmNoIGlmIHByb3ZpZGVkIGFuZCBubyBvdGhlciBzb3VyY2VzXG4gICAgaWYgKHF1ZXJ5ICYmICFmaWxlcyAmJiAhZm9sZGVycykge1xuICAgICAgbGV0IHNlYXJjaFF1ZXJ5ID0gYCgke3F1ZXJ5fSkgYW5kIHRyYXNoZWQgPSBmYWxzZWA7XG4gICAgICBpZiAobWltZVR5cGUpIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gYCBhbmQgbWltZVR5cGUgPSAnJHttaW1lVHlwZX0nYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9IGAgYW5kIG1pbWVUeXBlICE9ICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMuZm9sZGVyJ2A7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm94eUNvbmZpZ3VyYXRpb246IFByb3h5Q29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgZW5kcG9pbnQ6IGBkcml2ZS92My9maWxlc2AsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGZpZWxkczogJ2ZpbGVzKGlkLCBuYW1lLCBtaW1lVHlwZSwgd2ViVmlld0xpbmssIHBhcmVudHMsIG1vZGlmaWVkVGltZSksIG5leHRQYWdlVG9rZW4nLFxuICAgICAgICAgIHBhZ2VTaXplOiBNYXRoLm1pbihsaW1pdCwgMTAwKS50b1N0cmluZygpLFxuICAgICAgICAgIGNvcnBvcmE6ICdhbGxEcml2ZXMnLFxuICAgICAgICAgIGluY2x1ZGVJdGVtc0Zyb21BbGxEcml2ZXM6ICd0cnVlJyxcbiAgICAgICAgICBzdXBwb3J0c0FsbERyaXZlczogJ3RydWUnLFxuICAgICAgICAgIHE6IHNlYXJjaFF1ZXJ5XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgcmVzcG9uc2VfcGF0aDogJ2ZpbGVzJ1xuICAgICAgICB9LFxuICAgICAgICByZXRyaWVzOiAxMFxuICAgICAgfTtcbiAgICAgIGZvciBhd2FpdCAoY29uc3QgZmlsZXMgb2YgbmFuZ28ucGFnaW5hdGU8R29vZ2xlRHJpdmVGaWxlUmVzcG9uc2U+KHByb3h5Q29uZmlndXJhdGlvbikpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgZG9jdW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGZpbGUuaWQsXG4gICAgICAgICAgICB1cmw6IGZpbGUud2ViVmlld0xpbmssXG4gICAgICAgICAgICBtaW1lVHlwZTogZmlsZS5taW1lVHlwZSxcbiAgICAgICAgICAgIHRpdGxlOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGZpbGUubW9kaWZpZWRUaW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGRvY3VtZW50cy5sZW5ndGggPj0gbGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudHMubGVuZ3RoID49IGxpbWl0KSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvY3VtZW50czogZG9jdW1lbnRzLnNsaWNlKDAsIGxpbWl0KVxuICAgIH07XG4gIH1cbn07XG5leHBvcnQgdHlwZSBOYW5nb0FjdGlvbkxvY2FsID0gUGFyYW1ldGVyczwodHlwZW9mIGFjdGlvbilbJ2V4ZWMnXT5bMF07XG5leHBvcnQgZGVmYXVsdCBhY3Rpb247IiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5leHBvcnQgY29uc3QgSWRFbnRpdHkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIElkRW50aXR5ID0gei5pbmZlcjx0eXBlb2YgSWRFbnRpdHk+O1xuZXhwb3J0IGNvbnN0IERvY3VtZW50TWV0YWRhdGEgPSB6Lm9iamVjdCh7XG4gIGZpbGVzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIGZvbGRlcnM6IHouc3RyaW5nKCkuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBEb2N1bWVudE1ldGFkYXRhID0gei5pbmZlcjx0eXBlb2YgRG9jdW1lbnRNZXRhZGF0YT47XG5leHBvcnQgY29uc3QgRG9jdW1lbnQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB1cmw6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIERvY3VtZW50ID0gei5pbmZlcjx0eXBlb2YgRG9jdW1lbnQ+O1xuZXhwb3J0IGNvbnN0IEZvbGRlciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHVybDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgRm9sZGVyID0gei5pbmZlcjx0eXBlb2YgRm9sZGVyPjtcbmV4cG9ydCBjb25zdCBKU09OU3ByZWFkc2hlZXQgPSB6Lm9iamVjdCh7XG4gIHNwcmVhZHNoZWV0SWQ6IHouc3RyaW5nKCksXG4gIHByb3BlcnRpZXM6IHoub2JqZWN0KHt9KSxcbiAgc2hlZXRzOiB6Lm9iamVjdCh7fSkuYXJyYXkoKSxcbiAgbmFtZWRSYW5nZXM6IHoub2JqZWN0KHt9KS5hcnJheSgpLFxuICBzcHJlYWRzaGVldFVybDogei5zdHJpbmcoKSxcbiAgZGV2ZWxvcGVyTWV0YWRhdGE6IHoub2JqZWN0KHt9KS5hcnJheSgpLFxuICBkYXRhU291cmNlczogei5vYmplY3Qoe30pLmFycmF5KCksXG4gIGRhdGFTb3VyY2VTY2hlZHVsZXM6IHoub2JqZWN0KHt9KS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIEpTT05TcHJlYWRzaGVldCA9IHouaW5mZXI8dHlwZW9mIEpTT05TcHJlYWRzaGVldD47XG5leHBvcnQgY29uc3QgSlNPTkRvY3VtZW50ID0gei5vYmplY3Qoe1xuICBkb2N1bWVudElkOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgdXJsOiB6LnN0cmluZygpLFxuICB0YWJzOiB6Lm9iamVjdCh7fSkuYXJyYXkoKSxcbiAgcmV2aXNpb25JZDogei5zdHJpbmcoKSxcbiAgc3VnZ2VzdGlvbnNWaWV3TW9kZTogei51bmlvbihbei5saXRlcmFsKFwiREVGQVVMVF9GT1JfQ1VSUkVOVF9BQ0NFU1NcIiksIHoubGl0ZXJhbChcIlNVR0dFU1RJT05TX0lOTElORVwiKSwgei5saXRlcmFsKFwiUFJFVklFV19TVUdHRVNUSU9OU19BQ0NFUFRFRFwiKSwgei5saXRlcmFsKFwiUFJFVklFV19XSVRIT1VUX1NVR0dFU1RJT05TXCIpXSksXG4gIGJvZHk6IHoub2JqZWN0KHt9KSxcbiAgaGVhZGVyczogei5vYmplY3Qoe30pLFxuICBmb290ZXJzOiB6Lm9iamVjdCh7fSksXG4gIGZvb3Rub3Rlczogei5vYmplY3Qoe30pLFxuICBkb2N1bWVudFN0eWxlOiB6Lm9iamVjdCh7fSksXG4gIHN1Z2dlc3RlZERvY3VtZW50U3R5bGVDaGFuZ2VzOiB6Lm9iamVjdCh7fSksXG4gIG5hbWVkU3R5bGVzOiB6Lm9iamVjdCh7fSksXG4gIHN1Z2dlc3RlZE5hbWVkU3R5bGVzQ2hhbmdlczogei5vYmplY3Qoe30pLFxuICBsaXN0czogei5vYmplY3Qoe30pLFxuICBuYW1lZFJhbmdlczogei5vYmplY3Qoe30pLFxuICBpbmxpbmVPYmplY3RzOiB6Lm9iamVjdCh7fSksXG4gIHBvc2l0aW9uZWRPYmplY3RzOiB6Lm9iamVjdCh7fSlcbn0pO1xuZXhwb3J0IHR5cGUgSlNPTkRvY3VtZW50ID0gei5pbmZlcjx0eXBlb2YgSlNPTkRvY3VtZW50PjtcbmV4cG9ydCBjb25zdCBHb29nbGVEb2N1bWVudCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICBwYXJlbnRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuYXJyYXkoKSxcbiAgbW9kaWZpZWRUaW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNyZWF0ZWRUaW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYlZpZXdMaW5rOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGtpbmQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBHb29nbGVEb2N1bWVudCA9IHouaW5mZXI8dHlwZW9mIEdvb2dsZURvY3VtZW50PjtcbmV4cG9ydCBjb25zdCBVcGxvYWRGaWxlSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGNvbnRlbnQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICBmb2xkZXJJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpc0Jhc2U2NDogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBVcGxvYWRGaWxlSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGxvYWRGaWxlSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IEZvbGRlckNvbnRlbnRJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3Vyc29yOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgRm9sZGVyQ29udGVudElucHV0ID0gei5pbmZlcjx0eXBlb2YgRm9sZGVyQ29udGVudElucHV0PjtcbmV4cG9ydCBjb25zdCBGb2xkZXJDb250ZW50ID0gei5vYmplY3Qoe1xuICBmaWxlczogR29vZ2xlRG9jdW1lbnQuYXJyYXkoKSxcbiAgZm9sZGVyczogR29vZ2xlRG9jdW1lbnQuYXJyYXkoKSxcbiAgbmV4dF9jdXJzb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBGb2xkZXJDb250ZW50ID0gei5pbmZlcjx0eXBlb2YgRm9sZGVyQ29udGVudD47XG5leHBvcnQgY29uc3QgRHJpdmVDYXBhYmlsaXRpZXMgPSB6Lm9iamVjdCh7XG4gIGNhbkFkZENoaWxkcmVuOiB6LmJvb2xlYW4oKSxcbiAgY2FuQ29tbWVudDogei5ib29sZWFuKCksXG4gIGNhbkNvcHk6IHouYm9vbGVhbigpLFxuICBjYW5EZWxldGVEcml2ZTogei5ib29sZWFuKCksXG4gIGNhbkRvd25sb2FkOiB6LmJvb2xlYW4oKSxcbiAgY2FuRWRpdDogei5ib29sZWFuKCksXG4gIGNhbkxpc3RDaGlsZHJlbjogei5ib29sZWFuKCksXG4gIGNhbk1hbmFnZU1lbWJlcnM6IHouYm9vbGVhbigpLFxuICBjYW5SZWFkUmV2aXNpb25zOiB6LmJvb2xlYW4oKSxcbiAgY2FuUmVuYW1lOiB6LmJvb2xlYW4oKSxcbiAgY2FuU2hhcmU6IHouYm9vbGVhbigpLFxuICBjYW5UcmFzaENoaWxkcmVuOiB6LmJvb2xlYW4oKSxcbiAgY2FuUmVuYW1lRHJpdmU6IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VEcml2ZUJhY2tncm91bmQ6IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VDb3B5UmVxdWlyZXNXcml0ZXJQZXJtaXNzaW9uUmVzdHJpY3Rpb246IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VEb21haW5Vc2Vyc09ubHlSZXN0cmljdGlvbjogei5ib29sZWFuKCksXG4gIGNhbkNoYW5nZURyaXZlTWVtYmVyc09ubHlSZXN0cmljdGlvbjogei5ib29sZWFuKCksXG4gIGNhbkNoYW5nZVNoYXJpbmdGb2xkZXJzUmVxdWlyZXNPcmdhbml6ZXJQZXJtaXNzaW9uUmVzdHJpY3Rpb246IHouYm9vbGVhbigpLFxuICBjYW5SZXNldERyaXZlUmVzdHJpY3Rpb25zOiB6LmJvb2xlYW4oKSxcbiAgY2FuRGVsZXRlQ2hpbGRyZW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIERyaXZlQ2FwYWJpbGl0aWVzID0gei5pbmZlcjx0eXBlb2YgRHJpdmVDYXBhYmlsaXRpZXM+O1xuZXhwb3J0IGNvbnN0IERyaXZlUmVzdHJpY3Rpb25zID0gei5vYmplY3Qoe1xuICBhZG1pbk1hbmFnZWRSZXN0cmljdGlvbnM6IHouYm9vbGVhbigpLFxuICBjb3B5UmVxdWlyZXNXcml0ZXJQZXJtaXNzaW9uOiB6LmJvb2xlYW4oKSxcbiAgZG9tYWluVXNlcnNPbmx5OiB6LmJvb2xlYW4oKSxcbiAgZHJpdmVNZW1iZXJzT25seTogei5ib29sZWFuKCksXG4gIHNoYXJpbmdGb2xkZXJzUmVxdWlyZXNQdWJsaXNoZXJQZXJtaXNzaW9uOiB6LmJvb2xlYW4oKSxcbiAgc2hhcmluZ0ZvbGRlcnNSZXF1aXJlc09yZ2FuaXplclBlcm1pc3Npb246IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIERyaXZlUmVzdHJpY3Rpb25zID0gei5pbmZlcjx0eXBlb2YgRHJpdmVSZXN0cmljdGlvbnM+O1xuZXhwb3J0IGNvbnN0IERyaXZlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAga2luZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZFRpbWU6IHouc3RyaW5nKCksXG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIGNhcGFiaWxpdGllczogRHJpdmVDYXBhYmlsaXRpZXMsXG4gIHJlc3RyaWN0aW9uczogRHJpdmVSZXN0cmljdGlvbnNcbn0pO1xuZXhwb3J0IHR5cGUgRHJpdmUgPSB6LmluZmVyPHR5cGVvZiBEcml2ZT47XG5leHBvcnQgY29uc3QgTGlzdERyaXZlc0lucHV0ID0gei5vYmplY3Qoe1xuICBjdXJzb3I6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgTGlzdERyaXZlc0lucHV0ID0gei5pbmZlcjx0eXBlb2YgTGlzdERyaXZlc0lucHV0PjtcbmV4cG9ydCBjb25zdCBEcml2ZUxpc3RSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgZHJpdmVzOiBEcml2ZS5hcnJheSgpLFxuICBuZXh0X2N1cnNvcjogei5zdHJpbmcoKSxcbiAga2luZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBEcml2ZUxpc3RSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIERyaXZlTGlzdFJlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBBbm9ueW1vdXNfZ29vZ2xlZHJpdmVfYWN0aW9uX2ZldGNoZG9jdW1lbnRfb3V0cHV0ID0gei5zdHJpbmcoKTtcbmV4cG9ydCB0eXBlIEFub255bW91c19nb29nbGVkcml2ZV9hY3Rpb25fZmV0Y2hkb2N1bWVudF9vdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBBbm9ueW1vdXNfZ29vZ2xlZHJpdmVfYWN0aW9uX2ZldGNoZG9jdW1lbnRfb3V0cHV0PjtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7XG4gIElkRW50aXR5OiBJZEVudGl0eSxcbiAgRG9jdW1lbnRNZXRhZGF0YTogRG9jdW1lbnRNZXRhZGF0YSxcbiAgRG9jdW1lbnQ6IERvY3VtZW50LFxuICBGb2xkZXI6IEZvbGRlcixcbiAgSlNPTlNwcmVhZHNoZWV0OiBKU09OU3ByZWFkc2hlZXQsXG4gIEpTT05Eb2N1bWVudDogSlNPTkRvY3VtZW50LFxuICBHb29nbGVEb2N1bWVudDogR29vZ2xlRG9jdW1lbnQsXG4gIFVwbG9hZEZpbGVJbnB1dDogVXBsb2FkRmlsZUlucHV0LFxuICBGb2xkZXJDb250ZW50SW5wdXQ6IEZvbGRlckNvbnRlbnRJbnB1dCxcbiAgRm9sZGVyQ29udGVudDogRm9sZGVyQ29udGVudCxcbiAgRHJpdmVDYXBhYmlsaXRpZXM6IERyaXZlQ2FwYWJpbGl0aWVzLFxuICBEcml2ZVJlc3RyaWN0aW9uczogRHJpdmVSZXN0cmljdGlvbnMsXG4gIERyaXZlOiBEcml2ZSxcbiAgTGlzdERyaXZlc0lucHV0OiBMaXN0RHJpdmVzSW5wdXQsXG4gIERyaXZlTGlzdFJlc3BvbnNlOiBEcml2ZUxpc3RSZXNwb25zZSxcbiAgQW5vbnltb3VzX2dvb2dsZWRyaXZlX2FjdGlvbl9mZXRjaGRvY3VtZW50X291dHB1dDogQW5vbnltb3VzX2dvb2dsZWRyaXZlX2FjdGlvbl9mZXRjaGRvY3VtZW50X291dHB1dFxufTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLGlCQUFrQjtBQUNYLElBQU0sV0FBVyxhQUFFLE9BQU87QUFBQSxFQUMvQixJQUFJLGFBQUUsT0FBTztBQUNmLENBQUM7QUFFTSxJQUFNLG1CQUFtQixhQUFFLE9BQU87QUFBQSxFQUN2QyxPQUFPLGFBQUUsT0FBTyxFQUFFLE1BQU07QUFBQSxFQUN4QixTQUFTLGFBQUUsT0FBTyxFQUFFLE1BQU07QUFDNUIsQ0FBQztBQUVNLElBQU0sV0FBVyxhQUFFLE9BQU87QUFBQSxFQUMvQixJQUFJLGFBQUUsT0FBTztBQUFBLEVBQ2IsS0FBSyxhQUFFLE9BQU87QUFBQSxFQUNkLE9BQU8sYUFBRSxPQUFPO0FBQUEsRUFDaEIsVUFBVSxhQUFFLE9BQU87QUFBQSxFQUNuQixXQUFXLGFBQUUsT0FBTztBQUN0QixDQUFDO0FBRU0sSUFBTSxTQUFTLGFBQUUsT0FBTztBQUFBLEVBQzdCLElBQUksYUFBRSxPQUFPO0FBQUEsRUFDYixLQUFLLGFBQUUsT0FBTztBQUFBLEVBQ2QsT0FBTyxhQUFFLE9BQU87QUFBQSxFQUNoQixVQUFVLGFBQUUsT0FBTztBQUFBLEVBQ25CLFdBQVcsYUFBRSxPQUFPO0FBQ3RCLENBQUM7QUFFTSxJQUFNLGtCQUFrQixhQUFFLE9BQU87QUFBQSxFQUN0QyxlQUFlLGFBQUUsT0FBTztBQUFBLEVBQ3hCLFlBQVksYUFBRSxP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
