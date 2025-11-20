<!-- BEGIN GENERATED CONTENT -->
# Fetch Folders

## General Information

- **Description:** Fetch folders from Google Drive. Can fetch folders from a specific parent, all folders recursively, or search folders by query.
- **Version:** 1.0.0
- **Group:** Folders
- **Scopes:** `https://www.googleapis.com/auth/drive.readonly`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_google_drive_fetchfolders`
- **Input Model:** `ActionInput_google_drive_fetchfolders`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/google-drive/actions/fetch-folders.ts)


## Endpoint Reference

### Request Endpoint

`GET /folders`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "parentId?": "<string>",
  "limit?": "<number>",
  "recursive?": "<boolean>",
  "query?": "<string>"
}
```

### Request Response

```json
{
  "folders": [
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

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/google-drive/actions/fetch-folders.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/google-drive/actions/fetch-folders.md)

<!-- END  GENERATED CONTENT -->

