/**
 * Standardized Entity Types Index
 *
 * This file provides a consolidated export of all standardized entity types
 * and serves as documentation for the standardization approach.
 */

// Export all standardized types by category
export * as CRM from './crm.types';
export * as HRIS from './hris.types';
export * as Marketing from './marketing.types';
export * as Accounting from './accounting.types';
export * as Support from './support.types';
export * as Sales from './sales.types';
export * as Communication from './communication.types';

/**
 * PROVIDER CATEGORY MAPPING
 *
 * This maps individual providers to their primary and secondary categories
 * based on the analysis of providers.yaml and integration templates.
 */

export const PROVIDER_CATEGORIES = {
    // CRM Providers
    CRM: ['hubspot', 'salesforce', 'pipedrive', 'close', 'affinity', 'affinity-v2', 'attio', 'copper', 'copper-api-key', 'blackbaud', 'blackbaud-basic'],

    // HR/HRIS Providers
    HRIS: ['bamboohr', 'bamboohr-basic', 'workday', 'gusto', 'adp', 'deel', 'bullhorn', 'dayforce', 'breezy-hr'],

    // ATS/Recruiting Providers (subset of HRIS)
    ATS: ['ashby', 'greenhouse', 'lever', 'workable'],

    // Marketing Providers
    MARKETING: ['hubspot', 'active-campaign', 'mailchimp', 'brevo-api-key', 'apollo', 'apollo-oauth', 'beehiiv', 'callrail', 'clari-copilot'],

    // Accounting Providers
    ACCOUNTING: ['quickbooks', 'xero', 'buildium', 'checkhq', 'avalara', 'avalara-sandbox'],

    // Payment Providers (subset of Accounting)
    PAYMENT: ['stripe', 'bill', 'bill-sandbox', 'chargebee', 'braintree', 'brex', 'checkout-com', 'checkout-com-sandbox', 'adyen'],

    // Support/Ticketing Providers
    SUPPORT: ['zendesk', 'intercom', 'freshdesk', 'atlas-so', 'canny', 'crisp', 'dixa', 'helpscout', 'linear', 'aircall'],

    // Sales Providers (overlaps with CRM)
    SALES: ['salesforce', 'hubspot', 'pipedrive', 'close', 'outreach'],

    // Communication Providers
    COMMUNICATION: ['slack', 'discord', 'microsoft-teams', 'twilio', 'sendgrid', 'clicksend', 'braze', 'dialpad', 'dialpad-sandbox', 'circle-so']
} as const;

/**
 * STANDARDIZATION PRINCIPLES
 *
 * The standardized types follow these key principles:
 */

export const STANDARDIZATION_PRINCIPLES = {
    /**
     * 1. BASE ENTITY STRUCTURE
     * All entities inherit from StandardBaseEntity with common fields:
     * - id: Unique identifier
     * - createdAt: Creation timestamp
     * - updatedAt: Last modification timestamp
     * - providerSpecific: Provider-specific fields that don't fit standard schema
     */
    baseEntity: {
        requiredFields: ['id', 'createdAt', 'updatedAt'],
        extensionField: 'providerSpecific'
    },

    /**
     * 2. COMMON SUB-STRUCTURES
     * Standardized address, phone, email structures used across categories
     */
    commonStructures: ['StandardAddress', 'StandardPhone', 'StandardEmail'],

    /**
     * 3. STATUS AND LIFECYCLE ENUMS
     * Consistent status values across similar entities
     */
    statusPatterns: {
        general: ['ACTIVE', 'INACTIVE', 'PENDING', 'CANCELLED'],
        employment: ['ACTIVE', 'TERMINATED', 'ON_LEAVE', 'SUSPENDED', 'PENDING'],
        tickets: ['NEW', 'OPEN', 'PENDING', 'RESOLVED', 'CLOSED'],
        transactions: ['DRAFT', 'PENDING', 'SENT', 'PAID', 'CANCELLED']
    },

    /**
     * 4. RELATIONSHIP HANDLING
     * Foreign key references with optional denormalized names for convenience
     */
    relationshipPattern: {
        keyField: 'entityId',
        nameField: 'entityName' // optional denormalized field
    },

    /**
     * 5. EXTENSIBILITY
     * All entities support custom fields via customFields object
     */
    extensibility: {
        customFieldsField: 'customFields',
        providerSpecificField: 'providerSpecific'
    },

    /**
     * 6. INPUT/OUTPUT SEPARATION
     * Separate types for create/update operations vs. read operations
     */
    operationTypes: {
        read: 'StandardEntity',
        create: 'CreateEntityInput',
        update: 'UpdateEntityInput',
        response: 'StandardActionResponse'
    }
};

