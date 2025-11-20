"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// slack/actions/fetch-channels.ts
var fetch_channels_exports = {};
__export(fetch_channels_exports, {
  default: () => fetch_channels_default
});
module.exports = __toCommonJS(fetch_channels_exports);

// slack/models.ts
var import_zod = require("zod");
var SlackUser = import_zod.z.object({
  id: import_zod.z.string(),
  team_id: import_zod.z.string(),
  name: import_zod.z.string(),
  deleted: import_zod.z.boolean(),
  tz: import_zod.z.string(),
  tz_label: import_zod.z.string(),
  tz_offset: import_zod.z.number(),
  profile: import_zod.z.object({
    avatar_hash: import_zod.z.string(),
    real_name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
    display_name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
    real_name_normalized: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
    display_name_normalized: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
    email: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
    image_original: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]).optional()
  }),
  is_admin: import_zod.z.boolean(),
  is_owner: import_zod.z.boolean(),
  is_primary_owner: import_zod.z.boolean(),
  is_restricted: import_zod.z.boolean(),
  is_ultra_restricted: import_zod.z.boolean(),
  is_bot: import_zod.z.boolean(),
  updated: import_zod.z.number(),
  is_app_user: import_zod.z.boolean(),
  raw_json: import_zod.z.string()
});
var SlackChannel = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  is_channel: import_zod.z.boolean(),
  is_group: import_zod.z.boolean(),
  is_im: import_zod.z.boolean(),
  created: import_zod.z.number(),
  creator: import_zod.z.string(),
  is_archived: import_zod.z.boolean(),
  is_general: import_zod.z.boolean(),
  name_normalized: import_zod.z.string(),
  is_shared: import_zod.z.boolean(),
  is_private: import_zod.z.boolean(),
  is_mpim: import_zod.z.boolean(),
  updated: import_zod.z.number(),
  num_members: import_zod.z.number(),
  raw_json: import_zod.z.string()
});
var SlackMessage = import_zod.z.object({
  id: import_zod.z.string(),
  ts: import_zod.z.string(),
  channel_id: import_zod.z.string(),
  thread_ts: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  app_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  bot_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  display_as_bot: import_zod.z.union([import_zod.z.boolean(), import_zod.z.null()]),
  is_locked: import_zod.z.union([import_zod.z.boolean(), import_zod.z.null()]),
  metadata: import_zod.z.object({
    event_type: import_zod.z.string()
  }),
  parent_user_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  subtype: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  text: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  topic: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  user_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  raw_json: import_zod.z.string()
});
var SlackMessageReply = import_zod.z.object({
  id: import_zod.z.string(),
  ts: import_zod.z.string(),
  channel_id: import_zod.z.string(),
  thread_ts: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  app_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  bot_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  display_as_bot: import_zod.z.union([import_zod.z.boolean(), import_zod.z.null()]),
  is_locked: import_zod.z.union([import_zod.z.boolean(), import_zod.z.null()]),
  metadata: import_zod.z.object({
    event_type: import_zod.z.string()
  }),
  parent_user_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  subtype: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  text: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  topic: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  user_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  root: import_zod.z.object({
    message_id: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
    ts: import_zod.z.string()
  }),
  raw_json: import_zod.z.string()
});
var SlackMessageReaction = import_zod.z.object({
  id: import_zod.z.string(),
  message_ts: import_zod.z.string(),
  thread_ts: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  channel_id: import_zod.z.string(),
  user_id: import_zod.z.string(),
  reaction_name: import_zod.z.string()
});
var SendMessageInput = import_zod.z.object({
  channel: import_zod.z.string(),
  text: import_zod.z.string()
});
var SendMessageOutput = import_zod.z.object({
  ok: import_zod.z.boolean(),
  channel: import_zod.z.string().optional(),
  ts: import_zod.z.string().optional(),
  message: import_zod.z.string().optional(),
  warning: import_zod.z.string().optional(),
  error: import_zod.z.string().optional(),
  raw_json: import_zod.z.string()
});
var SlackMessageMetadata = import_zod.z.object({
  channelsLastSyncDate: import_zod.z.record(import_zod.z.string(), import_zod.z.string()).optional()
});

