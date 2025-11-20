<!-- BEGIN GENERATED CONTENT -->
# Fetch Service Tickets

## General Information

- **Description:** Fetch service tickets from HubSpot
- **Version:** 1.0.0
- **Group:** Service Tickets
- **Scopes:** `tickets`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchservicetickets`
- **Input Model:** `ActionInput_hubspot_fetchservicetickets`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-service-tickets.ts)


## Endpoint Reference

### Request Endpoint

`GET /service-tickets`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "limit?": "<number>",
  "properties?": "<string[]>",
  "modifiedSince?": "<string>"
}
```

### Request Response

```json
{
  "serviceTickets": [
    {
      "id": "<string>",
      "createdAt": "<Date>",
      "updatedAt": "<Date>",
      "isArchived": "<boolean>",
      "subject": "<string>",
      "content": "<string>",
      "objectId": "<number>",
      "ownerId": "<number>",
      "pipeline": "<number>",
      "pipelineStage": "<number>",
      "ticketCategory": "<string | null>",
      "ticketPriority": "<string>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-service-tickets.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-service-tickets.md)

<!-- END  GENERATED CONTENT -->

