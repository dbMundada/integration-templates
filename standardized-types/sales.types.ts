/**
 * Standardized Sales Entity Types
 *
 * This file defines standard interfaces for Sales entities across different providers
 * like Salesforce, HubSpot, Pipedrive, Close, etc.
 *
 * Note: Many sales entities overlap with CRM entities, but this focuses on
 * sales-specific functionality like forecasting, quotas, territories, etc.
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

// Sales Specific Types
export type OpportunityStage =
    | 'PROSPECTING'
    | 'QUALIFICATION'
    | 'NEEDS_ANALYSIS'
    | 'VALUE_PROPOSITION'
    | 'PROPOSAL'
    | 'NEGOTIATION'
    | 'CLOSED_WON'
    | 'CLOSED_LOST';

export type OpportunityType = 'NEW_BUSINESS' | 'EXISTING_CUSTOMER_UPGRADE' | 'EXISTING_CUSTOMER_REPLACEMENT' | 'EXISTING_CUSTOMER_DOWNGRADE';

export type LeadSource =
    | 'WEB'
    | 'PHONE_INQUIRY'
    | 'PARTNER_REFERRAL'
    | 'PURCHASED_LIST'
    | 'OTHER'
    | 'ADVERTISEMENT'
    | 'EMPLOYEE_REFERRAL'
    | 'EXTERNAL_REFERRAL'
    | 'ONLINE_STORE'
    | 'SEMINAR_INTERNAL'
    | 'TRADE_SHOW'
    | 'WEB_DOWNLOAD'
    | 'WEB_SEARCH';

export type ActivityType = 'CALL' | 'EMAIL' | 'MEETING' | 'TASK' | 'DEMO' | 'PROPOSAL_SENT' | 'FOLLOW_UP';

export type ForecastCategory = 'OMITTED' | 'PIPELINE' | 'BEST_CASE' | 'COMMIT' | 'CLOSED';

export type QuotaType = 'REVENUE' | 'QUANTITY' | 'ACTIVITY';

export type TerritoryType = 'GEOGRAPHIC' | 'ACCOUNT_BASED' | 'INDUSTRY' | 'PRODUCT';

// Standard Sales Entities
export interface StandardOpportunity extends StandardBaseEntity {
    name: string;

    financial: {
        amount?: number;
        currency: string;
        probability?: number; // 0-100 percentage
        expectedRevenue?: number; // amount * probability
    };

    stage: {
        current: OpportunityStage;
        stageHistory?: StageHistoryEntry[];
    };

    timeline: {
        expectedCloseDate: string;
        actualCloseDate?: string;
        createdDate: string;
        lastActivityDate?: string;
        daysSinceCreated?: number;
        daysToClose?: number;
    };

    account: {
        id: string;
        name: string;
        website?: string;
        industry?: string;
    };

    contact: {
        primaryContactId?: string;
        primaryContactName?: string;
        decisionMaker?: boolean;
        influencers?: ContactRole[];
    };

    ownership: {
        ownerId: string;
        ownerName: string;
        teamId?: string;
        territoryId?: string;
    };

    classification: {
        type?: OpportunityType;
        source?: LeadSource;
        campaign?: {
            id: string;
            name: string;
        };
    };

    forecasting: {
        category?: ForecastCategory;
        commitDate?: string;
        forecastAmount?: number;
    };

    competition: {
        competitors?: string[];
        competitivePosition?: string;
    };

    products: ProductLineItem[];

    description?: string;
    nextSteps?: string;

    customFields?: Record<string, any>;
}

export interface StageHistoryEntry {
    stage: OpportunityStage;
    enteredAt: string;
    exitedAt?: string;
    durationDays?: number;
    probability?: number;
    amount?: number;
}

export interface ContactRole {
    contactId: string;
    contactName: string;
    role: 'DECISION_MAKER' | 'INFLUENCER' | 'USER' | 'GATEKEEPER' | 'CHAMPION';
    isPrimary: boolean;
}

export interface ProductLineItem {
    id?: string;
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    discount?: number;
    description?: string;
}

export interface StandardLead extends StandardBaseEntity {
    firstName?: string;
    lastName: string;
    company: string;
    title?: string;

    contact: {
        email?: string;
        phone?: string;
        website?: string;
        addresses: StandardAddress[];
    };

    qualification: {
        status: 'UNQUALIFIED' | 'WORKING' | 'NURTURING' | 'QUALIFIED' | 'DISQUALIFIED';
        score?: number; // lead scoring
        rating?: 'HOT' | 'WARM' | 'COLD';
    };

    source: {
        leadSource?: LeadSource;
        campaign?: {
            id: string;
            name: string;
        };
        referrer?: string;
    };

    ownership: {
        ownerId?: string;
        ownerName?: string;
        isConverted?: boolean;
        convertedDate?: string;
        convertedAccountId?: string;
        convertedContactId?: string;
        convertedOpportunityId?: string;
    };

    industry?: string;
    annualRevenue?: number;
    employeeCount?: number;

    customFields?: Record<string, any>;
}

export interface StandardActivity extends StandardBaseEntity {
    subject: string;
    description?: string;
    type: ActivityType;

    scheduling: {
        scheduledAt?: string;
        completedAt?: string;
        durationMinutes?: number;
        isCompleted: boolean;
    };

    participants: {
        ownerId: string;
        ownerName: string;
        attendees?: Attendee[];
    };

    associations: {
        accountId?: string;
        contactIds: string[];
        opportunityId?: string;
        leadId?: string;
    };

    outcome: {
        status?: 'COMPLETED' | 'NO_SHOW' | 'RESCHEDULED' | 'CANCELLED';
        result?: string;
        nextSteps?: string;
    };

    location?: string;

    customFields?: Record<string, any>;
}

export interface Attendee {
    id: string;
    name: string;
    email: string;
    type: 'INTERNAL' | 'EXTERNAL';
    status?: 'INVITED' | 'ACCEPTED' | 'DECLINED' | 'TENTATIVE';
}

export interface StandardQuota extends StandardBaseEntity {
    name: string;
    type: QuotaType;

    target: {
        amount: number;
        currency?: string; // for revenue quotas
        unit?: string; // for quantity quotas
    };

    period: {
        startDate: string;
        endDate: string;
        fiscalPeriod?: string; // Q1, Q2, etc.
        fiscalYear?: number;
    };

    assignee: {
        userId: string;
        userName: string;
        role?: string;
    };

    progress: {
        achieved: number;
        percentage: number;
        lastUpdated: string;
    };

    isActive: boolean;

    customFields?: Record<string, any>;
}

export interface StandardTerritory extends StandardBaseEntity {
    name: string;
    type: TerritoryType;
    description?: string;

    assignment: {
        managerId?: string;
        managerName?: string;
        memberIds: string[];
    };

    rules: {
        criteria: TerritoryCriteria[];
        priority?: number; // for overlapping territories
    };

    isActive: boolean;

    customFields?: Record<string, any>;
}

export interface TerritoryCriteria {
    field: string; // e.g., 'account.state', 'account.industry'
    operator: 'EQUALS' | 'CONTAINS' | 'STARTS_WITH' | 'IN' | 'GREATER_THAN' | 'LESS_THAN';
    values: string[];
}

export interface StandardForecast extends StandardBaseEntity {
    name?: string;

    period: {
        startDate: string;
        endDate: string;
        type: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL';
    };

    owner: {
        userId: string;
        userName: string;
        role?: string;
    };

    categories: {
        [key in ForecastCategory]?: {
            amount: number;
            currency: string;
            opportunityCount: number;
        };
    };

    metrics: {
        totalPipelineAmount: number;
        weightedPipelineAmount: number;
        closedWonAmount: number;
        winRate?: number; // percentage
    };

    lastUpdated: string;

    customFields?: Record<string, any>;
}

// Input/Update Types
export interface CreateOpportunityInput {
    name: string;
    accountId: string;
    stage: OpportunityStage;
    expectedCloseDate: string;
    amount?: number;
    currency?: string;
    probability?: number;
    ownerId?: string;
    type?: OpportunityType;
    source?: LeadSource;
    description?: string;
    customFields?: Record<string, any>;
}

export interface UpdateOpportunityInput extends Partial<CreateOpportunityInput> {
    id: string;
}

export interface CreateLeadInput {
    firstName?: string;
    lastName: string;
    company: string;
    email?: string;
    phone?: string;
    source?: LeadSource;
    ownerId?: string;
    customFields?: Record<string, any>;
}

export interface UpdateLeadInput extends Partial<CreateLeadInput> {
    id: string;
}

export interface CreateActivityInput {
    subject: string;
    type: ActivityType;
    scheduledAt?: string;
    ownerId: string;
    accountId?: string;
    contactIds?: string[];
    opportunityId?: string;
    description?: string;
    customFields?: Record<string, any>;
}

export interface UpdateActivityInput extends Partial<CreateActivityInput> {
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
