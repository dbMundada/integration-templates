<!-- BEGIN GENERATED CONTENT -->
# Fetch Contacts

## General Information

- **Description:** Fetch contacts from HubSpot
- **Version:** 1.0.0
- **Group:** Contacts
- **Scopes:** `crm.objects.contacts.read, oauth`
- **Endpoint Type:** Action
- **Model:** `ActionOutput_hubspot_fetchcontacts`
- **Input Model:** `ActionInput_hubspot_fetchcontacts`
- **Code:** [github.com](https://github.com/NangoHQ/integration-templates/tree/main/integrations/hubspot/actions/fetch-contacts.ts)


## Endpoint Reference

### Request Endpoint

`GET /contacts`

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
  "contacts": [
    {
      "id": "<string>",
      "created_date": "<string>",
      "first_name": "<string | null>",
      "last_name": "<string | null>",
      "email": "<string | null>",
      "job_title": "<string | null>",
      "last_contacted": "<string | null>",
      "last_activity_date": "<string | null>",
      "lead_status": "<string | null>",
      "lifecycle_stage": "<string | null>",
      "salutation": "<string | null>",
      "mobile_phone_number": "<string | null>",
      "website_url": "<string | null>",
      "owner": "<string | null>"
    }
  ]
}
```

## Changelog

- [Script History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-contacts.ts)
- [Documentation History](https://github.com/NangoHQ/integration-templates/commits/main/integrations/hubspot/actions/fetch-contacts.md)

<!-- END  GENERATED CONTENT -->

