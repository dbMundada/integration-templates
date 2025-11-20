<!-- BEGIN GENERATED CONTENT -->
# Fetch Products

## General Information

- **Description:** Fetch products from HubSpot
- **Version:** 1.0.0
- **Group:** Products
- **Scopes:** `e-commerce`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchproducts`
- **Input Model:** `ActionInput_hubspot_fetchproducts`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-products.ts)


## Endpoint Reference

### Request Endpoint

`GET /products`

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
  "products": [
    {
      "updatedAt": "<string>",
      "createdAt": "<string>",
      "id": "<string>",
      "amount": "<number | null>",
      "description": "<string | null>",
      "discount": "<number | null>",
      "sku": "<string | null>",
      "url": "<string | null>",
      "name": "<string>",
      "price": "<string>",
      "quantity": "<number | null>",
      "recurringBillingFrequency": "<number | null>",
      "tax": "<null | number>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-products.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-products.md)

<!-- END  GENERATED CONTENT -->