/**
 * USAGE PATTERNS
 *
 * How to use these standardized types in integrations:
 */

export const USAGE_PATTERNS = {
    /**
     * 1. MAPPER FUNCTIONS
     * Transform provider-specific data to/from standard format
     *
     * Example:
     * ```typescript
     * function toStandardContact(hubspotContact: HubSpotContact): CRM.StandardContact {
     *   return {
     *     id: hubspotContact.id,
     *     firstName: hubspotContact.properties.firstname,
     *     lastName: hubspotContact.properties.lastname,
     *     // ... other mappings
     *     providerSpecific: {
     *       hubspot: hubspotContact.properties // preserve all original data
     *     }
     *   };
     * }
     * ```
     */
    mappers: 'Transform between provider and standard formats',

    /**
     * 2. ACTION IMPLEMENTATIONS
     * Use standard input types for consistent API surface
     *
     * Example:
     * ```typescript
     * export async function createContact(
     *   nango: NangoSync,
     *   input: CRM.CreateContactInput
     * ): Promise<CRM.StandardActionResponse> {
     *   // Implementation specific to each provider
     * }
     * ```
     */
    actions: 'Consistent input/output types across providers',

    /**
     * 3. SYNC IMPLEMENTATIONS
     * Return standard entity arrays from sync endpoints
     *
     * Example:
     * ```typescript
     * export async function contacts(nango: NangoSync): Promise<CRM.StandardContact[]> {
     *   // Provider-specific fetching logic
     *   // Map to standard format before returning
     * }
     * ```
     */
    syncs: 'Standard output format for data synchronization',

    /**
     * 4. MULTI-PROVIDER SUPPORT
     * Same integration code works across different providers
     */
    multiProvider: 'Write once, support multiple providers'
};

/**
 * CATEGORY-SPECIFIC NOTES
 */

export const CATEGORY_NOTES = {
    CRM: {
        mature: true,
        commonEntities: ['Contact', 'Company', 'Deal', 'Task', 'Note'],
        keyFeatures: ['Lifecycle stages', 'Pipeline management', 'Activity tracking']
    },

    HRIS: {
        mature: true, // Already has StandardEmployee across providers
        commonEntities: ['Employee', 'Department', 'Location', 'Job'],
        keyFeatures: ['Employment status', 'Organizational hierarchy', 'Work locations']
    },

    Marketing: {
        mature: false, // Limited provider coverage (mainly HubSpot)
        commonEntities: ['Contact', 'List', 'Campaign', 'Automation'],
        keyFeatures: ['Engagement tracking', 'Segmentation', 'Email automation']
    },

    Accounting: {
        mature: true,
        commonEntities: ['Contact', 'Invoice', 'Payment', 'Item', 'Account'],
        keyFeatures: ['Financial transactions', 'Tax handling', 'Multi-currency']
    },

    Support: {
        mature: true,
        commonEntities: ['Ticket', 'User', 'Message', 'Article'],
        keyFeatures: ['Multi-channel support', 'SLA tracking', 'Knowledge base']
    },

    Sales: {
        mature: true,
        commonEntities: ['Opportunity', 'Lead', 'Activity', 'Quota', 'Forecast'],
        keyFeatures: ['Pipeline management', 'Forecasting', 'Territory management']
    },

    Communication: {
        mature: true,
        commonEntities: ['User', 'Channel', 'Message', 'Email', 'SMS'],
        keyFeatures: ['Real-time messaging', 'Multi-channel delivery', 'Rich content']
    }
};

// Type utility for getting all standard entities by category
export type StandardEntitiesByCategory = {
    CRM: string;
    HRIS: string;
    Marketing: string;
    Accounting: string;
    Support: string;
    Sales: string;
    Communication: string;
};
