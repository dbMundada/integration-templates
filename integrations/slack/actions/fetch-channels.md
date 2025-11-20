<!-- BEGIN GENERATED CONTENT -->
# Fetch Channels

## General Information

- **Description:** Fetch channels from Slack workspace. Supports filtering by channel types and archived status.
- **Version:** 1.0.0
- **Group:** Channels
- **Scopes:** `channels:read`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_slack_fetchchannels`
- **Input Model:** `ActionInput_slack_fetchchannels`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/slack/actions/fetch-channels.ts)


## Endpoint Reference

### Request Endpoint

`GET /channels`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "limit?": "<number>",
  "types?": "<string>",
  "excludeArchived?": "<boolean>"
}
```

### Request Response

```json
{
  "channels": [
    {
      "id": "<string>",
      "name": "<string>",
      "is_channel": "<boolean>",
      "is_group": "<boolean>",
      "is_im": "<boolean>",
      "created": "<number>",
      "creator": "<string>",
      "is_archived": "<boolean>",
      "is_general": "<boolean>",
      "name_normalized": "<string>",
      "is_shared": "<boolean>",
      "is_private": "<boolean>",
      "is_mpim": "<boolean>",
      "updated": "<number>",
      "num_members": "<number>",
      "raw_json": "<string>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/slack/actions/fetch-channels.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/slack/actions/fetch-channels.md)

<!-- END  GENERATED CONTENT -->

