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

// google-drive/actions/folder-content.ts
var folder_content_exports = {};
__export(folder_content_exports, {
  default: () => folder_content_default
});
module.exports = __toCommonJS(folder_content_exports);

// schema.zod.ts
var import_zod = require("zod");
var idEntitySchema = import_zod.z.object({
  id: import_zod.z.string()
});
var documentMetadataSchema = import_zod.z.object({
  files: import_zod.z.union([import_zod.z.array(import_zod.z.string()), import_zod.z.undefined()]),
  folders: import_zod.z.union([import_zod.z.array(import_zod.z.string()), import_zod.z.undefined()])
});
var documentSchema = import_zod.z.object({
  id: import_zod.z.string(),
  url: import_zod.z.string(),
  title: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  updatedAt: import_zod.z.string()
});
var folderSchema = import_zod.z.object({
  id: import_zod.z.string(),
  url: import_zod.z.string(),
  title: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  updatedAt: import_zod.z.string()
});
var jSONSpreadsheetSchema = import_zod.z.object({
  spreadsheetId: import_zod.z.string(),
  properties: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  sheets: import_zod.z.array(import_zod.z.record(import_zod.z.string(), import_zod.z.any())),
  namedRanges: import_zod.z.array(import_zod.z.record(import_zod.z.string(), import_zod.z.any())),
  spreadsheetUrl: import_zod.z.string(),
  developerMetadata: import_zod.z.array(import_zod.z.record(import_zod.z.string(), import_zod.z.any())),
  dataSources: import_zod.z.array(import_zod.z.record(import_zod.z.string(), import_zod.z.any())),
  dataSourceSchedules: import_zod.z.array(import_zod.z.record(import_zod.z.string(), import_zod.z.any()))
});
var jSONDocumentSchema = import_zod.z.object({
  documentId: import_zod.z.string(),
  title: import_zod.z.string(),
  url: import_zod.z.string(),
  tabs: import_zod.z.array(import_zod.z.record(import_zod.z.string(), import_zod.z.any())),
  revisionId: import_zod.z.string(),
  suggestionsViewMode: import_zod.z.union([import_zod.z.literal("DEFAULT_FOR_CURRENT_ACCESS"), import_zod.z.literal("SUGGESTIONS_INLINE"), import_zod.z.literal("PREVIEW_SUGGESTIONS_ACCEPTED"), import_zod.z.literal("PREVIEW_WITHOUT_SUGGESTIONS")]),
  body: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  headers: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  footers: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  footnotes: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  documentStyle: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  suggestedDocumentStyleChanges: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  namedStyles: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  suggestedNamedStylesChanges: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  lists: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  namedRanges: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  inlineObjects: import_zod.z.record(import_zod.z.string(), import_zod.z.any()),
  positionedObjects: import_zod.z.record(import_zod.z.string(), import_zod.z.any())
});
var googleDocumentSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  parents: import_zod.z.array(import_zod.z.string()).optional(),
  modifiedTime: import_zod.z.string().optional(),
  createdTime: import_zod.z.string().optional(),
  webViewLink: import_zod.z.string().optional(),
  kind: import_zod.z.string().optional()
});
var uploadFileInputSchema = import_zod.z.object({
  content: import_zod.z.string(),
  name: import_zod.z.string(),
  mimeType: import_zod.z.string(),
  folderId: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  description: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  isBase64: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]).optional()
});
var folderContentInputSchema = import_zod.z.object({
  id: import_zod.z.string().optional(),
  cursor: import_zod.z.string().optional()
});
var folderContentSchema = import_zod.z.object({
  files: import_zod.z.array(googleDocumentSchema),
  folders: import_zod.z.array(googleDocumentSchema),
  cursor: import_zod.z.string().optional()
});
var driveCapabilitiesSchema = import_zod.z.object({
  canAddChildren: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canComment: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canCopy: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canDeleteDrive: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canDownload: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canEdit: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canListChildren: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canManageMembers: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canReadRevisions: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canRename: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canShare: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canTrashChildren: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canRenameDrive: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canChangeDriveBackground: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canChangeCopyRequiresWriterPermissionRestriction: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canChangeDomainUsersOnlyRestriction: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canChangeDriveMembersOnlyRestriction: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canChangeSharingFoldersRequiresOrganizerPermissionRestriction: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canResetDriveRestrictions: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  canDeleteChildren: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()])
});
var driveRestrictionsSchema = import_zod.z.object({
  adminManagedRestrictions: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  copyRequiresWriterPermission: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  domainUsersOnly: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  driveMembersOnly: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  sharingFoldersRequiresPublisherPermission: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  sharingFoldersRequiresOrganizerPermission: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()])
});
var driveSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  kind: import_zod.z.string(),
  createdTime: import_zod.z.string(),
  hidden: import_zod.z.union([import_zod.z.boolean(), import_zod.z.undefined()]),
  capabilities: import_zod.z.union([driveCapabilitiesSchema, import_zod.z.undefined()]),
  restrictions: import_zod.z.union([driveRestrictionsSchema, import_zod.z.undefined()])
});
var listDrivesInputSchema = import_zod.z.object({
  cursor: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()])
});
var driveListResponseSchema = import_zod.z.object({
  drives: import_zod.z.array(driveSchema),
  cursor: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]),
  kind: import_zod.z.string()
});
var anonymousGoogledriveActionFetchdocumentOutputSchema = import_zod.z.string();

