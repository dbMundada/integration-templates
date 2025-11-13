import type { SegmentSource } from '../models.js';
import type { SegmentSourceResponse } from '../types.js';

export function toSource(record: SegmentSourceResponse): SegmentSource {
    return {
        id: record.id,
        name: record.name,
        slug: record.slug,
        enabled: record.enabled,
        sourceId: record.sourceId,
        workspaceId: record.workspaceId,
        metadata: {
            id: record.metadata.id,
            name: record.metadata.name,
            slug: record.metadata.slug,
            description: record.metadata.description,
            website: record.metadata.website,
            categories: record.metadata.categories,
            options: record.metadata.options
        },
        settings: record.settings,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt
    };
}