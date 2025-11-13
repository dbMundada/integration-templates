import type { SegmentWorkspace } from '../models.js';
import type { SegmentWorkspaceResponse } from '../types.js';

export function toWorkspace(record: SegmentWorkspaceResponse): SegmentWorkspace {
    return {
        id: record.id,
        name: record.name,
        slug: record.slug,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt
    };
}