// models.ts
var import_zod2 = require("zod");
var IdEntity = import_zod2.z.object({
  id: import_zod2.z.string()
});
var DocumentMetadata = import_zod2.z.object({
  files: import_zod2.z.string().array(),
  folders: import_zod2.z.string().array()
});
var Document = import_zod2.z.object({
  id: import_zod2.z.string(),
  url: import_zod2.z.string(),
  title: import_zod2.z.string(),
  mimeType: import_zod2.z.string(),
  updatedAt: import_zod2.z.string()
});
var Folder = import_zod2.z.object({
  id: import_zod2.z.string(),
  url: import_zod2.z.string(),
  title: import_zod2.z.string(),
  mimeType: import_zod2.z.string(),
  updatedAt: import_zod2.z.string()
});
var JSONSpreadsheet = import_zod2.z.object({
  spreadsheetId: import_zod2.z.string(),
  properties: import_zod2.z.object({}),
  sheets: import_zod2.z.object({}).array(),
  namedRanges: import_zod2.z.object({}).array(),
  spreadsheetUrl: import_zod2.z.string(),
  developerMetadata: import_zod2.z.object({}).array(),
  dataSources: import_zod2.z.object({}).array(),
  dataSourceSchedules: import_zod2.z.object({}).array()
});
var JSONDocument = import_zod2.z.object({
  documentId: import_zod2.z.string(),
  title: import_zod2.z.string(),
  url: import_zod2.z.string(),
  tabs: import_zod2.z.object({}).array(),
  revisionId: import_zod2.z.string(),
  suggestionsViewMode: import_zod2.z.union([import_zod2.z.literal("DEFAULT_FOR_CURRENT_ACCESS"), import_zod2.z.literal("SUGGESTIONS_INLINE"), import_zod2.z.literal("PREVIEW_SUGGESTIONS_ACCEPTED"), import_zod2.z.literal("PREVIEW_WITHOUT_SUGGESTIONS")]),
  body: import_zod2.z.object({}),
  headers: import_zod2.z.object({}),
  footers: import_zod2.z.object({}),
  footnotes: import_zod2.z.object({}),
  documentStyle: import_zod2.z.object({}),
  suggestedDocumentStyleChanges: import_zod2.z.object({}),
  namedStyles: import_zod2.z.object({}),
  suggestedNamedStylesChanges: import_zod2.z.object({}),
  lists: import_zod2.z.object({}),
  namedRanges: import_zod2.z.object({}),
  inlineObjects: import_zod2.z.object({}),
  positionedObjects: import_zod2.z.object({})
});
var GoogleDocument = import_zod2.z.object({
  id: import_zod2.z.string(),
  name: import_zod2.z.string(),
  mimeType: import_zod2.z.string(),
  parents: import_zod2.z.string().optional().array(),
  modifiedTime: import_zod2.z.string().optional(),
  createdTime: import_zod2.z.string().optional(),
  webViewLink: import_zod2.z.string().optional(),
  kind: import_zod2.z.string().optional()
});
var UploadFileInput = import_zod2.z.object({
  content: import_zod2.z.string(),
  name: import_zod2.z.string(),
  mimeType: import_zod2.z.string(),
  folderId: import_zod2.z.string().optional(),
  description: import_zod2.z.string().optional(),
  isBase64: import_zod2.z.boolean().optional()
});
var FolderContentInput = import_zod2.z.object({
  id: import_zod2.z.string().optional(),
  cursor: import_zod2.z.string().optional()
});
var FolderContent = import_zod2.z.object({
  files: GoogleDocument.array(),
  folders: GoogleDocument.array(),
  next_cursor: import_zod2.z.string().optional()
});
var DriveCapabilities = import_zod2.z.object({
  canAddChildren: import_zod2.z.boolean(),
  canComment: import_zod2.z.boolean(),
  canCopy: import_zod2.z.boolean(),
  canDeleteDrive: import_zod2.z.boolean(),
  canDownload: import_zod2.z.boolean(),
  canEdit: import_zod2.z.boolean(),
  canListChildren: import_zod2.z.boolean(),
  canManageMembers: import_zod2.z.boolean(),
  canReadRevisions: import_zod2.z.boolean(),
  canRename: import_zod2.z.boolean(),
  canShare: import_zod2.z.boolean(),
  canTrashChildren: import_zod2.z.boolean(),
  canRenameDrive: import_zod2.z.boolean(),
  canChangeDriveBackground: import_zod2.z.boolean(),
  canChangeCopyRequiresWriterPermissionRestriction: import_zod2.z.boolean(),
  canChangeDomainUsersOnlyRestriction: import_zod2.z.boolean(),
  canChangeDriveMembersOnlyRestriction: import_zod2.z.boolean(),
  canChangeSharingFoldersRequiresOrganizerPermissionRestriction: import_zod2.z.boolean(),
  canResetDriveRestrictions: import_zod2.z.boolean(),
  canDeleteChildren: import_zod2.z.boolean()
});
var DriveRestrictions = import_zod2.z.object({
  adminManagedRestrictions: import_zod2.z.boolean(),
  copyRequiresWriterPermission: import_zod2.z.boolean(),
  domainUsersOnly: import_zod2.z.boolean(),
  driveMembersOnly: import_zod2.z.boolean(),
  sharingFoldersRequiresPublisherPermission: import_zod2.z.boolean(),
  sharingFoldersRequiresOrganizerPermission: import_zod2.z.boolean()
});
var Drive = import_zod2.z.object({
  id: import_zod2.z.string(),
  name: import_zod2.z.string(),
  kind: import_zod2.z.string(),
  createdTime: import_zod2.z.string(),
  hidden: import_zod2.z.boolean(),
  capabilities: DriveCapabilities,
  restrictions: DriveRestrictions
});
var ListDrivesInput = import_zod2.z.object({
  cursor: import_zod2.z.string()
});
var DriveListResponse = import_zod2.z.object({
  drives: Drive.array(),
  next_cursor: import_zod2.z.string(),
  kind: import_zod2.z.string()
});
var Anonymous_googledrive_action_fetchdocument_output = import_zod2.z.string();

