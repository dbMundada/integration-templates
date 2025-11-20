<!-- BEGIN GENERATED CONTENT -->
# Fetch Currency Codes

## General Information

- **Description:** Fetch currency codes from HubSpot
- **Version:** 1.0.0
- **Group:** Settings
- **Scopes:** `oauth, settings.currencies.read`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchcurrencycodes`
- **Input Model:** `ActionInput_hubspot_fetchcurrencycodes`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-currency-codes.ts)


## Endpoint Reference

### Request Endpoint

`GET /currency-codes`

### Request Query Parameters

_No request parameters_

### Request Body

```json
"<null>"
```

### Request Response

```json
{
  "currencyCodes": [
    {
      "id": "<string>",
      "code": "<string>",
      "description": "<string>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-currency-codes.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-currency-codes.md)

<!-- END  GENERATED CONTENT -->