// slack/actions/fetch-channels.ts
var import_zod2 = require("zod");
var FetchChannelsInput = import_zod2.z.object({
  limit: import_zod2.z.number().optional(),
  types: import_zod2.z.string().optional(),
  excludeArchived: import_zod2.z.boolean().optional()
});
var FetchChannelsOutput = import_zod2.z.object({
  channels: import_zod2.z.array(SlackChannel)
});
var action = {
  type: "action",
  description: "Fetch channels from Slack workspace. Supports filtering by channel types and archived status.",
  version: "1.0.0",
  endpoint: {
    method: "GET",
    path: "/channels",
    group: "Channels"
  },
  input: FetchChannelsInput,
  output: FetchChannelsOutput,
  scopes: ["channels:read"],
  exec: async (nango, input) => {
    const limit = input?.limit || 200;
    const types = input?.types || "public_channel,private_channel,mpim,im";
    const excludeArchived = input?.excludeArchived ?? true;
    const proxyConfig = {
      endpoint: "conversations.list",
      params: {
        limit: limit.toString(),
        types,
        exclude_archived: excludeArchived.toString()
      },
      retries: 10
    };
    const response = await nango.get(proxyConfig);
    if (!response.data.ok) {
      throw new nango.ActionError({
        message: "Failed to fetch channels from Slack"
      });
    }
    const channels = response.data.channels.map((record) => ({
      id: record.id,
      name: record.name,
      is_channel: record.is_channel,
      is_group: record.is_group,
      is_im: record.is_im,
      created: record.created,
      creator: record.creator,
      is_archived: record.is_archived,
      is_general: record.is_general,
      name_normalized: record.name_normalized,
      is_shared: record.is_shared,
      is_private: record.is_private,
      is_mpim: record.is_mpim,
      updated: record.updated,
      num_members: record.num_members,
      raw_json: JSON.stringify(record)
    }));
    return {
      channels
    };
  }
};
var fetch_channels_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2xhY2svYWN0aW9ucy9mZXRjaC1jaGFubmVscy50cyIsICJzbGFjay9tb2RlbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB7IFNsYWNrQ2hhbm5lbCB9IGZyb20gJy4uL21vZGVscy5qcyc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCB0eXBlIHsgUHJveHlDb25maWd1cmF0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHR5cGUgeyBTbGFja0NoYW5uZWxSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzLmpzJztcbmNvbnN0IEZldGNoQ2hhbm5lbHNJbnB1dCA9IHoub2JqZWN0KHtcbiAgbGltaXQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgdHlwZXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZXhjbHVkZUFyY2hpdmVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpXG59KTtcbmNvbnN0IEZldGNoQ2hhbm5lbHNPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIGNoYW5uZWxzOiB6LmFycmF5KFNsYWNrQ2hhbm5lbClcbn0pO1xuY29uc3QgYWN0aW9uID0ge1xuICB0eXBlOiBcImFjdGlvblwiLFxuICBkZXNjcmlwdGlvbjogJ0ZldGNoIGNoYW5uZWxzIGZyb20gU2xhY2sgd29ya3NwYWNlLiBTdXBwb3J0cyBmaWx0ZXJpbmcgYnkgY2hhbm5lbCB0eXBlcyBhbmQgYXJjaGl2ZWQgc3RhdHVzLicsXG4gIHZlcnNpb246ICcxLjAuMCcsXG4gIGVuZHBvaW50OiB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBwYXRoOiAnL2NoYW5uZWxzJyxcbiAgICBncm91cDogJ0NoYW5uZWxzJ1xuICB9LFxuICBpbnB1dDogRmV0Y2hDaGFubmVsc0lucHV0LFxuICBvdXRwdXQ6IEZldGNoQ2hhbm5lbHNPdXRwdXQsXG4gIHNjb3BlczogWydjaGFubmVsczpyZWFkJ10sXG4gIGV4ZWM6IGFzeW5jIChuYW5nbywgaW5wdXQpOiBQcm9taXNlPHtcbiAgICBjaGFubmVsczogU2xhY2tDaGFubmVsW107XG4gIH0+ID0+IHtcbiAgICBjb25zdCBsaW1pdCA9IGlucHV0Py5saW1pdCB8fCAyMDA7XG4gICAgY29uc3QgdHlwZXMgPSBpbnB1dD8udHlwZXMgfHwgJ3B1YmxpY19jaGFubmVsLHByaXZhdGVfY2hhbm5lbCxtcGltLGltJztcbiAgICBjb25zdCBleGNsdWRlQXJjaGl2ZWQgPSBpbnB1dD8uZXhjbHVkZUFyY2hpdmVkID8/IHRydWU7XG4gICAgY29uc3QgcHJveHlDb25maWc6IFByb3h5Q29uZmlndXJhdGlvbiA9IHtcbiAgICAgIGVuZHBvaW50OiAnY29udmVyc2F0aW9ucy5saXN0JyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBsaW1pdDogbGltaXQudG9TdHJpbmcoKSxcbiAgICAgICAgdHlwZXMsXG4gICAgICAgIGV4Y2x1ZGVfYXJjaGl2ZWQ6IGV4Y2x1ZGVBcmNoaXZlZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgcmV0cmllczogMTBcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmFuZ28uZ2V0PHtcbiAgICAgIGNoYW5uZWxzOiBTbGFja0NoYW5uZWxSZXNwb25zZVtdO1xuICAgICAgb2s6IGJvb2xlYW47XG4gICAgfT4ocHJveHlDb25maWcpO1xuICAgIGlmICghcmVzcG9uc2UuZGF0YS5vaykge1xuICAgICAgdGhyb3cgbmV3IG5hbmdvLkFjdGlvbkVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBjaGFubmVscyBmcm9tIFNsYWNrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5uZWxzOiBTbGFja0NoYW5uZWxbXSA9IHJlc3BvbnNlLmRhdGEuY2hhbm5lbHMubWFwKHJlY29yZCA9PiAoe1xuICAgICAgaWQ6IHJlY29yZC5pZCxcbiAgICAgIG5hbWU6IHJlY29yZC5uYW1lLFxuICAgICAgaXNfY2hhbm5lbDogcmVjb3JkLmlzX2NoYW5uZWwsXG4gICAgICBpc19ncm91cDogcmVjb3JkLmlzX2dyb3VwLFxuICAgICAgaXNfaW06IHJlY29yZC5pc19pbSxcbiAgICAgIGNyZWF0ZWQ6IHJlY29yZC5jcmVhdGVkLFxuICAgICAgY3JlYXRvcjogcmVjb3JkLmNyZWF0b3IsXG4gICAgICBpc19hcmNoaXZlZDogcmVjb3JkLmlzX2FyY2hpdmVkLFxuICAgICAgaXNfZ2VuZXJhbDogcmVjb3JkLmlzX2dlbmVyYWwsXG4gICAgICBuYW1lX25vcm1hbGl6ZWQ6IHJlY29yZC5uYW1lX25vcm1hbGl6ZWQsXG4gICAgICBpc19zaGFyZWQ6IHJlY29yZC5pc19zaGFyZWQsXG4gICAgICBpc19wcml2YXRlOiByZWNvcmQuaXNfcHJpdmF0ZSxcbiAgICAgIGlzX21waW06IHJlY29yZC5pc19tcGltLFxuICAgICAgdXBkYXRlZDogcmVjb3JkLnVwZGF0ZWQsXG4gICAgICBudW1fbWVtYmVyczogcmVjb3JkLm51bV9tZW1iZXJzLFxuICAgICAgcmF3X2pzb246IEpTT04uc3RyaW5naWZ5KHJlY29yZClcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5uZWxzXG4gICAgfTtcbiAgfVxufTtcbmV4cG9ydCB0eXBlIE5hbmdvQWN0aW9uTG9jYWwgPSBQYXJhbWV0ZXJzPCh0eXBlb2YgYWN0aW9uKVsnZXhlYyddPlswXTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjsiLCAiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmV4cG9ydCBjb25zdCBTbGFja1VzZXIgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0ZWFtX2lkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBkZWxldGVkOiB6LmJvb2xlYW4oKSxcbiAgdHo6IHouc3RyaW5nKCksXG4gIHR6X2xhYmVsOiB6LnN0cmluZygpLFxuICB0el9vZmZzZXQ6IHoubnVtYmVyKCksXG4gIHByb2ZpbGU6IHoub2JqZWN0KHtcbiAgICBhdmF0YXJfaGFzaDogei5zdHJpbmcoKSxcbiAgICByZWFsX25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgZGlzcGxheV9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIHJlYWxfbmFtZV9ub3JtYWxpemVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIGRpc3BsYXlfbmFtZV9ub3JtYWxpemVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIGVtYWlsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIGltYWdlX29yaWdpbmFsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLm9wdGlvbmFsKClcbiAgfSksXG4gIGlzX2FkbWluOiB6LmJvb2xlYW4oKSxcbiAgaXNfb3duZXI6IHouYm9vbGVhbigpLFxuICBpc19wcmltYXJ5X293bmVyOiB6LmJvb2xlYW4oKSxcbiAgaXNfcmVzdHJpY3RlZDogei5ib29sZWFuKCksXG4gIGlzX3VsdHJhX3Jlc3RyaWN0ZWQ6IHouYm9vbGVhbigpLFxuICBpc19ib3Q6IHouYm9vbGVhbigpLFxuICB1cGRhdGVkOiB6Lm51bWJlcigpLFxuICBpc19hcHBfdXNlcjogei5ib29sZWFuKCksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrVXNlciA9IHouaW5mZXI8dHlwZW9mIFNsYWNrVXNlcj47XG5leHBvcnQgY29uc3QgU2xhY2tDaGFubmVsID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgaXNfY2hhbm5lbDogei5ib29sZWFuKCksXG4gIGlzX2dyb3VwOiB6LmJvb2xlYW4oKSxcbiAgaXNfaW06IHouYm9vbGVhbigpLFxuICBjcmVhdGVkOiB6Lm51bWJlcigpLFxuICBjcmVhdG9yOiB6LnN0cmluZygpLFxuICBpc19hcmNoaXZlZDogei5ib29sZWFuKCksXG4gIGlzX2dlbmVyYWw6IHouYm9vbGVhbigpLFxuICBuYW1lX25vcm1hbGl6ZWQ6IHouc3RyaW5nKCksXG4gIGlzX3NoYXJlZDogei5ib29sZWFuKCksXG4gIGlzX3ByaXZhdGU6IHouYm9vbGVhbigpLFxuICBpc19tcGltOiB6LmJvb2xlYW4oKSxcbiAgdXBkYXRlZDogei5udW1iZXIoKSxcbiAgbnVtX21lbWJlcnM6IHoubnVtYmVyKCksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrQ2hhbm5lbCA9IHouaW5mZXI8dHlwZW9mIFNsYWNrQ2hhbm5lbD47XG5leHBvcnQgY29uc3QgU2xhY2tNZXNzYWdlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdHM6IHouc3RyaW5nKCksXG4gIGNoYW5uZWxfaWQ6IHouc3RyaW5nKCksXG4gIHRocmVhZF90czogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgYXBwX2lkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBib3RfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRpc3BsYXlfYXNfYm90OiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei5udWxsKCldKSxcbiAgaXNfbG9ja2VkOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei5udWxsKCldKSxcbiAgbWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICBldmVudF90eXBlOiB6LnN0cmluZygpXG4gIH0pLFxuICBwYXJlbnRfdXNlcl9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgc3VidHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdGV4dDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdG9waWM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHVzZXJfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrTWVzc2FnZSA9IHouaW5mZXI8dHlwZW9mIFNsYWNrTWVzc2FnZT47XG5leHBvcnQgY29uc3QgU2xhY2tNZXNzYWdlUmVwbHkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0czogei5zdHJpbmcoKSxcbiAgY2hhbm5lbF9pZDogei5zdHJpbmcoKSxcbiAgdGhyZWFkX3RzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBhcHBfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGJvdF9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGlzcGxheV9hc19ib3Q6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6Lm51bGwoKV0pLFxuICBpc19sb2NrZWQ6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6Lm51bGwoKV0pLFxuICBtZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGV2ZW50X3R5cGU6IHouc3RyaW5nKClcbiAgfSksXG4gIHBhcmVudF91c2VyX2lkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBzdWJ0eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0ZXh0OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0b3BpYzogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdXNlcl9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcm9vdDogei5vYmplY3Qoe1xuICAgIG1lc3NhZ2VfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgdHM6IHouc3RyaW5nKClcbiAgfSksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrTWVzc2FnZVJlcGx5ID0gei5pbmZlcjx0eXBlb2YgU2xhY2tNZXNzYWdlUmVwbHk+O1xuZXhwb3J0IGNvbnN0IFNsYWNrTWVzc2FnZVJlYWN0aW9uID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbWVzc2FnZV90czogei5zdHJpbmcoKSxcbiAgdGhyZWFkX3RzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBjaGFubmVsX2lkOiB6LnN0cmluZygpLFxuICB1c2VyX2lkOiB6LnN0cmluZygpLFxuICByZWFjdGlvbl9uYW1lOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrTWVzc2FnZVJlYWN0aW9uID0gei5pbmZlcjx0eXBlb2YgU2xhY2tNZXNzYWdlUmVhY3Rpb24+O1xuZXhwb3J0IGNvbnN0IFNlbmRNZXNzYWdlSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGNoYW5uZWw6IHouc3RyaW5nKCksXG4gIHRleHQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2VuZE1lc3NhZ2VJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFNlbmRNZXNzYWdlSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IFNlbmRNZXNzYWdlT3V0cHV0ID0gei5vYmplY3Qoe1xuICBvazogei5ib29sZWFuKCksXG4gIGNoYW5uZWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbWVzc2FnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3YXJuaW5nOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNlbmRNZXNzYWdlT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgU2VuZE1lc3NhZ2VPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IFNsYWNrTWVzc2FnZU1ldGFkYXRhID0gei5vYmplY3Qoe1xuICBjaGFubmVsc0xhc3RTeW5jRGF0ZTogei5yZWNvcmQoei5zdHJpbmcoKSwgei5zdHJpbmcoKSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBTbGFja01lc3NhZ2VNZXRhZGF0YSA9IHouaW5mZXI8dHlwZW9mIFNsYWNrTWVzc2FnZU1ldGFkYXRhPjtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7XG4gIFNsYWNrVXNlcjogU2xhY2tVc2VyLFxuICBTbGFja0NoYW5uZWw6IFNsYWNrQ2hhbm5lbCxcbiAgU2xhY2tNZXNzYWdlOiBTbGFja01lc3NhZ2UsXG4gIFNsYWNrTWVzc2FnZVJlcGx5OiBTbGFja01lc3NhZ2VSZXBseSxcbiAgU2xhY2tNZXNzYWdlUmVhY3Rpb246IFNsYWNrTWVzc2FnZVJlYWN0aW9uLFxuICBTZW5kTWVzc2FnZUlucHV0OiBTZW5kTWVzc2FnZUlucHV0LFxuICBTZW5kTWVzc2FnZU91dHB1dDogU2VuZE1lc3NhZ2VPdXRwdXRcbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxpQkFBa0I7QUFDWCxJQUFNLFlBQVksYUFBRSxPQUFPO0FBQUEsRUFDaEMsSUFBSSxhQUFFLE9BQU87QUFBQSxFQUNiLFNBQVMsYUFBRSxPQUFPO0FBQUEsRUFDbEIsTUFBTSxhQUFFLE9BQU87QUFBQSxFQUNmLFNBQVMsYUFBRSxRQUFRO0FBQUEsRUFDbkIsSUFBSSxhQUFFLE9BQU87QUFBQSxFQUNiLFVBQVUsYUFBRSxPQUFPO0FBQUEsRUFDbkIsV0FBVyxhQUFFLE9BQU87QUFBQSxFQUNwQixTQUFTLGFBQUUsT0FBTztBQUFBLElBQ2hCLGFBQWEsYUFBRSxPQUFPO0FBQUEsSUFDdEIsV0FBVyxhQUFFLE1BQU0sQ0FBQyxhQUFFLE9BQU8sR0FBRyxhQUFFLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFDekMsY0FBYyxhQUFFLE1BQU0sQ0FBQyxhQUFFLE9BQU8sR0FBRyxhQUFFLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFDNUMsc0JB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
