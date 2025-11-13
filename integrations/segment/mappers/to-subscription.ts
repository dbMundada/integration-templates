import type { SegmentSubscription } from '../models.js';
import type { SegmentSubscriptionResponse } from '../types.js';

export function toSubscription(record: SegmentSubscriptionResponse, destinationId?: string): SegmentSubscription {
    return {
        id: record.id,
        name: record.name,
        actionId: record.actionId,
        actionSlug: record.actionSlug,
        destinationId: destinationId || record.destinationId,
        enabled: record.enabled,
        trigger: record.trigger,
        settings: record.settings ? {
            subscriptionId: record.settings.subscriptionId,
            type: record.settings.type,
            trigger: record.settings.trigger,
            actions: record.settings.actions,
            fields: record.settings.fields
        } : undefined,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt
    };
}