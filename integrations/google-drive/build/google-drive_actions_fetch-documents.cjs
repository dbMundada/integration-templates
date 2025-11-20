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

// models.ts
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZ29vZ2xlLWRyaXZlL2FjdGlvbnMvZmV0Y2gtZG9jdW1lbnRzLnRzIiwgIm1vZGVscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHR5cGUgeyBHb29nbGVEcml2ZUZpbGVSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzLmpzJztcbmltcG9ydCB0eXBlIHsgUHJveHlDb25maWd1cmF0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMuanMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5jb25zdCBGZXRjaERvY3VtZW50c0lucHV0ID0gei5vYmplY3Qoe1xuICBmaWxlczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBmb2xkZXJzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpbWl0OiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGluY2x1ZGVTdWJmb2xkZXJzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBxdWVyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmNvbnN0IEZldGNoRG9jdW1lbnRzT3V0cHV0ID0gei5vYmplY3Qoe1xuICBkb2N1bWVudHM6IHouYXJyYXkoRG9jdW1lbnQpXG59KTtcbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdGZXRjaCBkb2N1bWVudHMgZnJvbSBHb29nbGUgRHJpdmUgd2l0aCBmbGV4aWJsZSBmaWx0ZXJpbmcgb3B0aW9ucy4gQ2FuIGZldGNoIHNwZWNpZmljIGZpbGVzLCBkb2N1bWVudHMgZnJvbSBmb2xkZXJzLCBvciBzZWFyY2ggYnkgcXVlcnkuJyxcbiAgdmVyc2lvbjogJzEuMC4wJyxcbiAgZW5kcG9pbnQ6IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHBhdGg6ICcvZG9jdW1lbnRzJyxcbiAgICBncm91cDogJ0RvY3VtZW50cydcbiAgfSxcbiAgaW5wdXQ6IEZldGNoRG9jdW1lbnRzSW5wdXQsXG4gIG91dHB1dDogRmV0Y2hEb2N1bWVudHNPdXRwdXQsXG4gIHNjb3BlczogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLnJlYWRvbmx5J10sXG4gIGV4ZWM6IGFzeW5jIChuYW5nbywgaW5wdXQpOiBQcm9taXNlPHtcbiAgICBkb2N1bWVudHM6IERvY3VtZW50W107XG4gIH0+ID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBmaWxlcyxcbiAgICAgIGZvbGRlcnMsXG4gICAgICBtaW1lVHlwZSxcbiAgICAgIGxpbWl0ID0gMTAwLFxuICAgICAgaW5jbHVkZVN1YmZvbGRlcnMgPSB0cnVlLFxuICAgICAgcXVlcnlcbiAgICB9ID0gaW5wdXQ7XG4gICAgaWYgKCFmaWxlcyAmJiAhZm9sZGVycyAmJiAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBuYW5nby5BY3Rpb25FcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6ICdBdCBsZWFzdCBvbmUgb2YgZmlsZXMsIGZvbGRlcnMsIG9yIHF1ZXJ5IG11c3QgYmUgcHJvdmlkZWQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZG9jdW1lbnRzOiBEb2N1bWVudFtdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRm9sZGVycyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHByb2Nlc3MgYSBmb2xkZXIgcmVjdXJzaXZlbHlcbiAgICBhc3luYyBmdW5jdGlvbiBwcm9jZXNzRm9sZGVyKGZvbGRlcklkOiBzdHJpbmcpIHtcbiAgICAgIGlmIChwcm9jZXNzZWRGb2xkZXJzLmhhcyhmb2xkZXJJZCkpIHJldHVybjtcbiAgICAgIHByb2Nlc3NlZEZvbGRlcnMuYWRkKGZvbGRlcklkKTtcbiAgICAgIGxldCBzZWFyY2hRdWVyeSA9IGAoJyR7Zm9sZGVySWR9JyBpbiBwYXJlbnRzKSBhbmQgdHJhc2hlZCA9IGZhbHNlYDtcbiAgICAgIGlmIChtaW1lVHlwZSkge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSBgIGFuZCBtaW1lVHlwZSA9ICcke21pbWVUeXBlfSdgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXhjbHVkZSBmb2xkZXJzIGZyb20gcmVzdWx0cyB1bmxlc3Mgc3BlY2lmaWNhbGx5IHJlcXVlc3RlZFxuICAgICAgICBzZWFyY2hRdWVyeSArPSBgIGFuZCBtaW1lVHlwZSAhPSAnYXBwbGljYXRpb24vdm5kLmdvb2dsZS1hcHBzLmZvbGRlcidgO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJveHlDb25maWd1cmF0aW9uOiBQcm94eUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgIGVuZHBvaW50OiBgZHJpdmUvdjMvZmlsZXNgLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBmaWVsZHM6ICdmaWxlcyhpZCwgbmFtZSwgbWltZVR5cGUsIHdlYlZpZXdMaW5rLCBwYXJlbnRzLCBtb2RpZmllZFRpbWUpLCBuZXh0UGFnZVRva2VuJyxcbiAgICAgICAgICBwYWdlU2l6ZTogTWF0aC5taW4obGltaXQsIDEwMCkudG9TdHJpbmcoKSxcbiAgICAgICAgICBjb3Jwb3JhOiAnYWxsRHJpdmVzJyxcbiAgICAgICAgICBpbmNsdWRlSXRlbXNGcm9tQWxsRHJpdmVzOiAndHJ1ZScsXG4gICAgICAgICAgc3VwcG9ydHNBbGxEcml2ZXM6ICd0cnVlJyxcbiAgICAgICAgICBxOiBzZWFyY2hRdWVyeVxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0ZToge1xuICAgICAgICAgIHJlc3BvbnNlX3BhdGg6ICdmaWxlcydcbiAgICAgICAgfSxcbiAgICAgICAgcmV0cmllczogMTBcbiAgICAgIH07XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IGZpbGVzIG9mIG5hbmdvLnBhZ2luYXRlPEdvb2dsZURyaXZlRmlsZVJlc3BvbnNlPihwcm94eUNvbmZpZ3VyYXRpb24pKSB7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgIGlmIChmaWxlLm1pbWVUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLmdvb2dsZS1hcHBzLmZvbGRlcicgJiYgaW5jbHVkZVN1YmZvbGRlcnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHByb2Nlc3NGb2xkZXIoZmlsZS5pZCk7IC8vIFJlY3Vyc2l2ZWx5IHByb2Nlc3Mgc3ViZm9sZGVyc1xuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZS5taW1lVHlwZSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5mb2xkZXInKSB7XG4gICAgICAgICAgICBkb2N1bWVudHMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBmaWxlLmlkLFxuICAgICAgICAgICAgICB1cmw6IGZpbGUud2ViVmlld0xpbmssXG4gICAgICAgICAgICAgIG1pbWVUeXBlOiBmaWxlLm1pbWVUeXBlLFxuICAgICAgICAgICAgICB0aXRsZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICB1cGRhdGVkQXQ6IGZpbGUubW9kaWZpZWRUaW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudHMubGVuZ3RoID49IGxpbWl0KSByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyBmb2xkZXJzIGlmIHByb3ZpZGVkXG4gICAgaWYgKGZvbGRlcnMgJiYgZm9sZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IGZvbGRlcklkIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgYXdhaXQgcHJvY2Vzc0ZvbGRlcihmb2xkZXJJZCk7XG4gICAgICAgIGlmIChkb2N1bWVudHMubGVuZ3RoID49IGxpbWl0KSBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIGluZGl2aWR1YWwgZmlsZXMgaWYgcHJvdmlkZWRcbiAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBmaWxlSWQgb2YgZmlsZXMpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50cy5sZW5ndGggPj0gbGltaXQpIGJyZWFrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZzogUHJveHlDb25maWd1cmF0aW9uID0ge1xuICAgICAgICAgICAgZW5kcG9pbnQ6IGBkcml2ZS92My9maWxlcy8ke2ZpbGVJZH1gLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkczogJ2lkLCBuYW1lLCBtaW1lVHlwZSwgd2ViVmlld0xpbmssIHBhcmVudHMsIG1vZGlmaWVkVGltZScsXG4gICAgICAgICAgICAgIHN1cHBvcnRzQWxsRHJpdmVzOiAndHJ1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXRyaWVzOiAxMFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgZG9jdW1lbnRSZXNwb25zZSA9IGF3YWl0IG5hbmdvLmdldDxHb29nbGVEcml2ZUZpbGVSZXNwb25zZT4oY29uZmlnKTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSA9IGRvY3VtZW50UmVzcG9uc2U7XG5cbiAgICAgICAgICAvLyBBcHBseSBtaW1lVHlwZSBmaWx0ZXIgaWYgc3BlY2lmaWVkXG4gICAgICAgICAgaWYgKCFtaW1lVHlwZSB8fCBkYXRhLm1pbWVUeXBlID09PSBtaW1lVHlwZSkge1xuICAgICAgICAgICAgZG9jdW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgdXJsOiBkYXRhLndlYlZpZXdMaW5rLFxuICAgICAgICAgICAgICBtaW1lVHlwZTogZGF0YS5taW1lVHlwZSxcbiAgICAgICAgICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgdXBkYXRlZEF0OiBkYXRhLm1vZGlmaWVkVGltZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGF3YWl0IG5hbmdvLmxvZyhgRXJyb3IgZmV0Y2hpbmcgZmlsZSAke2ZpbGVJZH06ICR7ZXJyb3J9YCwge1xuICAgICAgICAgICAgbGV2ZWw6ICd3YXJuJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyBxdWVyeSBzZWFyY2ggaWYgcHJvdmlkZWQgYW5kIG5vIG90aGVyIHNvdXJjZXNcbiAgICBpZiAocXVlcnkgJiYgIWZpbGVzICYmICFmb2xkZXJzKSB7XG4gICAgICBsZXQgc2VhcmNoUXVlcnkgPSBgKCR7cXVlcnl9KSBhbmQgdHJhc2hlZCA9IGZhbHNlYDtcbiAgICAgIGlmIChtaW1lVHlwZSkge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSBgIGFuZCBtaW1lVHlwZSA9ICcke21pbWVUeXBlfSdgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gYCBhbmQgbWltZVR5cGUgIT0gJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5mb2xkZXInYDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3h5Q29uZmlndXJhdGlvbjogUHJveHlDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBlbmRwb2ludDogYGRyaXZlL3YzL2ZpbGVzYCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZmllbGRzOiAnZmlsZXMoaWQsIG5hbWUsIG1pbWVUeXBlLCB3ZWJWaWV3TGluaywgcGFyZW50cywgbW9kaWZpZWRUaW1lKSwgbmV4dFBhZ2VUb2tlbicsXG4gICAgICAgICAgcGFnZVNpemU6IE1hdGgubWluKGxpbWl0LCAxMDApLnRvU3RyaW5nKCksXG4gICAgICAgICAgY29ycG9yYTogJ2FsbERyaXZlcycsXG4gICAgICAgICAgaW5jbHVkZUl0ZW1zRnJvbUFsbERyaXZlczogJ3RydWUnLFxuICAgICAgICAgIHN1cHBvcnRzQWxsRHJpdmVzOiAndHJ1ZScsXG4gICAgICAgICAgcTogc2VhcmNoUXVlcnlcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGU6IHtcbiAgICAgICAgICByZXNwb25zZV9wYXRoOiAnZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHJldHJpZXM6IDEwXG4gICAgICB9O1xuICAgICAgZm9yIGF3YWl0IChjb25zdCBmaWxlcyBvZiBuYW5nby5wYWdpbmF0ZTxHb29nbGVEcml2ZUZpbGVSZXNwb25zZT4ocHJveHlDb25maWd1cmF0aW9uKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICBkb2N1bWVudHMucHVzaCh7XG4gICAgICAgICAgICBpZDogZmlsZS5pZCxcbiAgICAgICAgICAgIHVybDogZmlsZS53ZWJWaWV3TGluayxcbiAgICAgICAgICAgIG1pbWVUeXBlOiBmaWxlLm1pbWVUeXBlLFxuICAgICAgICAgICAgdGl0bGU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogZmlsZS5tb2RpZmllZFRpbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA+PSBsaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50cy5sZW5ndGggPj0gbGltaXQpIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZG9jdW1lbnRzOiBkb2N1bWVudHMuc2xpY2UoMCwgbGltaXQpXG4gICAgfTtcbiAgfVxufTtcbmV4cG9ydCB0eXBlIE5hbmdvQWN0aW9uTG9jYWwgPSBQYXJhbWV0ZXJzPCh0eXBlb2YgYWN0aW9uKVsnZXhlYyddPlswXTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjsiLCAiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmV4cG9ydCBjb25zdCBJZEVudGl0eSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSWRFbnRpdHkgPSB6LmluZmVyPHR5cGVvZiBJZEVudGl0eT47XG5leHBvcnQgY29uc3QgRG9jdW1lbnRNZXRhZGF0YSA9IHoub2JqZWN0KHtcbiAgZmlsZXM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgZm9sZGVyczogei5zdHJpbmcoKS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIERvY3VtZW50TWV0YWRhdGEgPSB6LmluZmVyPHR5cGVvZiBEb2N1bWVudE1ldGFkYXRhPjtcbmV4cG9ydCBjb25zdCBEb2N1bWVudCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHVybDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgRG9jdW1lbnQgPSB6LmluZmVyPHR5cGVvZiBEb2N1bWVudD47XG5leHBvcnQgY29uc3QgRm9sZGVyID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdXJsOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgbWltZVR5cGU6IHouc3RyaW5nKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBGb2xkZXIgPSB6LmluZmVyPHR5cGVvZiBGb2xkZXI+O1xuZXhwb3J0IGNvbnN0IEpTT05TcHJlYWRzaGVldCA9IHoub2JqZWN0KHtcbiAgc3ByZWFkc2hlZXRJZDogei5zdHJpbmcoKSxcbiAgcHJvcGVydGllczogei5vYmplY3Qoe30pLFxuICBzaGVldHM6IHoub2JqZWN0KHt9KS5hcnJheSgpLFxuICBuYW1lZFJhbmdlczogei5vYmplY3Qoe30pLmFycmF5KCksXG4gIHNwcmVhZHNoZWV0VXJsOiB6LnN0cmluZygpLFxuICBkZXZlbG9wZXJNZXRhZGF0YTogei5vYmplY3Qoe30pLmFycmF5KCksXG4gIGRhdGFTb3VyY2VzOiB6Lm9iamVjdCh7fSkuYXJyYXkoKSxcbiAgZGF0YVNvdXJjZVNjaGVkdWxlczogei5vYmplY3Qoe30pLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgSlNPTlNwcmVhZHNoZWV0ID0gei5pbmZlcjx0eXBlb2YgSlNPTlNwcmVhZHNoZWV0PjtcbmV4cG9ydCBjb25zdCBKU09ORG9jdW1lbnQgPSB6Lm9iamVjdCh7XG4gIGRvY3VtZW50SWQ6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICB1cmw6IHouc3RyaW5nKCksXG4gIHRhYnM6IHoub2JqZWN0KHt9KS5hcnJheSgpLFxuICByZXZpc2lvbklkOiB6LnN0cmluZygpLFxuICBzdWdnZXN0aW9uc1ZpZXdNb2RlOiB6LnVuaW9uKFt6LmxpdGVyYWwoXCJERUZBVUxUX0ZPUl9DVVJSRU5UX0FDQ0VTU1wiKSwgei5saXRlcmFsKFwiU1VHR0VTVElPTlNfSU5MSU5FXCIpLCB6LmxpdGVyYWwoXCJQUkVWSUVXX1NVR0dFU1RJT05TX0FDQ0VQVEVEXCIpLCB6LmxpdGVyYWwoXCJQUkVWSUVXX1dJVEhPVVRfU1VHR0VTVElPTlNcIildKSxcbiAgYm9keTogei5vYmplY3Qoe30pLFxuICBoZWFkZXJzOiB6Lm9iamVjdCh7fSksXG4gIGZvb3RlcnM6IHoub2JqZWN0KHt9KSxcbiAgZm9vdG5vdGVzOiB6Lm9iamVjdCh7fSksXG4gIGRvY3VtZW50U3R5bGU6IHoub2JqZWN0KHt9KSxcbiAgc3VnZ2VzdGVkRG9jdW1lbnRTdHlsZUNoYW5nZXM6IHoub2JqZWN0KHt9KSxcbiAgbmFtZWRTdHlsZXM6IHoub2JqZWN0KHt9KSxcbiAgc3VnZ2VzdGVkTmFtZWRTdHlsZXNDaGFuZ2VzOiB6Lm9iamVjdCh7fSksXG4gIGxpc3RzOiB6Lm9iamVjdCh7fSksXG4gIG5hbWVkUmFuZ2VzOiB6Lm9iamVjdCh7fSksXG4gIGlubGluZU9iamVjdHM6IHoub2JqZWN0KHt9KSxcbiAgcG9zaXRpb25lZE9iamVjdHM6IHoub2JqZWN0KHt9KVxufSk7XG5leHBvcnQgdHlwZSBKU09ORG9jdW1lbnQgPSB6LmluZmVyPHR5cGVvZiBKU09ORG9jdW1lbnQ+O1xuZXhwb3J0IGNvbnN0IEdvb2dsZURvY3VtZW50ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgbWltZVR5cGU6IHouc3RyaW5nKCksXG4gIHBhcmVudHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5hcnJheSgpLFxuICBtb2RpZmllZFRpbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3JlYXRlZFRpbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2ViVmlld0xpbms6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAga2luZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIEdvb2dsZURvY3VtZW50ID0gei5pbmZlcjx0eXBlb2YgR29vZ2xlRG9jdW1lbnQ+O1xuZXhwb3J0IGNvbnN0IFVwbG9hZEZpbGVJbnB1dCA9IHoub2JqZWN0KHtcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgbWltZVR5cGU6IHouc3RyaW5nKCksXG4gIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGlzQmFzZTY0OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVwbG9hZEZpbGVJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwbG9hZEZpbGVJbnB1dD47XG5leHBvcnQgY29uc3QgRm9sZGVyQ29udGVudElucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjdXJzb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBGb2xkZXJDb250ZW50SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBGb2xkZXJDb250ZW50SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IEZvbGRlckNvbnRlbnQgPSB6Lm9iamVjdCh7XG4gIGZpbGVzOiBHb29nbGVEb2N1bWVudC5hcnJheSgpLFxuICBmb2xkZXJzOiBHb29nbGVEb2N1bWVudC5hcnJheSgpLFxuICBuZXh0X2N1cnNvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIEZvbGRlckNvbnRlbnQgPSB6LmluZmVyPHR5cGVvZiBGb2xkZXJDb250ZW50PjtcbmV4cG9ydCBjb25zdCBEcml2ZUNhcGFiaWxpdGllcyA9IHoub2JqZWN0KHtcbiAgY2FuQWRkQ2hpbGRyZW46IHouYm9vbGVhbigpLFxuICBjYW5Db21tZW50OiB6LmJvb2xlYW4oKSxcbiAgY2FuQ29weTogei5ib29sZWFuKCksXG4gIGNhbkRlbGV0ZURyaXZlOiB6LmJvb2xlYW4oKSxcbiAgY2FuRG93bmxvYWQ6IHouYm9vbGVhbigpLFxuICBjYW5FZGl0OiB6LmJvb2xlYW4oKSxcbiAgY2FuTGlzdENoaWxkcmVuOiB6LmJvb2xlYW4oKSxcbiAgY2FuTWFuYWdlTWVtYmVyczogei5ib29sZWFuKCksXG4gIGNhblJlYWRSZXZpc2lvbnM6IHouYm9vbGVhbigpLFxuICBjYW5SZW5hbWU6IHouYm9vbGVhbigpLFxuICBjYW5TaGFyZTogei5ib29sZWFuKCksXG4gIGNhblRyYXNoQ2hpbGRyZW46IHouYm9vbGVhbigpLFxuICBjYW5SZW5hbWVEcml2ZTogei5ib29sZWFuKCksXG4gIGNhbkNoYW5nZURyaXZlQmFja2dyb3VuZDogei5ib29sZWFuKCksXG4gIGNhbkNoYW5nZUNvcHlSZXF1aXJlc1dyaXRlclBlcm1pc3Npb25SZXN0cmljdGlvbjogei5ib29sZWFuKCksXG4gIGNhbkNoYW5nZURvbWFpblVzZXJzT25seVJlc3RyaWN0aW9uOiB6LmJvb2xlYW4oKSxcbiAgY2FuQ2hhbmdlRHJpdmVNZW1iZXJzT25seVJlc3RyaWN0aW9uOiB6LmJvb2xlYW4oKSxcbiAgY2FuQ2hhbmdlU2hhcmluZ0ZvbGRlcnNSZXF1aXJlc09yZ2FuaXplclBlcm1pc3Npb25SZXN0cmljdGlvbjogei5ib29sZWFuKCksXG4gIGNhblJlc2V0RHJpdmVSZXN0cmljdGlvbnM6IHouYm9vbGVhbigpLFxuICBjYW5EZWxldGVDaGlsZHJlbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgRHJpdmVDYXBhYmlsaXRpZXMgPSB6LmluZmVyPHR5cGVvZiBEcml2ZUNhcGFiaWxpdGllcz47XG5leHBvcnQgY29uc3QgRHJpdmVSZXN0cmljdGlvbnMgPSB6Lm9iamVjdCh7XG4gIGFkbWluTWFuYWdlZFJlc3RyaWN0aW9uczogei5ib29sZWFuKCksXG4gIGNvcHlSZXF1aXJlc1dyaXRlclBlcm1pc3Npb246IHouYm9vbGVhbigpLFxuICBkb21haW5Vc2Vyc09ubHk6IHouYm9vbGVhbigpLFxuICBkcml2ZU1lbWJlcnNPbmx5OiB6LmJvb2xlYW4oKSxcbiAgc2hhcmluZ0ZvbGRlcnNSZXF1aXJlc1B1Ymxpc2hlclBlcm1pc3Npb246IHouYm9vbGVhbigpLFxuICBzaGFyaW5nRm9sZGVyc1JlcXVpcmVzT3JnYW5pemVyUGVybWlzc2lvbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgRHJpdmVSZXN0cmljdGlvbnMgPSB6LmluZmVyPHR5cGVvZiBEcml2ZVJlc3RyaWN0aW9ucz47XG5leHBvcnQgY29uc3QgRHJpdmUgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBraW5kOiB6LnN0cmluZygpLFxuICBjcmVhdGVkVGltZTogei5zdHJpbmcoKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgY2FwYWJpbGl0aWVzOiBEcml2ZUNhcGFiaWxpdGllcyxcbiAgcmVzdHJpY3Rpb25zOiBEcml2ZVJlc3RyaWN0aW9uc1xufSk7XG5leHBvcnQgdHlwZSBEcml2ZSA9IHouaW5mZXI8dHlwZW9mIERyaXZlPjtcbmV4cG9ydCBjb25zdCBMaXN0RHJpdmVzSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGN1cnNvcjogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBMaXN0RHJpdmVzSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBMaXN0RHJpdmVzSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IERyaXZlTGlzdFJlc3BvbnNlID0gei5vYmplY3Qoe1xuICBkcml2ZXM6IERyaXZlLmFycmF5KCksXG4gIG5leHRfY3Vyc29yOiB6LnN0cmluZygpLFxuICBraW5kOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIERyaXZlTGlzdFJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgRHJpdmVMaXN0UmVzcG9uc2U+O1xuZXhwb3J0IGNvbnN0IEFub255bW91c19nb29nbGVkcml2ZV9hY3Rpb25fZmV0Y2hkb2N1bWVudF9vdXRwdXQgPSB6LnN0cmluZygpO1xuZXhwb3J0IHR5cGUgQW5vbnltb3VzX2dvb2dsZWRyaXZlX2FjdGlvbl9mZXRjaGRvY3VtZW50X291dHB1dCA9IHouaW5mZXI8dHlwZW9mIEFub255bW91c19nb29nbGVkcml2ZV9hY3Rpb25fZmV0Y2hkb2N1bWVudF9vdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IG1vZGVscyA9IHtcbiAgSWRFbnRpdHk6IElkRW50aXR5LFxuICBEb2N1bWVudE1ldGFkYXRhOiBEb2N1bWVudE1ldGFkYXRhLFxuICBEb2N1bWVudDogRG9jdW1lbnQsXG4gIEZvbGRlcjogRm9sZGVyLFxuICBKU09OU3ByZWFkc2hlZXQ6IEpTT05TcHJlYWRzaGVldCxcbiAgSlNPTkRvY3VtZW50OiBKU09ORG9jdW1lbnQsXG4gIEdvb2dsZURvY3VtZW50OiBHb29nbGVEb2N1bWVudCxcbiAgVXBsb2FkRmlsZUlucHV0OiBVcGxvYWRGaWxlSW5wdXQsXG4gIEZvbGRlckNvbnRlbnRJbnB1dDogRm9sZGVyQ29udGVudElucHV0LFxuICBGb2xkZXJDb250ZW50OiBGb2xkZXJDb250ZW50LFxuICBEcml2ZUNhcGFiaWxpdGllczogRHJpdmVDYXBhYmlsaXRpZXMsXG4gIERyaXZlUmVzdHJpY3Rpb25zOiBEcml2ZVJlc3RyaWN0aW9ucyxcbiAgRHJpdmU6IERyaXZlLFxuICBMaXN0RHJpdmVzSW5wdXQ6IExpc3REcml2ZXNJbnB1dCxcbiAgRHJpdmVMaXN0UmVzcG9uc2U6IERyaXZlTGlzdFJlc3BvbnNlLFxuICBBbm9ueW1vdXNfZ29vZ2xlZHJpdmVfYWN0aW9uX2ZldGNoZG9jdW1lbnRfb3V0cHV0OiBBbm9ueW1vdXNfZ29vZ2xlZHJpdmVfYWN0aW9uX2ZldGNoZG9jdW1lbnRfb3V0cHV0XG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsaUJBQWtCO0FBQ1gsSUFBTSxXQUFXLGFBQUUsT0FBTztBQUFBLEVBQy9CLElBQUksYUFBRSxPQUFPO0FBQ2YsQ0FBQztBQUVNLElBQU0sbUJBQW1CLGFBQUUsT0FBTztBQUFBLEVBQ3ZDLE9BQU8sYUFBRSxPQUFPLEVBQUUsTUFBTTtBQUFBLEVBQ3hCLFNBQVMsYUFBRSxPQUFPLEVBQUUsTUFBTTtBQUM1QixDQUFDO0FBRU0sSUFBTSxXQUFXLGFBQUUsT0FBTztBQUFBLEVBQy9CLElBQUksYUFBRSxPQUFPO0FBQUEsRUFDYixLQUFLLGFBQUUsT0FBTztBQUFBLEVBQ2QsT0FBTyxhQUFFLE9BQU87QUFBQSxFQUNoQixVQUFVLGFBQUUsT0FBTztBQUFBLEVBQ25CLFdBQVcsYUFBRSxPQUFPO0FBQ3RCLENBQUM7QUFFTSxJQUFNLFNBQVMsYUFBRSxPQUFPO0FBQUEsRUFDN0IsSUFBSSxhQUFFLE9BQU87QUFBQSxFQUNiLEtBQUssYUFBRSxPQUFPO0FBQUEsRUFDZCxPQUFPLGFBQUUsT0FBTztBQUFBLEVBQ2hCLFVBQVUsYUFBRSxPQUFPO0FBQUEsRUFDbkIsV0FBVyxhQUFFLE9BQU87QUFDdEIsQ0FBQztBQUVNLElBQU0sa0JBQWtCLGFBQUUsT0FBTztBQUFBLEVBQ3RDLGVBQWUsYUFBRSxPQUFPO0FBQUEsRUFDeEIsWUFBWSxhQUFFLE9BQU8sQ0FBQyxD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
