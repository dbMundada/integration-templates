/**
 * Standardized Communication Entity Types
 *
 * This file defines standard interfaces for Communication entities across different providers
 * like Slack, Discord, Teams, Twilio, SendGrid, etc.
 */

// Base interfaces
interface StandardBaseEntity {
    id: string;
    createdAt: string;
    updatedAt: string;
    providerSpecific?: Record<string, any>;
}

// Communication Specific Types
export type ChannelType = 'PUBLIC' | 'PRIVATE' | 'DIRECT_MESSAGE' | 'GROUP_MESSAGE' | 'THREAD';

export type MessageType = 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'FILE' | 'LINK' | 'SYSTEM' | 'BOT';

export type UserStatus = 'ACTIVE' | 'AWAY' | 'DO_NOT_DISTURB' | 'OFFLINE' | 'INVISIBLE';

export type MemberRole = 'OWNER' | 'ADMIN' | 'MODERATOR' | 'MEMBER' | 'GUEST';

export type NotificationLevel = 'ALL' | 'MENTIONS' | 'NOTHING';

export type EmailStatus = 'QUEUED' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED' | 'BOUNCED' | 'DROPPED' | 'SPAM' | 'UNSUBSCRIBED';

export type SmsStatus = 'QUEUED' | 'SENDING' | 'SENT' | 'DELIVERED' | 'UNDELIVERED' | 'FAILED';

export type CallStatus = 'QUEUED' | 'RINGING' | 'IN_PROGRESS' | 'COMPLETED' | 'BUSY' | 'NO_ANSWER' | 'CANCELLED' | 'FAILED';

// Standard Communication Entities
export interface StandardUser extends StandardBaseEntity {
    username: string;
    displayName: string;
    email?: string;
    phone?: string;

    profile: {
        firstName?: string;
        lastName?: string;
        avatar?: string;
        status?: UserStatus;
        statusText?: string;
        timezone?: string;
        title?: string;
    };

    presence: {
        isOnline: boolean;
        lastSeenAt?: string;
        activeDevice?: string;
    };