// google-drive/actions/folder-content.ts
var action = {
  type: "action",
  description: "Fetches the top-level content (files and folders) of a folder given its ID.\nIf no folder ID is provided, it fetches content from the root folder.",
  version: "2.0.0",
  endpoint: {
    method: "GET",
    path: "/folder-content",
    group: "Folders"
  },
  input: FolderContentInput,
  output: FolderContent,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  exec: async (nango, input = {}) => {
    await nango.zodValidateInput({
      zodSchema: folderContentInputSchema,
      input
    });
    let query = "";
    if (input.id) {
      query = `'${input.id}' in parents`;
    } else {
      query = "'root' in parents";
    }
    const config = {
      // https://developers.google.com/drive/api/reference/rest/v3/files/list
      endpoint: "drive/v3/files",
      params: {
        q: query,
        fields: "files(id,name,mimeType,createdTime,modifiedTime,parents,webViewLink),nextPageToken",
        pageSize: 100,
        pageToken: input.cursor || "",
        corpora: "allDrives",
        supportsAllDrives: "true",
        // Whether the requesting application supports both My Drives and shared drives
        includeItemsFromAllDrives: "true",
        // both My Drive and shared drive items
        orderBy: "name"
      },
      retries: 3
    };
    const response = await nango.get(config);
    if (response.status !== 200) {
      throw new nango.ActionError({
        message: `Failed to fetch folder content: Status Code ${response.status}`
      });
    }
    const items = response.data.files || [];
    const folders = [];
    const files = [];
    for (const item of items) {
      if (item.mimeType === "application/vnd.google-apps.folder") {
        folders.push(item);
      } else {
        files.push(item);
      }
    }
    return {
      folders,
      files,
      ...response.data.cursor ? {
        next_cursor: response.data.nextPageToken
      } : {}
    };
  }
};
var folder_content_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZ29vZ2xlLWRyaXZlL2FjdGlvbnMvZm9sZGVyLWNvbnRlbnQudHMiLCAic2NoZW1hLnpvZC50cyIsICJtb2RlbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB7IGZvbGRlckNvbnRlbnRJbnB1dFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS56b2QuanMnO1xuaW1wb3J0IHR5cGUgeyBQcm94eUNvbmZpZ3VyYXRpb24gfSBmcm9tICduYW5nbyc7XG5pbXBvcnQgdHlwZSB7IEdvb2dsZURvY3VtZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzLmpzJztcbmltcG9ydCB7IEZvbGRlckNvbnRlbnRJbnB1dCwgRm9sZGVyQ29udGVudCB9IGZyb20gJy4uLy4uL21vZGVscy5qcyc7XG5cbi8qKlxuICogRmV0Y2hlcyB0aGUgdG9wLWxldmVsIGNvbnRlbnQgKGZpbGVzIGFuZCBmb2xkZXJzKSBvZiBhIEdvb2dsZSBEcml2ZSBmb2xkZXIuXG4gKiBJZiBhIGZvbGRlciBJRCBpcyBwcm92aWRlZCwgaXQgZmV0Y2hlcyBjb250ZW50IGZyb20gdGhhdCBmb2xkZXIuXG4gKiBPdGhlcndpc2UsIGl0IGZldGNoZXMgY29udGVudCBmcm9tIHRoZSByb290IGZvbGRlci5cbiAqXG4gKiBAcGFyYW0ge05hbmdvQWN0aW9ufSBuYW5nbyAtIFRoZSBOYW5nbyBhY3Rpb24gaW5zdGFuY2UgdXNlZCB0byBtYWtlIHRoZSBBUEkgcmVxdWVzdC5cbiAqIEBwYXJhbSB7Rm9sZGVyQ29udGVudElucHV0fSBpbnB1dCAtIE9wdGlvbmFsIHBhcmFtZXRlcnMgaW5jbHVkaW5nIGlkIChmb2xkZXIgSUQpIGFuZCBwYWdlVG9rZW4gKHBhZ2luYXRpb24gdG9rZW4pLlxuICogQHJldHVybnMge1Byb21pc2U8Rm9sZGVyQ29udGVudD59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGZvbGRlciBjb250ZW50IHdpdGggZmlsZXMsIGZvbGRlcnMsIGFuZCBwYWdpbmF0aW9uIGluZm8uXG4gKiBAdGhyb3dzIHtFcnJvcn0gLSBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIEFQSSByZXF1ZXN0IGZhaWxzLlxuICovXG5jb25zdCBhY3Rpb24gPSB7XG4gIHR5cGU6IFwiYWN0aW9uXCIsXG4gIGRlc2NyaXB0aW9uOiAnRmV0Y2hlcyB0aGUgdG9wLWxldmVsIGNvbnRlbnQgKGZpbGVzIGFuZCBmb2xkZXJzKSBvZiBhIGZvbGRlciBnaXZlbiBpdHMgSUQuXFxuSWYgbm8gZm9sZGVyIElEIGlzIHByb3ZpZGVkLCBpdCBmZXRjaGVzIGNvbnRlbnQgZnJvbSB0aGUgcm9vdCBmb2xkZXIuJyxcbiAgdmVyc2lvbjogJzIuMC4wJyxcbiAgZW5kcG9pbnQ6IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHBhdGg6ICcvZm9sZGVyLWNvbnRlbnQnLFxuICAgIGdyb3VwOiAnRm9sZGVycydcbiAgfSxcbiAgaW5wdXQ6IEZvbGRlckNvbnRlbnRJbnB1dCxcbiAgb3V0cHV0OiBGb2xkZXJDb250ZW50LFxuICBzY29wZXM6IFsnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZS5yZWFkb25seSddLFxuICBleGVjOiBhc3luYyAobmFuZ28sIGlucHV0OiBGb2xkZXJDb250ZW50SW5wdXQgPSB7fSk6IFByb21pc2U8Rm9sZGVyQ29udGVudD4gPT4ge1xuICAgIGF3YWl0IG5hbmdvLnpvZFZhbGlkYXRlSW5wdXQoe1xuICAgICAgem9kU2NoZW1hOiBmb2xkZXJDb250ZW50SW5wdXRTY2hlbWEsXG4gICAgICBpbnB1dFxuICAgIH0pO1xuXG4gICAgLy8gQnVpbGQgdGhlIHF1ZXJ5IHRvIGdldCBib3RoIGZpbGVzIGFuZCBmb2xkZXJzXG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgaWYgKGlucHV0LmlkKSB7XG4gICAgICBxdWVyeSA9IGAnJHtpbnB1dC5pZH0nIGluIHBhcmVudHNgO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeSA9IFwiJ3Jvb3QnIGluIHBhcmVudHNcIjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnOiBQcm94eUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9kcml2ZS9hcGkvcmVmZXJlbmNlL3Jlc3QvdjMvZmlsZXMvbGlzdFxuICAgICAgZW5kcG9pbnQ6ICdkcml2ZS92My9maWxlcycsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcTogcXVlcnksXG4gICAgICAgIGZpZWxkczogJ2ZpbGVzKGlkLG5hbWUsbWltZVR5cGUsY3JlYXRlZFRpbWUsbW9kaWZpZWRUaW1lLHBhcmVudHMsd2ViVmlld0xpbmspLG5leHRQYWdlVG9rZW4nLFxuICAgICAgICBwYWdlU2l6ZTogMTAwLFxuICAgICAgICBwYWdlVG9rZW46IGlucHV0LmN1cnNvciB8fCAnJyxcbiAgICAgICAgY29ycG9yYTogJ2FsbERyaXZlcycsXG4gICAgICAgIHN1cHBvcnRzQWxsRHJpdmVzOiAndHJ1ZScsXG4gICAgICAgIC8vIFdoZXRoZXIgdGhlIHJlcXVlc3RpbmcgYXBwbGljYXRpb24gc3VwcG9ydHMgYm90aCBNeSBEcml2ZXMgYW5kIHNoYXJlZCBkcml2ZXNcbiAgICAgICAgaW5jbHVkZUl0ZW1zRnJvbUFsbERyaXZlczogJ3RydWUnLFxuICAgICAgICAvLyBib3RoIE15IERyaXZlIGFuZCBzaGFyZWQgZHJpdmUgaXRlbXNcbiAgICAgICAgb3JkZXJCeTogJ25hbWUnXG4gICAgICB9LFxuICAgICAgcmV0cmllczogM1xuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuYW5nby5nZXQoY29uZmlnKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBuYW5nby5BY3Rpb25FcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZmV0Y2ggZm9sZGVyIGNvbnRlbnQ6IFN0YXR1cyBDb2RlICR7cmVzcG9uc2Uuc3RhdHVzfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpdGVtcyA9IHJlc3BvbnNlLmRhdGEuZmlsZXMgfHwgW107XG5cbiAgICAvLyBTZXBhcmF0ZSBmaWxlcyBhbmQgZm9sZGVyc1xuICAgIGNvbnN0IGZvbGRlcnM6IEdvb2dsZURvY3VtZW50W10gPSBbXTtcbiAgICBjb25zdCBmaWxlczogR29vZ2xlRG9jdW1lbnRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgaWYgKGl0ZW0ubWltZVR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMuZm9sZGVyJykge1xuICAgICAgICBmb2xkZXJzLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZm9sZGVycyxcbiAgICAgIGZpbGVzLFxuICAgICAgLi4uKHJlc3BvbnNlLmRhdGEuY3Vyc29yID8ge1xuICAgICAgICBuZXh0X2N1cnNvcjogcmVzcG9uc2UuZGF0YS5uZXh0UGFnZVRva2VuXG4gICAgICB9IDoge30pXG4gICAgfTtcbiAgfVxufTtcbmV4cG9ydCB0eXBlIE5hbmdvQWN0aW9uTG9jYWwgPSBQYXJhbWV0ZXJzPCh0eXBlb2YgYWN0aW9uKVsnZXhlYyddPlswXTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjsiLCAiLy8gR2VuZXJhdGVkIGJ5IHRzLXRvLXpvZFxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5leHBvcnQgY29uc3QgaWRFbnRpdHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBkb2N1bWVudE1ldGFkYXRhU2NoZW1hID0gei5vYmplY3Qoe1xuICBmaWxlczogei51bmlvbihbei5hcnJheSh6LnN0cmluZygpKSwgei51bmRlZmluZWQoKV0pLFxuICBmb2xkZXJzOiB6LnVuaW9uKFt6LmFycmF5KHouc3RyaW5nKCkpLCB6LnVuZGVmaW5lZCgpXSlcbn0pO1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdXJsOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgbWltZVR5cGU6IHouc3RyaW5nKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgZm9sZGVyU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdXJsOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgbWltZVR5cGU6IHouc3RyaW5nKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgalNPTlNwcmVhZHNoZWV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzcHJlYWRzaGVldElkOiB6LnN0cmluZygpLFxuICBwcm9wZXJ0aWVzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgc2hlZXRzOiB6LmFycmF5KHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpKSxcbiAgbmFtZWRSYW5nZXM6IHouYXJyYXkoei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkpLFxuICBzcHJlYWRzaGVldFVybDogei5zdHJpbmcoKSxcbiAgZGV2ZWxvcGVyTWV0YWRhdGE6IHouYXJyYXkoei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkpLFxuICBkYXRhU291cmNlczogei5hcnJheSh6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSksXG4gIGRhdGFTb3VyY2VTY2hlZHVsZXM6IHouYXJyYXkoei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkpXG59KTtcbmV4cG9ydCBjb25zdCBqU09ORG9jdW1lbnRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGRvY3VtZW50SWQ6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICB1cmw6IHouc3RyaW5nKCksXG4gIHRhYnM6IHouYXJyYXkoei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkpLFxuICByZXZpc2lvbklkOiB6LnN0cmluZygpLFxuICBzdWdnZXN0aW9uc1ZpZXdNb2RlOiB6LnVuaW9uKFt6LmxpdGVyYWwoJ0RFRkFVTFRfRk9SX0NVUlJFTlRfQUNDRVNTJyksIHoubGl0ZXJhbCgnU1VHR0VTVElPTlNfSU5MSU5FJyksIHoubGl0ZXJhbCgnUFJFVklFV19TVUdHRVNUSU9OU19BQ0NFUFRFRCcpLCB6LmxpdGVyYWwoJ1BSRVZJRVdfV0lUSE9VVF9TVUdHRVNUSU9OUycpXSksXG4gIGJvZHk6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBoZWFkZXJzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgZm9vdGVyczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIGZvb3Rub3Rlczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIGRvY3VtZW50U3R5bGU6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBzdWdnZXN0ZWREb2N1bWVudFN0eWxlQ2hhbmdlczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIG5hbWVkU3R5bGVzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgc3VnZ2VzdGVkTmFtZWRTdHlsZXNDaGFuZ2VzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgbGlzdHM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBuYW1lZFJhbmdlczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIGlubGluZU9iamVjdHM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBwb3NpdGlvbmVkT2JqZWN0czogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSlcbn0pO1xuZXhwb3J0IGNvbnN0IGdvb2dsZURvY3VtZW50U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgbWltZVR5cGU6IHouc3RyaW5nKCksXG4gIHBhcmVudHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgbW9kaWZpZWRUaW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNyZWF0ZWRUaW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYlZpZXdMaW5rOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGtpbmQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgZm9sZGVySWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGlzQmFzZTY0OiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGZvbGRlckNvbnRlbnRJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3Vyc29yOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGZvbGRlckNvbnRlbnRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZpbGVzOiB6LmFycmF5KGdvb2dsZURvY3VtZW50U2NoZW1hKSxcbiAgZm9sZGVyczogei5hcnJheShnb29nbGVEb2N1bWVudFNjaGVtYSksXG4gIGN1cnNvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBkcml2ZUNhcGFiaWxpdGllc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgY2FuQWRkQ2hpbGRyZW46IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkNvbW1lbnQ6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkNvcHk6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkRlbGV0ZURyaXZlOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5Eb3dubG9hZDogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuRWRpdDogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuTGlzdENoaWxkcmVuOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5NYW5hZ2VNZW1iZXJzOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5SZWFkUmV2aXNpb25zOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5SZW5hbWU6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhblNoYXJlOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5UcmFzaENoaWxkcmVuOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5SZW5hbWVEcml2ZTogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuQ2hhbmdlRHJpdmVCYWNrZ3JvdW5kOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5DaGFuZ2VDb3B5UmVxdWlyZXNXcml0ZXJQZXJtaXNzaW9uUmVzdHJpY3Rpb246IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkNoYW5nZURvbWFpblVzZXJzT25seVJlc3RyaWN0aW9uOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5DaGFuZ2VEcml2ZU1lbWJlcnNPbmx5UmVzdHJpY3Rpb246IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkNoYW5nZVNoYXJpbmdGb2xkZXJzUmVxdWlyZXNPcmdhbml6ZXJQZXJtaXNzaW9uUmVzdHJpY3Rpb246IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhblJlc2V0RHJpdmVSZXN0cmljdGlvbnM6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkRlbGV0ZUNoaWxkcmVuOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pXG59KTtcbmV4cG9ydCBjb25zdCBkcml2ZVJlc3RyaWN0aW9uc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgYWRtaW5NYW5hZ2VkUmVzdHJpY3Rpb25zOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjb3B5UmVxdWlyZXNXcml0ZXJQZXJtaXNzaW9uOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBkb21haW5Vc2Vyc09ubHk6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGRyaXZlTWVtYmVyc09ubHk6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIHNoYXJpbmdGb2xkZXJzUmVxdWlyZXNQdWJsaXNoZXJQZXJtaXNzaW9uOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBzaGFyaW5nRm9sZGVyc1JlcXVpcmVzT3JnYW5pemVyUGVybWlzc2lvbjogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKVxufSk7XG5leHBvcnQgY29uc3QgZHJpdmVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBraW5kOiB6LnN0cmluZygpLFxuICBjcmVhdGVkVGltZTogei5zdHJpbmcoKSxcbiAgaGlkZGVuOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYXBhYmlsaXRpZXM6IHoudW5pb24oW2RyaXZlQ2FwYWJpbGl0aWVzU2NoZW1hLCB6LnVuZGVmaW5lZCgpXSksXG4gIHJlc3RyaWN0aW9uczogei51bmlvbihbZHJpdmVSZXN0cmljdGlvbnNTY2hlbWEsIHoudW5kZWZpbmVkKCldKVxufSk7XG5leHBvcnQgY29uc3QgbGlzdERyaXZlc0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBjdXJzb3I6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKVxufSk7XG5leHBvcnQgY29uc3QgZHJpdmVMaXN0UmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGRyaXZlczogei5hcnJheShkcml2ZVNjaGVtYSksXG4gIGN1cnNvcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLFxuICBraW5kOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBhbm9ueW1vdXNHb29nbGVkcml2ZUFjdGlvbkZldGNoZG9jdW1lbnRPdXRwdXRTY2hlbWEgPSB6LnN0cmluZygpOyIsICJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuZXhwb3J0IGNvbnN0IElkRW50aXR5ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBJZEVudGl0eSA9IHouaW5mZXI8dHlwZW9mIElkRW50aXR5PjtcbmV4cG9ydCBjb25zdCBEb2N1bWVudE1ldGFkYXRhID0gei5vYmplY3Qoe1xuICBmaWxlczogei5zdHJpbmcoKS5hcnJheSgpLFxuICBmb2xkZXJzOiB6LnN0cmluZygpLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgRG9jdW1lbnRNZXRhZGF0YSA9IHouaW5mZXI8dHlwZW9mIERvY3VtZW50TWV0YWRhdGE+O1xuZXhwb3J0IGNvbnN0IERvY3VtZW50ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdXJsOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgbWltZVR5cGU6IHouc3RyaW5nKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBEb2N1bWVudCA9IHouaW5mZXI8dHlwZW9mIERvY3VtZW50PjtcbmV4cG9ydCBjb25zdCBGb2xkZXIgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB1cmw6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIEZvbGRlciA9IHouaW5mZXI8dHlwZW9mIEZvbGRlcj47XG5leHBvcnQgY29uc3QgSlNPTlNwcmVhZHNoZWV0ID0gei5vYmplY3Qoe1xuICBzcHJlYWRzaGVldElkOiB6LnN0cmluZygpLFxuICBwcm9wZXJ0aWVzOiB6Lm9iamVjdCh7fSksXG4gIHNoZWV0czogei5vYmplY3Qoe30pLmFycmF5KCksXG4gIG5hbWVkUmFuZ2VzOiB6Lm9iamVjdCh7fSkuYXJyYXkoKSxcbiAgc3ByZWFkc2hlZXRVcmw6IHouc3RyaW5nKCksXG4gIGRldmVsb3Blck1ldGFkYXRhOiB6Lm9iamVjdCh7fSkuYXJyYXkoKSxcbiAgZGF0YVNvdXJjZXM6IHoub2JqZWN0KHt9KS5hcnJheSgpLFxuICBkYXRhU291cmNlU2NoZWR1bGVzOiB6Lm9iamVjdCh7fSkuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBKU09OU3ByZWFkc2hlZXQgPSB6LmluZmVyPHR5cGVvZiBKU09OU3ByZWFkc2hlZXQ+O1xuZXhwb3J0IGNvbnN0IEpTT05Eb2N1bWVudCA9IHoub2JqZWN0KHtcbiAgZG9jdW1lbnRJZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIHVybDogei5zdHJpbmcoKSxcbiAgdGFiczogei5vYmplY3Qoe30pLmFycmF5KCksXG4gIHJldmlzaW9uSWQ6IHouc3RyaW5nKCksXG4gIHN1Z2dlc3Rpb25zVmlld01vZGU6IHoudW5pb24oW3oubGl0ZXJhbChcIkRFRkFVTFRfRk9SX0NVUlJFTlRfQUNDRVNTXCIpLCB6LmxpdGVyYWwoXCJTVUdHRVNUSU9OU19JTkxJTkVcIiksIHoubGl0ZXJhbChcIlBSRVZJRVdfU1VHR0VTVElPTlNfQUNDRVBURURcIiksIHoubGl0ZXJhbChcIlBSRVZJRVdfV0lUSE9VVF9TVUdHRVNUSU9OU1wiKV0pLFxuICBib2R5OiB6Lm9iamVjdCh7fSksXG4gIGhlYWRlcnM6IHoub2JqZWN0KHt9KSxcbiAgZm9vdGVyczogei5vYmplY3Qoe30pLFxuICBmb290bm90ZXM6IHoub2JqZWN0KHt9KSxcbiAgZG9jdW1lbnRTdHlsZTogei5vYmplY3Qoe30pLFxuICBzdWdnZXN0ZWREb2N1bWVudFN0eWxlQ2hhbmdlczogei5vYmplY3Qoe30pLFxuICBuYW1lZFN0eWxlczogei5vYmplY3Qoe30pLFxuICBzdWdnZXN0ZWROYW1lZFN0eWxlc0NoYW5nZXM6IHoub2JqZWN0KHt9KSxcbiAgbGlzdHM6IHoub2JqZWN0KHt9KSxcbiAgbmFtZWRSYW5nZXM6IHoub2JqZWN0KHt9KSxcbiAgaW5saW5lT2JqZWN0czogei5vYmplY3Qoe30pLFxuICBwb3NpdGlvbmVkT2JqZWN0czogei5vYmplY3Qoe30pXG59KTtcbmV4cG9ydCB0eXBlIEpTT05Eb2N1bWVudCA9IHouaW5mZXI8dHlwZW9mIEpTT05Eb2N1bWVudD47XG5leHBvcnQgY29uc3QgR29vZ2xlRG9jdW1lbnQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgcGFyZW50czogei5zdHJpbmcoKS5vcHRpb25hbCgpLmFycmF5KCksXG4gIG1vZGlmaWVkVGltZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkVGltZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJWaWV3TGluazogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBraW5kOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgR29vZ2xlRG9jdW1lbnQgPSB6LmluZmVyPHR5cGVvZiBHb29nbGVEb2N1bWVudD47XG5leHBvcnQgY29uc3QgVXBsb2FkRmlsZUlucHV0ID0gei5vYmplY3Qoe1xuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgZm9sZGVySWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaXNCYXNlNjQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBsb2FkRmlsZUlucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBsb2FkRmlsZUlucHV0PjtcbmV4cG9ydCBjb25zdCBGb2xkZXJDb250ZW50SW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGN1cnNvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIEZvbGRlckNvbnRlbnRJbnB1dCA9IHouaW5mZXI8dHlwZW9mIEZvbGRlckNvbnRlbnRJbnB1dD47XG5leHBvcnQgY29uc3QgRm9sZGVyQ29udGVudCA9IHoub2JqZWN0KHtcbiAgZmlsZXM6IEdvb2dsZURvY3VtZW50LmFycmF5KCksXG4gIGZvbGRlcnM6IEdvb2dsZURvY3VtZW50LmFycmF5KCksXG4gIG5leHRfY3Vyc29yOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgRm9sZGVyQ29udGVudCA9IHouaW5mZXI8dHlwZW9mIEZvbGRlckNvbnRlbnQ+O1xuZXhwb3J0IGNvbnN0IERyaXZlQ2FwYWJpbGl0aWVzID0gei5vYmplY3Qoe1xuICBjYW5BZGRDaGlsZHJlbjogei5ib29sZWFuKCksXG4gIGNhbkNvbW1lbnQ6IHouYm9vbGVhbigpLFxuICBjYW5Db3B5OiB6LmJvb2xlYW4oKSxcbiAgY2FuRGVsZXRlRHJpdmU6IHouYm9vbGVhbigpLFxuICBjYW5Eb3dubG9hZDogei5ib29sZWFuKCksXG4gIGNhbkVkaXQ6IHouYm9vbGVhbigpLFxuICBjYW5MaXN0Q2hpbGRyZW46IHouYm9vbGVhbigpLFxuICBjYW5NYW5hZ2VNZW1iZXJzOiB6LmJvb2xlYW4oKSxcbiAgY2FuUmVhZFJldmlzaW9uczogei5ib29sZWFuKCksXG4gIGNhblJlbmFtZTogei5ib29sZWFuKCksXG4gIGNhblNoYXJlOiB6LmJvb2xlYW4oKSxcbiAgY2FuVHJhc2hDaGlsZHJlbjogei5ib29sZWFuKCksXG4gIGNhblJlbmFtZURyaXZlOiB6LmJvb2xlYW4oKSxcbiAgY2FuQ2hhbmdlRHJpdmVCYWNrZ3JvdW5kOiB6LmJvb2xlYW4oKSxcbiAgY2FuQ2hhbmdlQ29weVJlcXVpcmVzV3JpdGVyUGVybWlzc2lvblJlc3RyaWN0aW9uOiB6LmJvb2xlYW4oKSxcbiAgY2FuQ2hhbmdlRG9tYWluVXNlcnNPbmx5UmVzdHJpY3Rpb246IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VEcml2ZU1lbWJlcnNPbmx5UmVzdHJpY3Rpb246IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VTaGFyaW5nRm9sZGVyc1JlcXVpcmVzT3JnYW5pemVyUGVybWlzc2lvblJlc3RyaWN0aW9uOiB6LmJvb2xlYW4oKSxcbiAgY2FuUmVzZXREcml2ZVJlc3RyaWN0aW9uczogei5ib29sZWFuKCksXG4gIGNhbkRlbGV0ZUNoaWxkcmVuOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBEcml2ZUNhcGFiaWxpdGllcyA9IHouaW5mZXI8dHlwZW9mIERyaXZlQ2FwYWJpbGl0aWVzPjtcbmV4cG9ydCBjb25zdCBEcml2ZVJlc3RyaWN0aW9ucyA9IHoub2JqZWN0KHtcbiAgYWRtaW5NYW5hZ2VkUmVzdHJpY3Rpb25zOiB6LmJvb2xlYW4oKSxcbiAgY29weVJlcXVpcmVzV3JpdGVyUGVybWlzc2lvbjogei5ib29sZWFuKCksXG4gIGRvbWFpblVzZXJzT25seTogei5ib29sZWFuKCksXG4gIGRyaXZlTWVtYmVyc09ubHk6IHouYm9vbGVhbigpLFxuICBzaGFyaW5nRm9sZGVyc1JlcXVpcmVzUHVibGlzaGVyUGVybWlzc2lvbjogei5ib29sZWFuKCksXG4gIHNoYXJpbmdGb2xkZXJzUmVxdWlyZXNPcmdhbml6ZXJQZXJtaXNzaW9uOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBEcml2ZVJlc3RyaWN0aW9ucyA9IHouaW5mZXI8dHlwZW9mIERyaXZlUmVzdHJpY3Rpb25zPjtcbmV4cG9ydCBjb25zdCBEcml2ZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGtpbmQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRUaW1lOiB6LnN0cmluZygpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBjYXBhYmlsaXRpZXM6IERyaXZlQ2FwYWJpbGl0aWVzLFxuICByZXN0cmljdGlvbnM6IERyaXZlUmVzdHJpY3Rpb25zXG59KTtcbmV4cG9ydCB0eXBlIERyaXZlID0gei5pbmZlcjx0eXBlb2YgRHJpdmU+O1xuZXhwb3J0IGNvbnN0IExpc3REcml2ZXNJbnB1dCA9IHoub2JqZWN0KHtcbiAgY3Vyc29yOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIExpc3REcml2ZXNJbnB1dCA9IHouaW5mZXI8dHlwZW9mIExpc3REcml2ZXNJbnB1dD47XG5leHBvcnQgY29uc3QgRHJpdmVMaXN0UmVzcG9uc2UgPSB6Lm9iamVjdCh7XG4gIGRyaXZlczogRHJpdmUuYXJyYXkoKSxcbiAgbmV4dF9jdXJzb3I6IHouc3RyaW5nKCksXG4gIGtpbmQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgRHJpdmVMaXN0UmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBEcml2ZUxpc3RSZXNwb25zZT47XG5leHBvcnQgY29uc3QgQW5vbnltb3VzX2dvb2dsZWRyaXZlX2FjdGlvbl9mZXRjaGRvY3VtZW50X291dHB1dCA9IHouc3RyaW5nKCk7XG5leHBvcnQgdHlwZSBBbm9ueW1vdXNfZ29vZ2xlZHJpdmVfYWN0aW9uX2ZldGNoZG9jdW1lbnRfb3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQW5vbnltb3VzX2dvb2dsZWRyaXZlX2FjdGlvbl9mZXRjaGRvY3VtZW50X291dHB1dD47XG5leHBvcnQgY29uc3QgbW9kZWxzID0ge1xuICBJZEVudGl0eTogSWRFbnRpdHksXG4gIERvY3VtZW50TWV0YWRhdGE6IERvY3VtZW50TWV0YWRhdGEsXG4gIERvY3VtZW50OiBEb2N1bWVudCxcbiAgRm9sZGVyOiBGb2xkZXIsXG4gIEpTT05TcHJlYWRzaGVldDogSlNPTlNwcmVhZHNoZWV0LFxuICBKU09ORG9jdW1lbnQ6IEpTT05Eb2N1bWVudCxcbiAgR29vZ2xlRG9jdW1lbnQ6IEdvb2dsZURvY3VtZW50LFxuICBVcGxvYWRGaWxlSW5wdXQ6IFVwbG9hZEZpbGVJbnB1dCxcbiAgRm9sZGVyQ29udGVudElucHV0OiBGb2xkZXJDb250ZW50SW5wdXQsXG4gIEZvbGRlckNvbnRlbnQ6IEZvbGRlckNvbnRlbnQsXG4gIERyaXZlQ2FwYWJpbGl0aWVzOiBEcml2ZUNhcGFiaWxpdGllcyxcbiAgRHJpdmVSZXN0cmljdGlvbnM6IERyaXZlUmVzdHJpY3Rpb25zLFxuICBEcml2ZTogRHJpdmUsXG4gIExpc3REcml2ZXNJbnB1dDogTGlzdERyaXZlc0lucHV0LFxuICBEcml2ZUxpc3RSZXNwb25zZTogRHJpdmVMaXN0UmVzcG9uc2UsXG4gIEFub255bW91c19nb29nbGVkcml2ZV9hY3Rpb25fZmV0Y2hkb2N1bWVudF9vdXRwdXQ6IEFub255bW91c19nb29nbGVkcml2ZV9hY3Rpb25fZmV0Y2hkb2N1bWVudF9vdXRwdXRcbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDQSxpQkFBa0I7QUFDWCxJQUFNLGlCQUFpQixhQUFFLE9BQU87QUFBQSxFQUNyQyxJQUFJLGFBQUUsT0FBTztBQUNmLENBQUM7QUFDTSxJQUFNLHlCQUF5QixhQUFFLE9BQU87QUFBQSxFQUM3QyxPQUFPLGFBQUUsTUFBTSxDQUFDLGFBQUUsTUFBTSxhQUFFLE9BQU8sQ0FBQyxHQUFHLGFBQUUsVUFBVSxDQUFDLENBQUM7QUFBQSxFQUNuRCxTQUFTLGFBQUUsTUFBTSxDQUFDLGFBQUUsTUFBTSxhQUFFLE9BQU8sQ0FBQyxHQUFHLGFBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUNNLElBQU0saUJBQWlCLGFBQUUsT0FBTztBQUFBLEVBQ3JDLElBQUksYUFBRSxPQUFPO0FBQUEsRUFDYixLQUFLLGFBQUUsT0FBTztBQUFBLEVBQ2QsT0FBTyxhQUFFLE9BQU87QUFBQSxFQUNoQixVQUFVLGFBQUUsT0FBTztBQUFBLEVBQ25CLFdBQVcsYUFBRSxPQUFPO0FBQ3RCLENBQUM7QUFDTSxJQUFNLGVBQWUsYUFBRSxPQUFPO0FBQUEsRUFDbkMsSUFBSSxhQUFFLE9BQU87QUFBQSxFQUNiLEtBQUssYUFBRSxPQUFPO0FBQUEsRUFDZCxPQUFPLGFBQUUsT0FBTztBQUFBLEVBQ2hCLFVBQVUsYUFBRSxPQUFPO0FBQUEsRUFDbkIsV0FBVyxhQUFFLE9BQU87QUFDdEIsQ0FBQztBQUNNLElBQU0sd0JBQXdCLGFBQUUsT0FBTztBQUFBLEVBQzVDLGVBQWUsYUFBRSxPQUFPO0FBQUEsRUFDeEIsWUFBWSxhQUFFLE9BQU8sYUFBRSxPQUFPLEdBQUcsYUFBRSxJQUFJLENBQUM7QUFBQSxFQUN4QyxRQUFRLGFBQUUsTUFBTSxhQUFFLE9BQU8sYUFBRSxPQUFPLEdBQUcsYUFBRSxJQUFJ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
