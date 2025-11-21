/**
 * Standardized Support/Customer Service Entity Types
 *
 * This file defines standard interfaces for Support entities across different providers
 * like Zendesk, Intercom, Freshdesk, ServiceNow, etc.
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

// Support Specific Types
export type TicketStatus = 'NEW' | 'OPEN' | 'PENDING' | 'ON_HOLD' | 'SOLVED' | 'CLOSED';

export type TicketPriority = 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT' | 'CRITICAL';

export type TicketType = 'QUESTION' | 'INCIDENT' | 'PROBLEM' | 'TASK' | 'BUG' | 'FEATURE_REQUEST';

export type ChannelType = 'EMAIL' | 'CHAT' | 'PHONE' | 'SMS' | 'SOCIAL_MEDIA' | 'WEB_FORM' | 'API' | 'IN_APP';

export type UserRole = 'END_USER' | 'AGENT' | 'ADMIN' | 'LIGHT_AGENT';

export type ConversationStatus = 'OPEN' | 'PENDING' | 'RESOLVED' | 'CLOSED';

export type MessageType = 'COMMENT' | 'EMAIL' | 'CHAT' | 'NOTE' | 'PHONE_CALL' | 'VOICE_MAIL';

// Standard Support Entities
export interface StandardTicket extends StandardBaseEntity {
    number: string;
    subject: string;
    description?: string;

    status: TicketStatus;
    priority: TicketPriority;
    type?: TicketType;

    requester: {
        id: string;
        name: string;
        email: string;
    };

    assignee?: {
        id: string;
        name: string;
        email: string;
    };

    organization?: {
        id: string;
        name: string;
    };

    channel: {
        type: ChannelType;
        source?: string; // specific source within channel type
    };

    dates: {
        submittedAt: string;
        firstResponseAt?: string;
        resolvedAt?: string;
        closedAt?: string;
        dueAt?: string;
    };

    metrics: {
        firstResponseTimeMinutes?: number;
        fullResolutionTimeMinutes?: number;
        agentWaitTimeMinutes?: number;
        requesterWaitTimeMinutes?: number;
        satisfactionRating?: number; // 1-5 scale
    };

    tags: string[];

    customFields?: Record<string, any>;
}

export interface StandardUser extends StandardBaseEntity {
    name: string;
    email: string;
    phones: StandardPhone[];
    addresses: StandardAddress[];

    role: UserRole;

    profile: {
        firstName?: string;
        lastName?: string;
        avatar?: string;
        timezone?: string;
        language?: string;
        title?: string;
        department?: string;
    };

    organization?: {
        id: string;
        name: string;
    };

    permissions: string[];

    settings: {
        isActive: boolean;
        isSuspended?: boolean;
        lastLoginAt?: string;
        emailVerified?: boolean;
    };

    customFields?: Record<string, any>;
}

export interface StandardOrganization extends StandardBaseEntity {
    name: string;
    domains: string[];

    addresses: StandardAddress[];
    phones: StandardPhone[];

    details: {
        description?: string;
        website?: string;
        industry?: string;
        size?: string;
    };

    settings: {
        isShared?: boolean;
        groupId?: string;
        notes?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardConversation extends StandardBaseEntity {
    ticketId?: string; // Optional - conversations can exist without tickets

    participants: {
        id: string;
        name: string;
        email: string;
        role: UserRole;
    }[];

    status: ConversationStatus;
    channel: ChannelType;

    subject?: string;

    messages: StandardMessage[];

    assignee?: {
        id: string;
        name: string;
        email: string;
    };

    tags: string[];

    customFields?: Record<string, any>;
}

export interface StandardMessage extends StandardBaseEntity {
    conversationId: string;
    ticketId?: string;

    author: {
        id: string;
        name: string;
        email: string;
        role: UserRole;
    };

    content: {
        text?: string;
        html?: string;
        subject?: string;
    };

    type: MessageType;

    channel: {
        type: ChannelType;
        direction: 'INBOUND' | 'OUTBOUND';
    };

    visibility: 'PUBLIC' | 'PRIVATE';

    attachments: MessageAttachment[];

    customFields?: Record<string, any>;
}

export interface MessageAttachment {
    id: string;
    filename: string;
    contentType: string;
    size: number;
    url?: string;
    thumbnailUrl?: string;
}

export interface StandardArticle extends StandardBaseEntity {
    title: string;
    content: string;

    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

    author: {
        id: string;
        name: string;
        email: string;
    };

    category?: {
        id: string;
        name: string;
    };

    section?: {
        id: string;
        name: string;
    };

    metadata: {
        locale?: string;
        publishedAt?: string;
        viewCount?: number;
        helpfulCount?: number;
        notHelpfulCount?: number;
    };

    tags: string[];

    customFields?: Record<string, any>;
}

export interface StandardSurveyResponse extends StandardBaseEntity {
    ticketId?: string;
    userId?: string;

    survey: {
        id: string;
        name: string;
        type: 'CSAT' | 'NPS' | 'CES' | 'CUSTOM';
    };

    responses: {
        [questionId: string]: {
            question: string;
            answer: string | number;
            type: 'TEXT' | 'RATING' | 'MULTIPLE_CHOICE' | 'BOOLEAN';
        };
    };

    overallRating?: number;
    comment?: string;

    submittedAt: string;

    customFields?: Record<string, any>;
}

export interface StandardMacro extends StandardBaseEntity {
    name: string;
    description?: string;

    actions: MacroAction[];

    conditions?: MacroCondition[];

    settings: {
        isActive: boolean;
        isRestricted?: boolean; // requires special permissions
        position?: number;
    };

    usage: {
        usageCount?: number;
        lastUsedAt?: string;
    };

    customFields?: Record<string, any>;
}

export interface MacroAction {
    type: 'SET_STATUS' | 'SET_PRIORITY' | 'SET_TYPE' | 'ASSIGN' | 'ADD_TAG' | 'ADD_COMMENT' | 'SET_FIELD';
    value: any;
    field?: string;
}

export interface MacroCondition {
    field: string;
    operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'NOT_CONTAINS' | 'IS_SET' | 'IS_NOT_SET';
    value: any;
}

// Input/Update Types
export interface CreateTicketInput {
    subject: string;
    description?: string;
    requesterId: string;
    priority?: TicketPriority;
    type?: TicketType;
    assigneeId?: string;
    organizationId?: string;
    channelType: ChannelType;
    tags?: string[];
    customFields?: Record<string, any>;
}

export interface UpdateTicketInput extends Partial<CreateTicketInput> {
    id: string;
    status?: TicketStatus;
}

export interface CreateUserInput {
    name: string;
    email: string;
    role: UserRole;
    organizationId?: string;
    phones?: StandardPhone[];
    addresses?: StandardAddress[];
    customFields?: Record<string, any>;
}

export interface UpdateUserInput extends Partial<CreateUserInput> {
    id: string;
}

export interface CreateMessageInput {
    conversationId?: string;
    ticketId?: string;
    authorId: string;
    content: {
        text?: string;
        html?: string;
        subject?: string;
    };
    type: MessageType;
    visibility?: 'PUBLIC' | 'PRIVATE';
    customFields?: Record<string, any>;
}

export interface UpdateMessageInput extends Partial<CreateMessageInput> {
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
