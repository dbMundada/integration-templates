<!-- BEGIN GENERATED CONTENT -->
# Fetch Owners

## General Information

- **Description:** Fetch owners from HubSpot
- **Version:** 1.0.0
- **Group:** Owners
- **Scopes:** `oauth`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchowners`
- **Input Model:** `ActionInput_hubspot_fetchowners`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-owners.ts)


## Endpoint Reference

### Request Endpoint

`GET /owners`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "limit?": "<number>"
}
```

### Request Response

```json
{
  "owners": [
    {
      "id": "<string>",
      "email": "<string>",
      "firstName": "<string>",
      "lastName": "<string>",
      "userId": "<number>",
      "createdAt": "<Date>",
      "updatedAt": "<Date>",
      "archived": "<boolean>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-owners.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-owners.md)

<!-- END  GENERATED CONTENT -->

