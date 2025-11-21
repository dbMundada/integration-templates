# Provider Entity Standardization

This document outlines the standardized entity types created for different business categories of providers in the Nango integration ecosystem.

## Overview

After analyzing 200+ providers across various business categories, we've identified common entity patterns and created standardized TypeScript interfaces for each major category. This enables:

- **Consistent API surface** across different providers within the same category
- **Easier multi-provider support** - write integration code once, support multiple providers
- **Better developer experience** with predictable entity structures
- **Extensibility** while maintaining provider-specific functionality

## Categories and Standardized Types

### 1. CRM (`crm.types.ts`)

**Providers**: HubSpot, Salesforce, Pipedrive, Close, Affinity, Attio, Copper, etc.

**Core Entities**:
- `StandardContact` - People records with lifecycle stages, lead status
- `StandardCompany` - Business accounts with industry, location details
- `StandardDeal` - Sales opportunities with stages, amounts, probabilities
- `StandardTask` - Activities and follow-ups with assignments
- `StandardNote` - Communication history and relationship notes
- `StandardUser` - Team members with roles and permissions
- `StandardPipeline` - Sales process workflows with stages

**Key Features**:
- Lifecycle stage management (Lead → MQL → SQL → Customer)
- Pipeline and stage progression tracking
- Owner/assignment relationships
- Custom field support

### 2. HRIS (`hris.types.ts`)

**Providers**: BambooHR, Workday, Gusto, ADP, Greenhouse, Lever, Ashby, etc.

**Core Entities**:
- `StandardEmployee` - Central employee records (already mature across providers)
- `StandardDepartment` - Organizational hierarchy
- `StandardLocation` - Office/remote work locations
- `StandardJob` - Job postings and role definitions
- `StandardCandidate` - Talent pipeline management
- `StandardApplication` - Recruitment process tracking
- `StandardInterview` - Interview scheduling and feedback

**Key Features**:
- Employment status lifecycle (Active → Terminated, etc.)
- Organizational hierarchy with departments/managers
- Work location types (Office/Remote/Hybrid)
- Comprehensive personal/contact information

### 3. Marketing (`marketing.types.ts`)

**Providers**: HubSpot, ActiveCampaign, Mailchimp, Brevo, Apollo, etc.

**Core Entities**:
- `StandardContact` - Marketing contacts with engagement tracking
- `StandardList` - Contact segmentation and smart lists
- `StandardCampaign` - Email/SMS campaigns with analytics
- `StandardAutomation` - Marketing workflow automation
- `StandardTemplate` - Reusable content templates
- `StandardEmailActivity` - Detailed engagement tracking

**Key Features**:
- Engagement scoring and activity tracking
- List segmentation with dynamic criteria
- Campaign analytics (opens, clicks, conversions)
- Automation workflows with triggers and conditions

### 4. Accounting (`accounting.types.ts`)

**Providers**: QuickBooks, Xero, Stripe, Bill, Chargebee, etc.

**Core Entities**:
- `StandardContact` - Customers/vendors with financial details
- `StandardAccount` - Chart of accounts structure
- `StandardInvoice` - Billing documents with line items
- `StandardPayment` - Transaction records and allocations
- `StandardItem` - Product/service catalog
- `StandardBill` - Payable invoices from vendors
- `StandardJournalEntry` - Manual accounting adjustments

**Key Features**:
- Multi-currency support
- Tax handling (VAT, Sales Tax, GST)
- Payment method flexibility
- Financial account categorization

### 5. Support (`support.types.ts`)

**Providers**: Zendesk, Intercom, Freshdesk, Aircall, etc.

**Core Entities**:
- `StandardTicket` - Support cases with SLA tracking
- `StandardUser` - End users, agents, and administrators
- `StandardOrganization` - Customer organizations
- `StandardConversation` - Multi-channel communication threads
- `StandardMessage` - Individual communications
- `StandardArticle` - Knowledge base content
- `StandardMacro` - Automated response templates

**Key Features**:
- Multi-channel support (email, chat, phone, social)
- SLA and response time tracking
- Escalation and priority management
- Knowledge base integration

### 6. Sales (`sales.types.ts`)

**Providers**: Salesforce, HubSpot, Pipedrive, Close, Outreach, etc.

**Core Entities**:
- `StandardOpportunity` - Advanced deal management with forecasting
- `StandardLead` - Lead qualification and scoring
- `StandardActivity` - Sales activities with outcome tracking
- `StandardQuota` - Sales targets and achievement tracking
- `StandardTerritory` - Geographic/account territory management
- `StandardForecast` - Revenue forecasting and pipeline analysis

**Key Features**:
- Advanced forecasting capabilities
- Territory and quota management
- Sales activity outcome tracking
- Competitive intelligence integration

### 7. Communication (`communication.types.ts`)

**Providers**: Slack, Discord, Teams, Twilio, SendGrid, etc.

