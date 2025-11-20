<!-- BEGIN GENERATED CONTENT -->
# Fetch Deals

## General Information

- **Description:** Fetch deals from HubSpot
- **Version:** 1.0.0
- **Group:** Deals
- **Scopes:** `crm.objects.deals.read, oauth`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchdeals`
- **Input Model:** `ActionInput_hubspot_fetchdeals`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-deals.ts)


## Endpoint Reference

### Request Endpoint

`GET /deals`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "limit?": "<number>",
  "properties?": "<string[]>",
  "includeAssociations?": "<boolean>"
}
```

### Request Response

```json
{
  "deals": [
    {
      "id": "<string>",
      "name": "<string | null>",
      "amount": "<string | null>",
      "close_date": "<string | null>",
      "deal_description": "<string | null>",
      "owner": "<string | null>",
      "deal_stage": "<string | null>",
      "deal_probability": "<string | null>",
      "returned_associations?": {
        "companies?": [
          {
            "id": "<string>",
            "name": "<string | null>"
          }
        ],
        "contacts?": [
          {
            "id": "<string>",
            "first_name": "<string | null>",
            "last_name": "<string | null>"
          }
        ],
        "deals?": [
          {
            "id": "<string>",
            "name": "<string | null>"
          }
        ]
      }
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-deals.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-deals.md)

<!-- END  GENERATED CONTENT -->

