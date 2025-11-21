/**
 * Standardized CRM Entity Types
 *
 * This file defines standard interfaces for CRM entities across different providers
 * like HubSpot, Salesforce, Pipedrive, etc.
 */

// Base interfaces
interface StandardBaseEntity {
    id: string;
    createdAt: string;
    updatedAt: string;
    providerSpecific?: Record<string, any>;
}

interface StandardAddress {
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    type?: 'BILLING' | 'SHIPPING' | 'MAILING' | 'OTHER';
}

interface StandardPhone {
    number: string;
    type?: 'MOBILE' | 'WORK' | 'HOME' | 'FAX' | 'OTHER';
}

interface StandardEmail {
    email: string;
    type?: 'WORK' | 'PERSONAL' | 'OTHER';
    isPrimary?: boolean;
}

// CRM Specific Types
export type ContactLifecycleStage =
    | 'SUBSCRIBER'
    | 'LEAD'
    | 'MARKETING_QUALIFIED_LEAD'
    | 'SALES_QUALIFIED_LEAD'
    | 'OPPORTUNITY'
    | 'CUSTOMER'
    | 'EVANGELIST'
    | 'OTHER';

export type ContactStatus = 'LEAD' | 'PROSPECT' | 'CUSTOMER' | 'QUALIFIED' | 'UNQUALIFIED' | 'OPEN' | 'CONTACTED';

export type DealStage = 'QUALIFICATION' | 'NEEDS_ANALYSIS' | 'PROPOSAL' | 'NEGOTIATION' | 'CLOSED_WON' | 'CLOSED_LOST';

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export type TaskType = 'CALL' | 'EMAIL' | 'TODO' | 'MEETING' | 'FOLLOW_UP';

// Standard CRM Entities
export interface StandardContact extends StandardBaseEntity {
    firstName?: string;
    lastName: string;
    fullName?: string;
    email?: string;
    phones: StandardPhone[];
    addresses: StandardAddress[];
    companyId?: string;
    companyName?: string;
    ownerId?: string;
    ownerName?: string;
    title?: string;
    department?: string;
    lifecycleStage?: ContactLifecycleStage;
    leadStatus?: ContactStatus;
    source?: string;
    website?: string;
    notes?: string;
    lastContactedAt?: string;
    customFields?: Record<string, any>;
}

export interface StandardCompany extends StandardBaseEntity {
    name: string;
    description?: string;
    industry?: string;
    website?: string;
    foundedYear?: number;
    employeeCount?: number;
    annualRevenue?: number;
    ownerId?: string;
    ownerName?: string;
    addresses: StandardAddress[];
    phones: StandardPhone[];
    lifecycleStage?: ContactLifecycleStage;
    leadStatus?: ContactStatus;
    customFields?: Record<string, any>;
}

export interface StandardDeal extends StandardBaseEntity {
    name: string;
    amount?: number;
    currency: string;
    stage: DealStage;
    probability?: number;
    expectedCloseDate?: string;
    actualCloseDate?: string;
    accountId?: string;
    accountName?: string;
    contactIds: string[];
    ownerId?: string;
    ownerName?: string;
    pipelineId?: string;
    pipelineName?: string;
    description?: string;
    type?: string;
    source?: string;
    customFields?: Record<string, any>;
}

export interface StandardTask extends StandardBaseEntity {
    subject: string;
    description?: string;
    type: TaskType;
    priority?: Priority;
    status: 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
    dueDate?: string;
    completedAt?: string;
    ownerId?: string;
    ownerName?: string;
    associatedContactIds: string[];
    associatedCompanyIds: string[];
    associatedDealIds: string[];
    reminderDate?: string;
    customFields?: Record<string, any>;
}

export interface StandardNote extends StandardBaseEntity {
    title?: string;
    content: string;
    ownerId?: string;
    ownerName?: string;
    associatedContactIds: string[];
    associatedCompanyIds: string[];
    associatedDealIds: string[];
    attachmentIds: string[];
    customFields?: Record<string, any>;
}

export interface StandardUser extends StandardBaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
    role?: string;
    teamId?: string;
    teamName?: string;
    permissions: string[];
    customFields?: Record<string, any>;
}

export interface StandardPipeline extends StandardBaseEntity {
    name: string;
    isDefault: boolean;
    stages: StandardPipelineStage[];
    customFields?: Record<string, any>;
}

export interface StandardPipelineStage extends StandardBaseEntity {
    name: string;
    probability?: number;
    displayOrder: number;
    isClosedWon: boolean;
    isClosedLost: boolean;
    customFields?: Record<string, any>;
}

export interface StandardProduct extends StandardBaseEntity {
    name: string;
    description?: string;
    price?: number;
    currency: string;
    sku?: string;
    category?: string;
    isActive: boolean;
    customFields?: Record<string, any>;
}

// Input/Update Types
export interface CreateContactInput {
    firstName?: string;
    lastName: string;
    email?: string;
    phones?: StandardPhone[];
    addresses?: StandardAddress[];
    companyId?: string;
    ownerId?: string;
    title?: string;
    lifecycleStage?: ContactLifecycleStage;
    leadStatus?: ContactStatus;
    source?: string;
    customFields?: Record<string, any>;
}

export interface UpdateContactInput extends Partial<CreateContactInput> {
    id: string;
}

export interface CreateCompanyInput {
    name: string;
    description?: string;
    industry?: string;
    website?: string;
    ownerId?: string;
    addresses?: StandardAddress[];
    phones?: StandardPhone[];
    customFields?: Record<string, any>;
}

export interface UpdateCompanyInput extends Partial<CreateCompanyInput> {
    id: string;
}

export interface CreateDealInput {
    name: string;
    amount?: number;
    currency?: string;
    stage: DealStage;
    expectedCloseDate?: string;
    accountId?: string;
    contactIds?: string[];
    ownerId?: string;
    pipelineId?: string;
    description?: string;
    customFields?: Record<string, any>;
}

export interface UpdateDealInput extends Partial<CreateDealInput> {
    id: string;
}

// Standard responses
export interface StandardActionResponse {
    id: string;
    success: boolean;
    errors: string[];
}

export interface StandardBatchResponse<T> {
    successful: T[];
    failed: Array<{
        record: Partial<T>;
        errors: string[];
    }>;
}
