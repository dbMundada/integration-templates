<!-- BEGIN GENERATED CONTENT -->
# Fetch Companies

## General Information

- **Description:** Fetch companies from HubSpot
- **Version:** 1.0.0
- **Group:** Companies
- **Scopes:** `crm.objects.companies.read, oauth`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchcompanies`
- **Input Model:** `ActionInput_hubspot_fetchcompanies`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-companies.ts)


## Endpoint Reference

### Request Endpoint

`GET /companies`

### Request Query Parameters

_No request parameters_

### Request Body

```json
{
  "limit?": "<number>",
  "properties?": "<string[]>"
}
```

### Request Response

```json
{
  "companies": [
    {
      "id": "<string>",
      "created_date": "<string | null>",
      "name": "<string | null>",
      "industry": "<string | null>",
      "description": "<string | null>",
      "country": "<string | null>",
      "city": "<string | null>",
      "lead_status": "<string | null>",
      "lifecycle_stage": "<string | null>",
      "owner": "<string | null>",
      "year_founded": "<string | null>",
      "website_url": "<string | null>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-companies.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-companies.md)

<!-- END  GENERATED CONTENT -->

