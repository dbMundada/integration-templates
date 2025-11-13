import { z } from "zod";

export const SegmentPagination = z.object({
  count: z.number(),
  cursor: z.string().optional(),
  next: z.string().optional()
});

export type SegmentPagination = z.infer<typeof SegmentPagination>;

export const SegmentMetadata = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional(),
  description: z.string().optional(),
  website: z.string().optional(),
  categories: z.string().array().optional(),
  options: z.record(z.string(), z.any()).optional()
});

export type SegmentMetadata = z.infer<typeof SegmentMetadata>;

export const SegmentSource = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean(),
  sourceId: z.string(),
  workspaceId: z.string(),
  metadata: SegmentMetadata,
  settings: z.record(z.string(), z.any()).optional(),
  createdAt: z.string(),
  updatedAt: z.string()
});

export type SegmentSource = z.infer<typeof SegmentSource>;

export const SegmentDestination = z.object({
  id: z.string(),
  name: z.string(),
  enabled: z.boolean(),
  connectionMode: z.string().optional(),
  destinationDefinitionId: z.string(),
  sourceId: z.string(),
  workspaceId: z.string(),
  metadata: SegmentMetadata,
  settings: z.record(z.string(), z.any()).optional(),
  createdAt: z.string(),
  updatedAt: z.string()
});

export type SegmentDestination = z.infer<typeof SegmentDestination>;

export const SegmentSubscriptionSettings = z.object({
  subscriptionId: z.string().optional(),
  type: z.string().optional(),
  trigger: z.string().optional(),
  actions: z.record(z.string(), z.any()).optional(),
  fields: z.record(z.string(), z.any()).optional()
});

export type SegmentSubscriptionSettings = z.infer<typeof SegmentSubscriptionSettings>;

export const SegmentSubscription = z.object({
  id: z.string(),
  name: z.string(),
  actionId: z.string(),
  actionSlug: z.string().optional(),
  destinationId: z.string(),
  enabled: z.boolean(),
  trigger: z.string(),
  settings: SegmentSubscriptionSettings.optional(),
  createdAt: z.string(),
  updatedAt: z.string()
});

export type SegmentSubscription = z.infer<typeof SegmentSubscription>;

export const SegmentWorkspace = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
});

export type SegmentWorkspace = z.infer<typeof SegmentWorkspace>;

export const models = {
  SegmentPagination,
  SegmentMetadata,
  SegmentSource,
  SegmentDestination,
  SegmentSubscription,
  SegmentSubscriptionSettings,
  SegmentWorkspace
};