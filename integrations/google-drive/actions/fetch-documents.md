<!-- BEGIN GENERATED CONTENT -->
# Fetch Documents

## General Information

- **Description:** Fetch documents from Google Drive with flexible filtering options. Can fetch specific files, documents from folders, or search by query.
- **Version:** 1.0.0
- **Group:** Documents
- **Scopes:** `https://www.googleapis.com/auth/drive.readonly`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_google_drive_fetchdocuments`
- **Input Model:** `ActionInput_google_drive_fetchdocuments`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/google-drive/actions/fetch-documents.ts)


## Endpoint Reference

### Request Endpoint

`GET /documents`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "files?": "<string[]>",
  "folders?": "<string[]>",
  "mimeType?": "<string>",
  "limit?": "<number>",
  "includeSubfolders?": "<boolean>",
  "query?": "<string>"
}
```

### Request Response

```json
{
  "documents": [
    {
      "id": "<string>",
      "url": "<string>",
      "title": "<string>",
      "mimeType": "<string>",
      "updatedAt": "<string>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/google-drive/actions/fetch-documents.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/google-drive/actions/fetch-documents.md)

<!-- END  GENERATED CONTENT -->

