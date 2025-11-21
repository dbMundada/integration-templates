/**
 * Standardized Marketing Entity Types
 *
 * This file defines standard interfaces for Marketing entities across different providers
 * like HubSpot, Mailchimp, ActiveCampaign, Brevo, Apollo, etc.
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
    type?: 'MOBILE' | 'WORK' | 'HOME' | 'OTHER';
    isPrimary?: boolean;
}

// Marketing Specific Types
export type ContactStatus = 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'CLEANED' | 'PENDING' | 'TRANSACTIONAL';

export type LifecycleStage = 'SUBSCRIBER' | 'LEAD' | 'MARKETING_QUALIFIED_LEAD' | 'SALES_QUALIFIED_LEAD' | 'OPPORTUNITY' | 'CUSTOMER' | 'EVANGELIST';

export type CampaignType = 'EMAIL' | 'SMS' | 'SOCIAL' | 'AD' | 'WEBINAR' | 'EVENT' | 'CONTENT';

export type CampaignStatus = 'DRAFT' | 'SCHEDULED' | 'SENDING' | 'SENT' | 'PAUSED' | 'CANCELLED';

export type EmailStatus = 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED' | 'BOUNCED' | 'COMPLAINED' | 'UNSUBSCRIBED';

export type AutomationStatus = 'ACTIVE' | 'PAUSED' | 'DRAFT' | 'ARCHIVED';

export type ListType = 'REGULAR' | 'SMART' | 'SEGMENT' | 'STATIC';

// Standard Marketing Entities
export interface StandardContact extends StandardBaseEntity {
    email: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    phones: StandardPhone[];
    addresses: StandardAddress[];

    status: ContactStatus;
    lifecycleStage?: LifecycleStage;

    company?: {
        name?: string;
        website?: string;
        industry?: string;
    };

    demographics: {
        age?: number;
        gender?: string;
        language?: string;
        timezone?: string;
        location?: {
            city?: string;
            state?: string;
            country?: string;
        };
    };

    engagement: {
        lastOpenedAt?: string;
        lastClickedAt?: string;
        totalOpens?: number;
        totalClicks?: number;
        engagementScore?: number;
        averageOpenRate?: number;
        averageClickRate?: number;
    };

    source?: string;
    tags: string[];
    listIds: string[];

    optIn: {
        optedInAt?: string;
        optInIp?: string;
        doubleOptIn?: boolean;
        source?: string;
    };

    optOut: {
        optedOutAt?: string;
        reason?: string;
        campaignId?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardList extends StandardBaseEntity {
    name: string;
    description?: string;
    type: ListType;

    stats: {
        totalContacts: number;
        subscribedContacts: number;
        unsubscribedContacts: number;
        cleanedContacts: number;
    };

    isActive: boolean;
    isPublic?: boolean;

    // For smart lists/segments
    segmentCriteria?: {
        conditions: SegmentCondition[];
        logic: 'AND' | 'OR';
    };

    customFields?: Record<string, any>;
}

export interface SegmentCondition {
    field: string;
    operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'NOT_CONTAINS' | 'GREATER_THAN' | 'LESS_THAN' | 'IS_SET' | 'IS_NOT_SET';
    value?: any;
}

export interface StandardCampaign extends StandardBaseEntity {
    name: string;
    subject?: string;
    description?: string;
    type: CampaignType;
    status: CampaignStatus;

    content: {
        htmlContent?: string;
        textContent?: string;
        templateId?: string;
    };

    targeting: {
        listIds: string[];
        segmentIds?: string[];
        excludeListIds?: string[];
    };

    schedule: {
        scheduledAt?: string;
        sentAt?: string;
        timezone?: string;
    };

    settings: {
        fromName: string;
        fromEmail: string;
        replyTo?: string;
        trackOpens?: boolean;
        trackClicks?: boolean;
        authenticateDomain?: boolean;
    };

    stats: {
        totalSent?: number;
        delivered?: number;
        opens?: number;
        uniqueOpens?: number;
        clicks?: number;
        uniqueClicks?: number;
        bounces?: number;
        complaints?: number;
        unsubscribes?: number;
        openRate?: number;
        clickRate?: number;
        deliveryRate?: number;
    };

    customFields?: Record<string, any>;
}

export interface StandardAutomation extends StandardBaseEntity {
    name: string;
    description?: string;
    status: AutomationStatus;

    trigger: {
        type: 'LIST_SUBSCRIPTION' | 'TAG_ADDED' | 'FIELD_CHANGED' | 'EMAIL_OPENED' | 'EMAIL_CLICKED' | 'DATE_BASED' | 'API_TRIGGERED';
        conditions?: Record<string, any>;
    };

    steps: AutomationStep[];

    stats: {
        totalEntered?: number;
        totalCompleted?: number;
        currentlyActive?: number;
    };

    customFields?: Record<string, any>;
}

export interface AutomationStep {
    id: string;
    type: 'EMAIL' | 'WAIT' | 'CONDITION' | 'TAG' | 'LIST_ACTION' | 'WEBHOOK';
    name: string;
    settings: Record<string, any>;
    position: number;
}

export interface StandardTemplate extends StandardBaseEntity {
    name: string;
    description?: string;
    type: 'EMAIL' | 'SMS' | 'LANDING_PAGE';

    content: {
        htmlContent?: string;
        textContent?: string;
        subject?: string;
    };

    design: {
        thumbnailUrl?: string;
        previewUrl?: string;
        category?: string;
        tags?: string[];
    };

    isActive: boolean;
    isShared?: boolean;

    customFields?: Record<string, any>;
}

export interface StandardEmailActivity extends StandardBaseEntity {
    contactId: string;
    campaignId?: string;
    emailId?: string;

    activity: {
        type: EmailStatus;
        timestamp: string;
        metadata?: Record<string, any>;
    };

    email: {
        subject?: string;
        fromEmail?: string;
        fromName?: string;
    };

    device: {
        userAgent?: string;
        ipAddress?: string;
        location?: {
            city?: string;
            country?: string;
        };
    };
}

export interface StandardTag extends StandardBaseEntity {
    name: string;
    color?: string;
    description?: string;
    contactCount?: number;
    isActive: boolean;
    customFields?: Record<string, any>;
}

// Input/Update Types
export interface CreateContactInput {
    email: string;
    firstName?: string;
    lastName?: string;
    phones?: StandardPhone[];
    addresses?: StandardAddress[];
    status?: ContactStatus;
    lifecycleStage?: LifecycleStage;
    listIds?: string[];
    tags?: string[];
    source?: string;
    customFields?: Record<string, any>;
}

export interface UpdateContactInput extends Partial<CreateContactInput> {
    id: string;
}

export interface CreateListInput {
    name: string;
    description?: string;
    type: ListType;
    isPublic?: boolean;
    segmentCriteria?: {
        conditions: SegmentCondition[];
        logic: 'AND' | 'OR';
    };
    customFields?: Record<string, any>;
}

export interface UpdateListInput extends Partial<CreateListInput> {
    id: string;
}

export interface CreateCampaignInput {
    name: string;
    subject?: string;
    type: CampaignType;
    content: {
        htmlContent?: string;
        textContent?: string;
        templateId?: string;
    };
    targeting: {
        listIds: string[];
        segmentIds?: string[];
    };
    settings: {
        fromName: string;
        fromEmail: string;
        replyTo?: string;
    };
    scheduledAt?: string;
    customFields?: Record<string, any>;
}

export interface UpdateCampaignInput extends Partial<CreateCampaignInput> {
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