**Core Entities**:
- `StandardUser` - Communication platform users
- `StandardChannel` - Channels, rooms, or conversation spaces
- `StandardMessage` - Rich messages with threading and reactions
- `StandardWorkspace` - Team/organization containers
- `StandardEmail` - Email delivery with tracking
- `StandardSms` - SMS messaging with status tracking
- `StandardCall` - Voice call management

**Key Features**:
- Real-time messaging with threading
- Rich content and attachment support
- Multi-channel delivery (email, SMS, push)
- Presence and status management

## Standardization Principles

### 1. Base Entity Structure

All entities extend `StandardBaseEntity`:
```typescript
interface StandardBaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
  providerSpecific?: Record<string, any>;
}
```

### 2. Common Sub-Structures

Reusable interfaces across categories:
- `StandardAddress` - Physical addresses with type classification
- `StandardPhone` - Phone numbers with type and priority
- `StandardEmail` - Email addresses with type and verification status

### 3. Consistent Status Enums

Standardized status values:
- Employment: `ACTIVE | TERMINATED | ON_LEAVE | SUSPENDED | PENDING`
- Tickets: `NEW | OPEN | PENDING | RESOLVED | CLOSED`  
- Transactions: `DRAFT | PENDING | SENT | PAID | CANCELLED`

### 4. Relationship Handling

Foreign keys with optional denormalized names:
```typescript
{
  ownerId: string;     // Required foreign key
  ownerName?: string;  // Optional denormalized field
}
```

### 5. Extensibility

Two mechanisms for provider-specific data:
- `customFields?: Record<string, any>` - User-defined custom fields
- `providerSpecific?: Record<string, any>` - Provider-specific data preservation

### 6. Input/Output Separation

Separate types for different operations:
- `StandardEntity` - Read operations
- `CreateEntityInput` - Create operations
- `UpdateEntityInput` - Update operations  
- `StandardActionResponse` - Operation responses

## Implementation Patterns

### Mapper Functions

Transform between provider and standard formats:

```typescript
function toStandardContact(hubspotContact: HubSpotContact): CRM.StandardContact {
  return {
    id: hubspotContact.id,
    firstName: hubspotContact.properties.firstname,
    lastName: hubspotContact.properties.lastname,
    email: hubspotContact.properties.email,
    // ... other field mappings
    providerSpecific: {
      hubspot: hubspotContact.properties // preserve original data
    },
    createdAt: hubspotContact.createdAt,
    updatedAt: hubspotContact.updatedAt
  };
}
```

### Action Implementations

Consistent API surface across providers:

```typescript
export async function createContact(
  nango: NangoSync,
  input: CRM.CreateContactInput
): Promise<CRM.StandardActionResponse> {
  // Provider-specific implementation
  const providerContact = toProviderContact(input);
  const result = await nango.post('/contacts', providerContact);
  
  return {
    id: result.id,
    success: true,
    errors: []
  };
}
```

### Sync Implementations

Standard output format for data synchronization:

```typescript
export async function contacts(nango: NangoSync): Promise<CRM.StandardContact[]> {
  const providerContacts = await fetchProviderContacts(nango);
  return providerContacts.map(toStandardContact);
}
```

## Provider Category Mapping

See `PROVIDER_CATEGORIES` in `index.types.ts` for the complete mapping of providers to their primary and secondary categories.

Many providers span multiple categories:
- **HubSpot**: CRM + Marketing + Sales
- **Salesforce**: CRM + Sales + Support
- **Stripe**: Accounting + Payment
- **Intercom**: Support + Communication

## Migration Guide

### For Existing Integrations

1. **Analyze current entity structure** - Compare with standardized types
2. **Create mapper functions** - Transform to/from standard format
3. **Update action signatures** - Use standard input/output types
4. **Preserve provider-specific data** - Use `providerSpecific` field
5. **Test thoroughly** - Ensure no data loss in transformation

### For New Integrations

1. **Choose appropriate category** - Based on provider's primary function
2. **Implement standard entities** - Use standardized types as base
3. **Add provider-specific extensions** - Via `providerSpecific` field
4. **Follow naming conventions** - Use standard field names where possible

## Benefits

### For Developers
- **Predictable APIs** across providers in the same category
- **Reduced learning curve** when working with multiple providers
- **Better IDE support** with consistent TypeScript interfaces
- **Easier testing** with standardized mock data

### For Users  
- **Consistent integration experience** regardless of provider
- **Easier provider switching** with minimal code changes
- **Better data portability** between similar providers
- **Unified dashboards** showing data from multiple providers

### for Platform
- **Reduced maintenance burden** with common patterns
- **Faster integration development** with reusable components
- **Better quality** through standardized validation
- **Improved documentation** with consistent entity definitions

## Future Roadmap

1. **Expand provider coverage** - Add more providers to each category
2. **Refine entity models** - Based on real-world usage feedback
3. **Add validation schemas** - Zod schemas for runtime validation
4. **Create utility libraries** - Helper functions for common operations
5. **Develop testing framework** - Standardized test suites for integrations
6. **Build visualization tools** - Entity relationship diagrams and documentation generators