    settings: {
        isBot?: boolean;
        isDeleted?: boolean;
        isRestricted?: boolean;
        locale?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardChannel extends StandardBaseEntity {
    name: string;
    displayName?: string;
    description?: string;
    topic?: string;

    type: ChannelType;

    settings: {
        isArchived?: boolean;
        isGeneral?: boolean;
        isShared?: boolean;
        isPrivate?: boolean;
        isReadOnly?: boolean;
    };

    membership: {
        memberCount?: number;
        memberIds: string[];
        creatorId?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardMessage extends StandardBaseEntity {
    channelId: string;
    authorId: string;

    content: {
        text?: string;
        html?: string;
        blocks?: MessageBlock[]; // for rich formatting
    };

    type: MessageType;

    threading: {
        threadId?: string;
        parentMessageId?: string;
        replyCount?: number;
        isThreadReply?: boolean;
    };

    attachments: MessageAttachment[];

    reactions: MessageReaction[];

    metadata: {
        isEdited?: boolean;
        editedAt?: string;
        isPinned?: boolean;
        pinnedAt?: string;
        pinnedBy?: string;
    };

    mentions: {
        userIds: string[];
        channelIds: string[];
        hasEveryoneMention?: boolean;
        hasHereMention?: boolean;
    };

    customFields?: Record<string, any>;
}

export interface MessageBlock {
    type: 'text' | 'image' | 'button' | 'divider' | 'section';
    content?: string;
    url?: string;
    altText?: string;
    action?: {
        type: string;
        value: string;
        url?: string;
    };
}

export interface MessageAttachment {
    id: string;
    filename: string;
    contentType: string;
    size: number;
    url?: string;
    thumbnailUrl?: string;
    previewText?: string;
}

export interface MessageReaction {
    emoji: string;
    count: number;
    userIds: string[];
    isCurrentUser?: boolean;
}

export interface StandardWorkspace extends StandardBaseEntity {
    name: string;
    domain?: string;
    description?: string;

    settings: {
        isPublic?: boolean;
        allowGuests?: boolean;
        retentionDays?: number;
        maxMembers?: number;
    };

    membership: {
        memberCount: number;
        adminIds: string[];
        ownerIds: string[];
    };

    billing: {
        plan?: string;
        billingEmail?: string;
        isActive?: boolean;
    };

    customFields?: Record<string, any>;
}

export interface StandardEmail extends StandardBaseEntity {
    messageId: string;

    recipients: {
        to: EmailRecipient[];
        cc?: EmailRecipient[];
        bcc?: EmailRecipient[];
    };

    sender: {
        email: string;
        name?: string;
    };

    content: {
        subject: string;
        textContent?: string;
        htmlContent?: string;
        templateId?: string;
    };

    status: EmailStatus;

    scheduling: {
        sentAt?: string;
        scheduledAt?: string;
        deliveredAt?: string;
    };

    tracking: {
        opens?: number;
        clicks?: number;
        openedAt?: string;
        clickedAt?: string;
        trackingEnabled?: boolean;
    };

    attachments: MessageAttachment[];

    customFields?: Record<string, any>;
}

export interface EmailRecipient {
    email: string;
    name?: string;
    status?: EmailStatus;
    substitutions?: Record<string, string>; // for template variables
}

export interface StandardSms extends StandardBaseEntity {
    messageId?: string;

    sender: {
        phoneNumber: string;
        name?: string;
    };

    recipient: {
        phoneNumber: string;
        name?: string;
    };

    content: {
        body: string;
        mediaUrls?: string[];
    };

    status: SmsStatus;

    scheduling: {
        sentAt?: string;
        scheduledAt?: string;
        deliveredAt?: string;
    };

    pricing: {
        price?: number;
        currency?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardCall extends StandardBaseEntity {
    callId?: string;

    participants: {
        caller: {
            phoneNumber: string;
            name?: string;
        };
        callee: {
            phoneNumber: string;
            name?: string;
        };
    };

    status: CallStatus;

    timeline: {
        startTime?: string;
        endTime?: string;
        answerTime?: string;
        duration?: number; // seconds
    };

    details: {
        direction: 'INBOUND' | 'OUTBOUND';
        recordingUrl?: string;
        transcriptUrl?: string;
        forwardedFrom?: string;
    };

    pricing: {
        price?: number;
        currency?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardNotification extends StandardBaseEntity {
    userId: string;

    content: {
        title: string;
        message: string;
        imageUrl?: string;
        actionUrl?: string;
    };

    delivery: {
        channels: ('PUSH' | 'EMAIL' | 'SMS' | 'IN_APP')[];
        priority: 'LOW' | 'NORMAL' | 'HIGH';
        sentAt?: string;
        deliveredAt?: string;
    };

    interaction: {
        isRead?: boolean;
        readAt?: string;
        isClicked?: boolean;
        clickedAt?: string;
    };

    customFields?: Record<string, any>;
}

// Input/Update Types
export interface CreateChannelInput {
    name: string;
    description?: string;
    type: ChannelType;
    isPrivate?: boolean;
    memberIds?: string[];
    customFields?: Record<string, any>;
}

export interface UpdateChannelInput extends Partial<CreateChannelInput> {
    id: string;
}

export interface CreateMessageInput {
    channelId: string;
    authorId: string;
    text?: string;
    html?: string;
    blocks?: MessageBlock[];
    attachments?: MessageAttachment[];
    parentMessageId?: string; // for replies
    customFields?: Record<string, any>;
}

export interface UpdateMessageInput extends Partial<CreateMessageInput> {
    id: string;
}

export interface SendEmailInput {
    to: EmailRecipient[];
    cc?: EmailRecipient[];
    bcc?: EmailRecipient[];
    from: {
        email: string;
        name?: string;
    };
    subject: string;
    textContent?: string;
    htmlContent?: string;
    templateId?: string;
    templateData?: Record<string, any>;
    scheduledAt?: string;
    attachments?: MessageAttachment[];
    customFields?: Record<string, any>;
}

export interface SendSmsInput {
    to: string;
    from: string;
    body: string;
    mediaUrls?: string[];
    scheduledAt?: string;
    customFields?: Record<string, any>;
}

export interface MakeCallInput {
    to: string;
    from: string;
    url?: string; // webhook URL for call instructions
    record?: boolean;
    timeout?: number;
    customFields?: Record<string, any>;
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
