export interface SegmentSourceResponse {
  id: string;
  name: string;
  slug: string;
  enabled: boolean;
  sourceId: string;
  workspaceId: string;
  metadata: {
    id: string;
    name: string;
    slug?: string;
    description?: string;
    website?: string;
    categories?: string[];
    options?: Record<string, any>;
  };
  settings?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface SegmentDestinationResponse {
  id: string;
  name: string;
  enabled: boolean;
  connectionMode?: string;
  destinationDefinitionId: string;
  sourceId: string;
  workspaceId: string;
  metadata: {
    id: string;
    name: string;
    slug?: string;
    description?: string;
    website?: string;
    categories?: string[];
    options?: Record<string, any>;
  };
  settings?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface SegmentSubscriptionResponse {
  id: string;
  name: string;
  actionId: string;
  actionSlug?: string;
  destinationId: string;
  enabled: boolean;
  trigger: string;
  settings?: {
    subscriptionId?: string;
    type?: string;
    trigger?: string;
    actions?: Record<string, any>;
    fields?: Record<string, any>;
  };
  createdAt: string;
  updatedAt: string;
}

export interface SegmentWorkspaceResponse {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface SegmentPaginationResponse {
  count: number;
  cursor?: string;
  next?: string;
}

export interface SegmentApiResponse<T> {
  data: {
    sources?: T[];
    destinations?: T[];
    subscriptions?: T[];
    pagination?: SegmentPaginationResponse;
  };
}