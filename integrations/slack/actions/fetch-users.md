<!-- BEGIN GENERATED CONTENT -->
# Fetch Users

## General Information

- **Description:** Fetch users from Slack workspace
- **Version:** 1.0.0
- **Group:** Users
- **Scopes:** `users:read, users:read.email`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_slack_fetchusers`
- **Input Model:** `ActionInput_slack_fetchusers`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/slack/actions/fetch-users.ts)


## Endpoint Reference

### Request Endpoint

`GET /users`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "limit?": "<number>",
  "includeLocale?": "<boolean>"
}
```

### Request Response

```json
{
  "users": [
    {
      "id": "<string>",
      "team_id": "<string>",
      "name": "<string>",
      "deleted": "<boolean>",
      "tz": "<string>",
      "tz_label": "<string>",
      "tz_offset": "<number>",
      "profile": {
        "avatar_hash": "<string>",
        "real_name": "<string | null>",
        "display_name": "<string | null>",
        "real_name_normalized": "<string | null>",
        "display_name_normalized": "<string | null>",
        "email": "<string | null>",
        "image_original?": "<string | null>"
      },
      "is_admin": "<boolean>",
      "is_owner": "<boolean>",
      "is_primary_owner": "<boolean>",
      "is_restricted": "<boolean>",
      "is_ultra_restricted": "<boolean>",
      "is_bot": "<boolean>",
      "updated": "<number>",
      "is_app_user": "<boolean>",
      "raw_json": "<string>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/slack/actions/fetch-users.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/slack/actions/fetch-users.md)

<!-- END  GENERATED CONTENT -->

