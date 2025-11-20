<!-- BEGIN GENERATED CONTENT -->
# Fetch Knowledge Base

## General Information

- **Description:** Fetch knowledge base articles from HubSpot
- **Version:** 1.0.0
- **Group:** Knowledge Base
- **Scopes:** `oauth`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchknowledgebase`
- **Input Model:** `ActionInput_hubspot_fetchknowledgebase`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-knowledge-base.ts)


## Endpoint Reference

### Request Endpoint

`GET /knowledge-base`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "limit?": "<number>",
  "term?": "<string>"
}
```

### Request Response

```json
{
  "knowledgeBase": [
    {
      "id": "<string>",
      "title": "<string>",
      "description": "<string>",
      "category": "<string>",
      "content": "<string>",
      "publishDate": "<number>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-knowledge-base.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-knowledge-base.md)

<!-- END  GENERATED CONTENT -->

