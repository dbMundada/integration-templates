<!-- BEGIN GENERATED CONTENT -->
# Fetch Messages

## General Information

- **Description:** Fetch messages from a specific Slack channel with optional replies and reactions
- **Version:** 1.0.0
- **Group:** Messages
- **Scopes:** `channels:read, channels:history`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_slack_fetchmessages`
- **Input Model:** `ActionInput_slack_fetchmessages`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/slack/actions/fetch-messages.ts)


## Endpoint Reference

### Request Endpoint

`GET /messages`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "channel": "<string>",
  "limit?": "<number>",
  "oldest?": "<string>",
  "latest?": "<string>",
  "includeReplies?": "<boolean>",
  "includeReactions?": "<boolean>"
}
```

### Request Response

```json
{
  "messages": [
    {
      "id": "<string>",
      "ts": "<string>",
      "channel_id": "<string>",
      "thread_ts": "<string | null>",
      "app_id": "<string | null>",
      "bot_id": "<string | null>",
      "display_as_bot": "<boolean | null>",
      "is_locked": "<boolean | null>",
      "metadata": {
        "event_type": "<string>"
      },
      "parent_user_id": "<string | null>",
      "subtype": "<string | null>",
      "text": "<string | null>",
      "topic": "<string | null>",
      "user_id": "<string | null>",
      "raw_json": "<string>"
    }
  ],
  "replies?": [
    {
      "id": "<string>",
      "ts": "<string>",
      "channel_id": "<string>",
      "thread_ts": "<string | null>",
      "app_id": "<string | null>",
      "bot_id": "<string | null>",
      "display_as_bot": "<boolean | null>",
      "is_locked": "<boolean | null>",
      "metadata": {
        "event_type": "<string>"
      },
      "parent_user_id": "<string | null>",
      "subtype": "<string | null>",
      "text": "<string | null>",
      "topic": "<string | null>",
      "user_id": "<string | null>",
      "root": {
        "message_id": "<string | null>",
        "ts": "<string>"
      },
      "raw_json": "<string>"
    }
  ],
  "reactions?": [
    {
      "id": "<string>",
      "message_ts": "<string>",
      "thread_ts": "<string | null>",
      "channel_id": "<string>",
      "user_id": "<string>",
      "reaction_name": "<string>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/slack/actions/fetch-messages.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/slack/actions/fetch-messages.md)

<!-- END  GENERATED CONTENT -->

