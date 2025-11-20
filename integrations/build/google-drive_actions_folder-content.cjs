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

// google-drive/schema.zod.ts
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

// google-drive/models.ts
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZ29vZ2xlLWRyaXZlL2FjdGlvbnMvZm9sZGVyLWNvbnRlbnQudHMiLCAiZ29vZ2xlLWRyaXZlL3NjaGVtYS56b2QudHMiLCAiZ29vZ2xlLWRyaXZlL21vZGVscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHsgZm9sZGVyQ29udGVudElucHV0U2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hLnpvZC5qcyc7XG5pbXBvcnQgdHlwZSB7IFByb3h5Q29uZmlndXJhdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB0eXBlIHsgR29vZ2xlRG9jdW1lbnQgfSBmcm9tICcuLi9tb2RlbHMuanMnO1xuaW1wb3J0IHsgRm9sZGVyQ29udGVudElucHV0LCBGb2xkZXJDb250ZW50IH0gZnJvbSAnLi4vbW9kZWxzLmpzJztcblxuLyoqXG4gKiBGZXRjaGVzIHRoZSB0b3AtbGV2ZWwgY29udGVudCAoZmlsZXMgYW5kIGZvbGRlcnMpIG9mIGEgR29vZ2xlIERyaXZlIGZvbGRlci5cbiAqIElmIGEgZm9sZGVyIElEIGlzIHByb3ZpZGVkLCBpdCBmZXRjaGVzIGNvbnRlbnQgZnJvbSB0aGF0IGZvbGRlci5cbiAqIE90aGVyd2lzZSwgaXQgZmV0Y2hlcyBjb250ZW50IGZyb20gdGhlIHJvb3QgZm9sZGVyLlxuICpcbiAqIEBwYXJhbSB7TmFuZ29BY3Rpb259IG5hbmdvIC0gVGhlIE5hbmdvIGFjdGlvbiBpbnN0YW5jZSB1c2VkIHRvIG1ha2UgdGhlIEFQSSByZXF1ZXN0LlxuICogQHBhcmFtIHtGb2xkZXJDb250ZW50SW5wdXR9IGlucHV0IC0gT3B0aW9uYWwgcGFyYW1ldGVycyBpbmNsdWRpbmcgaWQgKGZvbGRlciBJRCkgYW5kIHBhZ2VUb2tlbiAocGFnaW5hdGlvbiB0b2tlbikuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxGb2xkZXJDb250ZW50Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgZm9sZGVyIGNvbnRlbnQgd2l0aCBmaWxlcywgZm9sZGVycywgYW5kIHBhZ2luYXRpb24gaW5mby5cbiAqIEB0aHJvd3Mge0Vycm9yfSAtIFRocm93cyBhbiBlcnJvciBpZiB0aGUgQVBJIHJlcXVlc3QgZmFpbHMuXG4gKi9cbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdGZXRjaGVzIHRoZSB0b3AtbGV2ZWwgY29udGVudCAoZmlsZXMgYW5kIGZvbGRlcnMpIG9mIGEgZm9sZGVyIGdpdmVuIGl0cyBJRC5cXG5JZiBubyBmb2xkZXIgSUQgaXMgcHJvdmlkZWQsIGl0IGZldGNoZXMgY29udGVudCBmcm9tIHRoZSByb290IGZvbGRlci4nLFxuICB2ZXJzaW9uOiAnMi4wLjAnLFxuICBlbmRwb2ludDoge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgcGF0aDogJy9mb2xkZXItY29udGVudCcsXG4gICAgZ3JvdXA6ICdGb2xkZXJzJ1xuICB9LFxuICBpbnB1dDogRm9sZGVyQ29udGVudElucHV0LFxuICBvdXRwdXQ6IEZvbGRlckNvbnRlbnQsXG4gIHNjb3BlczogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLnJlYWRvbmx5J10sXG4gIGV4ZWM6IGFzeW5jIChuYW5nbywgaW5wdXQ6IEZvbGRlckNvbnRlbnRJbnB1dCA9IHt9KTogUHJvbWlzZTxGb2xkZXJDb250ZW50PiA9PiB7XG4gICAgYXdhaXQgbmFuZ28uem9kVmFsaWRhdGVJbnB1dCh7XG4gICAgICB6b2RTY2hlbWE6IGZvbGRlckNvbnRlbnRJbnB1dFNjaGVtYSxcbiAgICAgIGlucHV0XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCB0aGUgcXVlcnkgdG8gZ2V0IGJvdGggZmlsZXMgYW5kIGZvbGRlcnNcbiAgICBsZXQgcXVlcnkgPSAnJztcbiAgICBpZiAoaW5wdXQuaWQpIHtcbiAgICAgIHF1ZXJ5ID0gYCcke2lucHV0LmlkfScgaW4gcGFyZW50c2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0gXCIncm9vdCcgaW4gcGFyZW50c1wiO1xuICAgIH1cbiAgICBjb25zdCBjb25maWc6IFByb3h5Q29uZmlndXJhdGlvbiA9IHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2RyaXZlL2FwaS9yZWZlcmVuY2UvcmVzdC92My9maWxlcy9saXN0XG4gICAgICBlbmRwb2ludDogJ2RyaXZlL3YzL2ZpbGVzJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgZmllbGRzOiAnZmlsZXMoaWQsbmFtZSxtaW1lVHlwZSxjcmVhdGVkVGltZSxtb2RpZmllZFRpbWUscGFyZW50cyx3ZWJWaWV3TGluayksbmV4dFBhZ2VUb2tlbicsXG4gICAgICAgIHBhZ2VTaXplOiAxMDAsXG4gICAgICAgIHBhZ2VUb2tlbjogaW5wdXQuY3Vyc29yIHx8ICcnLFxuICAgICAgICBjb3Jwb3JhOiAnYWxsRHJpdmVzJyxcbiAgICAgICAgc3VwcG9ydHNBbGxEcml2ZXM6ICd0cnVlJyxcbiAgICAgICAgLy8gV2hldGhlciB0aGUgcmVxdWVzdGluZyBhcHBsaWNhdGlvbiBzdXBwb3J0cyBib3RoIE15IERyaXZlcyBhbmQgc2hhcmVkIGRyaXZlc1xuICAgICAgICBpbmNsdWRlSXRlbXNGcm9tQWxsRHJpdmVzOiAndHJ1ZScsXG4gICAgICAgIC8vIGJvdGggTXkgRHJpdmUgYW5kIHNoYXJlZCBkcml2ZSBpdGVtc1xuICAgICAgICBvcmRlckJ5OiAnbmFtZSdcbiAgICAgIH0sXG4gICAgICByZXRyaWVzOiAzXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5hbmdvLmdldChjb25maWcpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IG5hbmdvLkFjdGlvbkVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogYEZhaWxlZCB0byBmZXRjaCBmb2xkZXIgY29udGVudDogU3RhdHVzIENvZGUgJHtyZXNwb25zZS5zdGF0dXN9YFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2UuZGF0YS5maWxlcyB8fCBbXTtcblxuICAgIC8vIFNlcGFyYXRlIGZpbGVzIGFuZCBmb2xkZXJzXG4gICAgY29uc3QgZm9sZGVyczogR29vZ2xlRG9jdW1lbnRbXSA9IFtdO1xuICAgIGNvbnN0IGZpbGVzOiBHb29nbGVEb2N1bWVudFtdID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS5taW1lVHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5mb2xkZXInKSB7XG4gICAgICAgIGZvbGRlcnMucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVzLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBmb2xkZXJzLFxuICAgICAgZmlsZXMsXG4gICAgICAuLi4ocmVzcG9uc2UuZGF0YS5jdXJzb3IgPyB7XG4gICAgICAgIG5leHRfY3Vyc29yOiByZXNwb25zZS5kYXRhLm5leHRQYWdlVG9rZW5cbiAgICAgIH0gOiB7fSlcbiAgICB9O1xuICB9XG59O1xuZXhwb3J0IHR5cGUgTmFuZ29BY3Rpb25Mb2NhbCA9IFBhcmFtZXRlcnM8KHR5cGVvZiBhY3Rpb24pWydleGVjJ10+WzBdO1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9uOyIsICIvLyBHZW5lcmF0ZWQgYnkgdHMtdG8tem9kXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmV4cG9ydCBjb25zdCBpZEVudGl0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50TWV0YWRhdGFTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZpbGVzOiB6LnVuaW9uKFt6LmFycmF5KHouc3RyaW5nKCkpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGZvbGRlcnM6IHoudW5pb24oW3ouYXJyYXkoei5zdHJpbmcoKSksIHoudW5kZWZpbmVkKCldKVxufSk7XG5leHBvcnQgY29uc3QgZG9jdW1lbnRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB1cmw6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBmb2xkZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB1cmw6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBqU09OU3ByZWFkc2hlZXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHNwcmVhZHNoZWV0SWQ6IHouc3RyaW5nKCksXG4gIHByb3BlcnRpZXM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBzaGVldHM6IHouYXJyYXkoei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkpLFxuICBuYW1lZFJhbmdlczogei5hcnJheSh6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSksXG4gIHNwcmVhZHNoZWV0VXJsOiB6LnN0cmluZygpLFxuICBkZXZlbG9wZXJNZXRhZGF0YTogei5hcnJheSh6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSksXG4gIGRhdGFTb3VyY2VzOiB6LmFycmF5KHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpKSxcbiAgZGF0YVNvdXJjZVNjaGVkdWxlczogei5hcnJheSh6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSlcbn0pO1xuZXhwb3J0IGNvbnN0IGpTT05Eb2N1bWVudFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9jdW1lbnRJZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIHVybDogei5zdHJpbmcoKSxcbiAgdGFiczogei5hcnJheSh6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSksXG4gIHJldmlzaW9uSWQ6IHouc3RyaW5nKCksXG4gIHN1Z2dlc3Rpb25zVmlld01vZGU6IHoudW5pb24oW3oubGl0ZXJhbCgnREVGQVVMVF9GT1JfQ1VSUkVOVF9BQ0NFU1MnKSwgei5saXRlcmFsKCdTVUdHRVNUSU9OU19JTkxJTkUnKSwgei5saXRlcmFsKCdQUkVWSUVXX1NVR0dFU1RJT05TX0FDQ0VQVEVEJyksIHoubGl0ZXJhbCgnUFJFVklFV19XSVRIT1VUX1NVR0dFU1RJT05TJyldKSxcbiAgYm9keTogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIGhlYWRlcnM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBmb290ZXJzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgZm9vdG5vdGVzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgZG9jdW1lbnRTdHlsZTogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIHN1Z2dlc3RlZERvY3VtZW50U3R5bGVDaGFuZ2VzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgbmFtZWRTdHlsZXM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBzdWdnZXN0ZWROYW1lZFN0eWxlc0NoYW5nZXM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLFxuICBsaXN0czogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIG5hbWVkUmFuZ2VzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKSxcbiAgaW5saW5lT2JqZWN0czogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSksXG4gIHBvc2l0aW9uZWRPYmplY3RzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKVxufSk7XG5leHBvcnQgY29uc3QgZ29vZ2xlRG9jdW1lbnRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgcGFyZW50czogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBtb2RpZmllZFRpbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3JlYXRlZFRpbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2ViVmlld0xpbms6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAga2luZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbnRlbnQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICBmb2xkZXJJZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaXNCYXNlNjQ6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgZm9sZGVyQ29udGVudElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjdXJzb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgZm9sZGVyQ29udGVudFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZmlsZXM6IHouYXJyYXkoZ29vZ2xlRG9jdW1lbnRTY2hlbWEpLFxuICBmb2xkZXJzOiB6LmFycmF5KGdvb2dsZURvY3VtZW50U2NoZW1hKSxcbiAgY3Vyc29yOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGRyaXZlQ2FwYWJpbGl0aWVzU2NoZW1hID0gei5vYmplY3Qoe1xuICBjYW5BZGRDaGlsZHJlbjogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuQ29tbWVudDogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuQ29weTogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuRGVsZXRlRHJpdmU6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkRvd25sb2FkOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5FZGl0OiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5MaXN0Q2hpbGRyZW46IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbk1hbmFnZU1lbWJlcnM6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhblJlYWRSZXZpc2lvbnM6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhblJlbmFtZTogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuU2hhcmU6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhblRyYXNoQ2hpbGRyZW46IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhblJlbmFtZURyaXZlOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pLFxuICBjYW5DaGFuZ2VEcml2ZUJhY2tncm91bmQ6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkNoYW5nZUNvcHlSZXF1aXJlc1dyaXRlclBlcm1pc3Npb25SZXN0cmljdGlvbjogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuQ2hhbmdlRG9tYWluVXNlcnNPbmx5UmVzdHJpY3Rpb246IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhbkNoYW5nZURyaXZlTWVtYmVyc09ubHlSZXN0cmljdGlvbjogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuQ2hhbmdlU2hhcmluZ0ZvbGRlcnNSZXF1aXJlc09yZ2FuaXplclBlcm1pc3Npb25SZXN0cmljdGlvbjogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuUmVzZXREcml2ZVJlc3RyaWN0aW9uczogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgY2FuRGVsZXRlQ2hpbGRyZW46IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSlcbn0pO1xuZXhwb3J0IGNvbnN0IGRyaXZlUmVzdHJpY3Rpb25zU2NoZW1hID0gei5vYmplY3Qoe1xuICBhZG1pbk1hbmFnZWRSZXN0cmljdGlvbnM6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNvcHlSZXF1aXJlc1dyaXRlclBlcm1pc3Npb246IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGRvbWFpblVzZXJzT25seTogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgZHJpdmVNZW1iZXJzT25seTogei51bmlvbihbei5ib29sZWFuKCksIHoudW5kZWZpbmVkKCldKSxcbiAgc2hhcmluZ0ZvbGRlcnNSZXF1aXJlc1B1Ymxpc2hlclBlcm1pc3Npb246IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIHNoYXJpbmdGb2xkZXJzUmVxdWlyZXNPcmdhbml6ZXJQZXJtaXNzaW9uOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei51bmRlZmluZWQoKV0pXG59KTtcbmV4cG9ydCBjb25zdCBkcml2ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGtpbmQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRUaW1lOiB6LnN0cmluZygpLFxuICBoaWRkZW46IHoudW5pb24oW3ouYm9vbGVhbigpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGNhcGFiaWxpdGllczogei51bmlvbihbZHJpdmVDYXBhYmlsaXRpZXNTY2hlbWEsIHoudW5kZWZpbmVkKCldKSxcbiAgcmVzdHJpY3Rpb25zOiB6LnVuaW9uKFtkcml2ZVJlc3RyaWN0aW9uc1NjaGVtYSwgei51bmRlZmluZWQoKV0pXG59KTtcbmV4cG9ydCBjb25zdCBsaXN0RHJpdmVzSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGN1cnNvcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pXG59KTtcbmV4cG9ydCBjb25zdCBkcml2ZUxpc3RSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZHJpdmVzOiB6LmFycmF5KGRyaXZlU2NoZW1hKSxcbiAgY3Vyc29yOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSksXG4gIGtpbmQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFub255bW91c0dvb2dsZWRyaXZlQWN0aW9uRmV0Y2hkb2N1bWVudE91dHB1dFNjaGVtYSA9IHouc3RyaW5nKCk7IiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5leHBvcnQgY29uc3QgSWRFbnRpdHkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIElkRW50aXR5ID0gei5pbmZlcjx0eXBlb2YgSWRFbnRpdHk+O1xuZXhwb3J0IGNvbnN0IERvY3VtZW50TWV0YWRhdGEgPSB6Lm9iamVjdCh7XG4gIGZpbGVzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIGZvbGRlcnM6IHouc3RyaW5nKCkuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBEb2N1bWVudE1ldGFkYXRhID0gei5pbmZlcjx0eXBlb2YgRG9jdW1lbnRNZXRhZGF0YT47XG5leHBvcnQgY29uc3QgRG9jdW1lbnQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB1cmw6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBtaW1lVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIERvY3VtZW50ID0gei5pbmZlcjx0eXBlb2YgRG9jdW1lbnQ+O1xuZXhwb3J0IGNvbnN0IEZvbGRlciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHVybDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgRm9sZGVyID0gei5pbmZlcjx0eXBlb2YgRm9sZGVyPjtcbmV4cG9ydCBjb25zdCBKU09OU3ByZWFkc2hlZXQgPSB6Lm9iamVjdCh7XG4gIHNwcmVhZHNoZWV0SWQ6IHouc3RyaW5nKCksXG4gIHByb3BlcnRpZXM6IHoub2JqZWN0KHt9KSxcbiAgc2hlZXRzOiB6Lm9iamVjdCh7fSkuYXJyYXkoKSxcbiAgbmFtZWRSYW5nZXM6IHoub2JqZWN0KHt9KS5hcnJheSgpLFxuICBzcHJlYWRzaGVldFVybDogei5zdHJpbmcoKSxcbiAgZGV2ZWxvcGVyTWV0YWRhdGE6IHoub2JqZWN0KHt9KS5hcnJheSgpLFxuICBkYXRhU291cmNlczogei5vYmplY3Qoe30pLmFycmF5KCksXG4gIGRhdGFTb3VyY2VTY2hlZHVsZXM6IHoub2JqZWN0KHt9KS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIEpTT05TcHJlYWRzaGVldCA9IHouaW5mZXI8dHlwZW9mIEpTT05TcHJlYWRzaGVldD47XG5leHBvcnQgY29uc3QgSlNPTkRvY3VtZW50ID0gei5vYmplY3Qoe1xuICBkb2N1bWVudElkOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgdXJsOiB6LnN0cmluZygpLFxuICB0YWJzOiB6Lm9iamVjdCh7fSkuYXJyYXkoKSxcbiAgcmV2aXNpb25JZDogei5zdHJpbmcoKSxcbiAgc3VnZ2VzdGlvbnNWaWV3TW9kZTogei51bmlvbihbei5saXRlcmFsKFwiREVGQVVMVF9GT1JfQ1VSUkVOVF9BQ0NFU1NcIiksIHoubGl0ZXJhbChcIlNVR0dFU1RJT05TX0lOTElORVwiKSwgei5saXRlcmFsKFwiUFJFVklFV19TVUdHRVNUSU9OU19BQ0NFUFRFRFwiKSwgei5saXRlcmFsKFwiUFJFVklFV19XSVRIT1VUX1NVR0dFU1RJT05TXCIpXSksXG4gIGJvZHk6IHoub2JqZWN0KHt9KSxcbiAgaGVhZGVyczogei5vYmplY3Qoe30pLFxuICBmb290ZXJzOiB6Lm9iamVjdCh7fSksXG4gIGZvb3Rub3Rlczogei5vYmplY3Qoe30pLFxuICBkb2N1bWVudFN0eWxlOiB6Lm9iamVjdCh7fSksXG4gIHN1Z2dlc3RlZERvY3VtZW50U3R5bGVDaGFuZ2VzOiB6Lm9iamVjdCh7fSksXG4gIG5hbWVkU3R5bGVzOiB6Lm9iamVjdCh7fSksXG4gIHN1Z2dlc3RlZE5hbWVkU3R5bGVzQ2hhbmdlczogei5vYmplY3Qoe30pLFxuICBsaXN0czogei5vYmplY3Qoe30pLFxuICBuYW1lZFJhbmdlczogei5vYmplY3Qoe30pLFxuICBpbmxpbmVPYmplY3RzOiB6Lm9iamVjdCh7fSksXG4gIHBvc2l0aW9uZWRPYmplY3RzOiB6Lm9iamVjdCh7fSlcbn0pO1xuZXhwb3J0IHR5cGUgSlNPTkRvY3VtZW50ID0gei5pbmZlcjx0eXBlb2YgSlNPTkRvY3VtZW50PjtcbmV4cG9ydCBjb25zdCBHb29nbGVEb2N1bWVudCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICBwYXJlbnRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuYXJyYXkoKSxcbiAgbW9kaWZpZWRUaW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNyZWF0ZWRUaW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYlZpZXdMaW5rOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGtpbmQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBHb29nbGVEb2N1bWVudCA9IHouaW5mZXI8dHlwZW9mIEdvb2dsZURvY3VtZW50PjtcbmV4cG9ydCBjb25zdCBVcGxvYWRGaWxlSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGNvbnRlbnQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG1pbWVUeXBlOiB6LnN0cmluZygpLFxuICBmb2xkZXJJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpc0Jhc2U2NDogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBVcGxvYWRGaWxlSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGxvYWRGaWxlSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IEZvbGRlckNvbnRlbnRJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3Vyc29yOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgRm9sZGVyQ29udGVudElucHV0ID0gei5pbmZlcjx0eXBlb2YgRm9sZGVyQ29udGVudElucHV0PjtcbmV4cG9ydCBjb25zdCBGb2xkZXJDb250ZW50ID0gei5vYmplY3Qoe1xuICBmaWxlczogR29vZ2xlRG9jdW1lbnQuYXJyYXkoKSxcbiAgZm9sZGVyczogR29vZ2xlRG9jdW1lbnQuYXJyYXkoKSxcbiAgbmV4dF9jdXJzb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBGb2xkZXJDb250ZW50ID0gei5pbmZlcjx0eXBlb2YgRm9sZGVyQ29udGVudD47XG5leHBvcnQgY29uc3QgRHJpdmVDYXBhYmlsaXRpZXMgPSB6Lm9iamVjdCh7XG4gIGNhbkFkZENoaWxkcmVuOiB6LmJvb2xlYW4oKSxcbiAgY2FuQ29tbWVudDogei5ib29sZWFuKCksXG4gIGNhbkNvcHk6IHouYm9vbGVhbigpLFxuICBjYW5EZWxldGVEcml2ZTogei5ib29sZWFuKCksXG4gIGNhbkRvd25sb2FkOiB6LmJvb2xlYW4oKSxcbiAgY2FuRWRpdDogei5ib29sZWFuKCksXG4gIGNhbkxpc3RDaGlsZHJlbjogei5ib29sZWFuKCksXG4gIGNhbk1hbmFnZU1lbWJlcnM6IHouYm9vbGVhbigpLFxuICBjYW5SZWFkUmV2aXNpb25zOiB6LmJvb2xlYW4oKSxcbiAgY2FuUmVuYW1lOiB6LmJvb2xlYW4oKSxcbiAgY2FuU2hhcmU6IHouYm9vbGVhbigpLFxuICBjYW5UcmFzaENoaWxkcmVuOiB6LmJvb2xlYW4oKSxcbiAgY2FuUmVuYW1lRHJpdmU6IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VEcml2ZUJhY2tncm91bmQ6IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VDb3B5UmVxdWlyZXNXcml0ZXJQZXJtaXNzaW9uUmVzdHJpY3Rpb246IHouYm9vbGVhbigpLFxuICBjYW5DaGFuZ2VEb21haW5Vc2Vyc09ubHlSZXN0cmljdGlvbjogei5ib29sZWFuKCksXG4gIGNhbkNoYW5nZURyaXZlTWVtYmVyc09ubHlSZXN0cmljdGlvbjogei5ib29sZWFuKCksXG4gIGNhbkNoYW5nZVNoYXJpbmdGb2xkZXJzUmVxdWlyZXNPcmdhbml6ZXJQZXJtaXNzaW9uUmVzdHJpY3Rpb246IHouYm9vbGVhbigpLFxuICBjYW5SZXNldERyaXZlUmVzdHJpY3Rpb25zOiB6LmJvb2xlYW4oKSxcbiAgY2FuRGVsZXRlQ2hpbGRyZW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIERyaXZlQ2FwYWJpbGl0aWVzID0gei5pbmZlcjx0eXBlb2YgRHJpdmVDYXBhYmlsaXRpZXM+O1xuZXhwb3J0IGNvbnN0IERyaXZlUmVzdHJpY3Rpb25zID0gei5vYmplY3Qoe1xuICBhZG1pbk1hbmFnZWRSZXN0cmljdGlvbnM6IHouYm9vbGVhbigpLFxuICBjb3B5UmVxdWlyZXNXcml0ZXJQZXJtaXNzaW9uOiB6LmJvb2xlYW4oKSxcbiAgZG9tYWluVXNlcnNPbmx5OiB6LmJvb2xlYW4oKSxcbiAgZHJpdmVNZW1iZXJzT25seTogei5ib29sZWFuKCksXG4gIHNoYXJpbmdGb2xkZXJzUmVxdWlyZXNQdWJsaXNoZXJQZXJtaXNzaW9uOiB6LmJvb2xlYW4oKSxcbiAgc2hhcmluZ0ZvbGRlcnNSZXF1aXJlc09yZ2FuaXplclBlcm1pc3Npb246IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIERyaXZlUmVzdHJpY3Rpb25zID0gei5pbmZlcjx0eXBlb2YgRHJpdmVSZXN0cmljdGlvbnM+O1xuZXhwb3J0IGNvbnN0IERyaXZlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAga2luZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZFRpbWU6IHouc3RyaW5nKCksXG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIGNhcGFiaWxpdGllczogRHJpdmVDYXBhYmlsaXRpZXMsXG4gIHJlc3RyaWN0aW9uczogRHJpdmVSZXN0cmljdGlvbnNcbn0pO1xuZXhwb3J0IHR5cGUgRHJpdmUgPSB6LmluZmVyPHR5cGVvZiBEcml2ZT47XG5leHBvcnQgY29uc3QgTGlzdERyaXZlc0lucHV0ID0gei5vYmplY3Qoe1xuICBjdXJzb3I6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgTGlzdERyaXZlc0lucHV0ID0gei5pbmZlcjx0eXBlb2YgTGlzdERyaXZlc0lucHV0PjtcbmV4cG9ydCBjb25zdCBEcml2ZUxpc3RSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgZHJpdmVzOiBEcml2ZS5hcnJheSgpLFxuICBuZXh0X2N1cnNvcjogei5zdHJpbmcoKSxcbiAga2luZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBEcml2ZUxpc3RSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIERyaXZlTGlzdFJlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBBbm9ueW1vdXNfZ29vZ2xlZHJpdmVfYWN0aW9uX2ZldGNoZG9jdW1lbnRfb3V0cHV0ID0gei5zdHJpbmcoKTtcbmV4cG9ydCB0eXBlIEFub255bW91c19nb29nbGVkcml2ZV9hY3Rpb25fZmV0Y2hkb2N1bWVudF9vdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBBbm9ueW1vdXNfZ29vZ2xlZHJpdmVfYWN0aW9uX2ZldGNoZG9jdW1lbnRfb3V0cHV0PjtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7XG4gIElkRW50aXR5OiBJZEVudGl0eSxcbiAgRG9jdW1lbnRNZXRhZGF0YTogRG9jdW1lbnRNZXRhZGF0YSxcbiAgRG9jdW1lbnQ6IERvY3VtZW50LFxuICBGb2xkZXI6IEZvbGRlcixcbiAgSlNPTlNwcmVhZHNoZWV0OiBKU09OU3ByZWFkc2hlZXQsXG4gIEpTT05Eb2N1bWVudDogSlNPTkRvY3VtZW50LFxuICBHb29nbGVEb2N1bWVudDogR29vZ2xlRG9jdW1lbnQsXG4gIFVwbG9hZEZpbGVJbnB1dDogVXBsb2FkRmlsZUlucHV0LFxuICBGb2xkZXJDb250ZW50SW5wdXQ6IEZvbGRlckNvbnRlbnRJbnB1dCxcbiAgRm9sZGVyQ29udGVudDogRm9sZGVyQ29udGVudCxcbiAgRHJpdmVDYXBhYmlsaXRpZXM6IERyaXZlQ2FwYWJpbGl0aWVzLFxuICBEcml2ZVJlc3RyaWN0aW9uczogRHJpdmVSZXN0cmljdGlvbnMsXG4gIERyaXZlOiBEcml2ZSxcbiAgTGlzdERyaXZlc0lucHV0OiBMaXN0RHJpdmVzSW5wdXQsXG4gIERyaXZlTGlzdFJlc3BvbnNlOiBEcml2ZUxpc3RSZXNwb25zZSxcbiAgQW5vbnltb3VzX2dvb2dsZWRyaXZlX2FjdGlvbl9mZXRjaGRvY3VtZW50X291dHB1dDogQW5vbnltb3VzX2dvb2dsZWRyaXZlX2FjdGlvbl9mZXRjaGRvY3VtZW50X291dHB1dFxufTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0NBLGlCQUFrQjtBQUNYLElBQU0saUJBQWlCLGFBQUUsT0FBTztBQUFBLEVBQ3JDLElBQUksYUFBRSxPQUFPO0FBQ2YsQ0FBQztBQUNNLElBQU0seUJBQXlCLGFBQUUsT0FBTztBQUFBLEVBQzdDLE9BQU8sYUFBRSxNQUFNLENBQUMsYUFBRSxNQUFNLGFBQUUsT0FBTyxDQUFDLEdBQUcsYUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLEVBQ25ELFNBQVMsYUFBRSxNQUFNLENBQUMsYUFBRSxNQUFNLGFBQUUsT0FBTyxDQUFDLEdBQUcsYUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBQ00sSUFBTSxpQkFBaUIsYUFBRSxPQUFPO0FBQUEsRUFDckMsSUFBSSxhQUFFLE9BQU87QUFBQSxFQUNiLEtBQUssYUFBRSxPQUFPO0FBQUEsRUFDZCxPQUFPLGFBQUUsT0FBTztBQUFBLEVBQ2hCLFVBQVUsYUFBRSxPQUFPO0FBQUEsRUFDbkIsV0FBVyxhQUFFLE9BQU87QUFDdEIsQ0FBQztBQUNNLElBQU0sZUFBZSxhQUFFLE9BQU87QUFBQSxFQUNuQyxJQUFJLGFBQUUsT0FBTztBQUFBLEVBQ2IsS0FBSyxhQUFFLE9BQU87QUFBQSxFQUNkLE9BQU8sYUFBRSxPQUFPO0FBQUEsRUFDaEIsVUFBVSxhQUFFLE9BQU87QUFBQSxFQUNuQixXQUFXLGFBQUUsT0FBTztBQUN0QixDQUFDO0FBQ00sSUFBTSx3QkFBd0IsYUFBRSxPQUFPO0FBQUEsRUFDNUMsZUFBZSxhQUFFLE9BQU87QUFBQSxFQUN4QixZQUFZLGFBQUUsT0FBTyxhQUFFLE9BQU8sR0FBRyxhQUFFLElBQUksQ0FBQztBQUFBLEVBQ3hDLFFBQVEsYUFBRSxNQUFNLGFBQUUsT0FBTyxhQUFFLE9B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
