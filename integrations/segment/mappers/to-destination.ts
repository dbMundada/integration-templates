import type { SegmentDestination } from '../models.js';
import type { SegmentDestinationResponse } from '../types.js';

export function toDestination(record: SegmentDestinationResponse): SegmentDestination {
    return {
        id: record.id,
        name: record.name,
        enabled: record.enabled,
        connectionMode: record.connectionMode,
        destinationDefinitionId: record.destinationDefinitionId,
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