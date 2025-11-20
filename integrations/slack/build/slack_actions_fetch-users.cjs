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

// slack/actions/fetch-users.ts
var fetch_users_exports = {};
__export(fetch_users_exports, {
  default: () => fetch_users_default
});
module.exports = __toCommonJS(fetch_users_exports);

// models.ts
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

// slack/actions/fetch-users.ts
var import_zod2 = require("zod");
var FetchUsersInput = import_zod2.z.object({
  limit: import_zod2.z.number().optional(),
  includeLocale: import_zod2.z.boolean().optional()
});
var FetchUsersOutput = import_zod2.z.object({
  users: import_zod2.z.array(SlackUser)
});
var action = {
  type: "action",
  description: "Fetch users from Slack workspace",
  version: "1.0.0",
  endpoint: {
    method: "GET",
    path: "/users",
    group: "Users"
  },
  input: FetchUsersInput,
  output: FetchUsersOutput,
  scopes: ["users:read", "users:read.email"],
  exec: async (nango, input) => {
    const limit = input?.limit || 200;
    const includeLocale = input?.includeLocale || false;
    const config = {
      endpoint: "users.list",
      retries: 10,
      params: {
        limit: limit.toString(),
        ...includeLocale && {
          include_locale: "true"
        }
      }
    };
    const response = await nango.get(config);
    if (!response.data.ok) {
      throw new nango.ActionError({
        message: "Failed to fetch users from Slack"
      });
    }
    const users = response.data.members.map((record) => ({
      id: record.id,
      team_id: record.team_id,
      name: record.name,
      deleted: record.deleted,
      tz: record.tz,
      tz_label: record.tz_label,
      tz_offset: record.tz_offset,
      profile: {
        avatar_hash: record.profile.avatar_hash,
        real_name: record.profile.real_name ? record.profile.real_name : null,
        display_name: record.profile.display_name ? record.profile.display_name : null,
        real_name_normalized: record.profile.real_name_normalized ? record.profile.real_name_normalized : null,
        display_name_normalized: record.profile.display_name_normalized ? record.profile.display_name_normalized : null,
        email: record.profile.email ? record.profile.email : null,
        image_original: record.profile.is_custom_image ? record.profile.image_original : null
      },
      is_admin: record.is_admin,
      is_owner: record.is_owner,
      is_primary_owner: record.is_primary_owner,
      is_restricted: record.is_restricted,
      is_ultra_restricted: record.is_ultra_restricted,
      is_bot: record.is_bot,
      updated: record.updated,
      is_app_user: record.is_app_user,
      raw_json: JSON.stringify(record)
    }));
    return {
      users
    };
  }
};
var fetch_users_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2xhY2svYWN0aW9ucy9mZXRjaC11c2Vycy50cyIsICJtb2RlbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB0eXBlIHsgU2xhY2tVc2VyUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy5qcyc7XG5pbXBvcnQgdHlwZSB7IFByb3h5Q29uZmlndXJhdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB7IFNsYWNrVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy5qcyc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmNvbnN0IEZldGNoVXNlcnNJbnB1dCA9IHoub2JqZWN0KHtcbiAgbGltaXQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgaW5jbHVkZUxvY2FsZTogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5jb25zdCBGZXRjaFVzZXJzT3V0cHV0ID0gei5vYmplY3Qoe1xuICB1c2Vyczogei5hcnJheShTbGFja1VzZXIpXG59KTtcbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdGZXRjaCB1c2VycyBmcm9tIFNsYWNrIHdvcmtzcGFjZScsXG4gIHZlcnNpb246ICcxLjAuMCcsXG4gIGVuZHBvaW50OiB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBwYXRoOiAnL3VzZXJzJyxcbiAgICBncm91cDogJ1VzZXJzJ1xuICB9LFxuICBpbnB1dDogRmV0Y2hVc2Vyc0lucHV0LFxuICBvdXRwdXQ6IEZldGNoVXNlcnNPdXRwdXQsXG4gIHNjb3BlczogWyd1c2VyczpyZWFkJywgJ3VzZXJzOnJlYWQuZW1haWwnXSxcbiAgZXhlYzogYXN5bmMgKG5hbmdvLCBpbnB1dCk6IFByb21pc2U8e1xuICAgIHVzZXJzOiBTbGFja1VzZXJbXTtcbiAgfT4gPT4ge1xuICAgIGNvbnN0IGxpbWl0ID0gaW5wdXQ/LmxpbWl0IHx8IDIwMDtcbiAgICBjb25zdCBpbmNsdWRlTG9jYWxlID0gaW5wdXQ/LmluY2x1ZGVMb2NhbGUgfHwgZmFsc2U7XG4gICAgY29uc3QgY29uZmlnOiBQcm94eUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICBlbmRwb2ludDogJ3VzZXJzLmxpc3QnLFxuICAgICAgcmV0cmllczogMTAsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgICAgIC4uLihpbmNsdWRlTG9jYWxlICYmIHtcbiAgICAgICAgICBpbmNsdWRlX2xvY2FsZTogJ3RydWUnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5hbmdvLmdldDx7XG4gICAgICBtZW1iZXJzOiBTbGFja1VzZXJSZXNwb25zZVtdO1xuICAgICAgb2s6IGJvb2xlYW47XG4gICAgfT4oY29uZmlnKTtcbiAgICBpZiAoIXJlc3BvbnNlLmRhdGEub2spIHtcbiAgICAgIHRocm93IG5ldyBuYW5nby5BY3Rpb25FcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggdXNlcnMgZnJvbSBTbGFjaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCB1c2VyczogU2xhY2tVc2VyW10gPSByZXNwb25zZS5kYXRhLm1lbWJlcnMubWFwKHJlY29yZCA9PiAoe1xuICAgICAgaWQ6IHJlY29yZC5pZCxcbiAgICAgIHRlYW1faWQ6IHJlY29yZC50ZWFtX2lkLFxuICAgICAgbmFtZTogcmVjb3JkLm5hbWUsXG4gICAgICBkZWxldGVkOiByZWNvcmQuZGVsZXRlZCxcbiAgICAgIHR6OiByZWNvcmQudHosXG4gICAgICB0el9sYWJlbDogcmVjb3JkLnR6X2xhYmVsLFxuICAgICAgdHpfb2Zmc2V0OiByZWNvcmQudHpfb2Zmc2V0LFxuICAgICAgcHJvZmlsZToge1xuICAgICAgICBhdmF0YXJfaGFzaDogcmVjb3JkLnByb2ZpbGUuYXZhdGFyX2hhc2gsXG4gICAgICAgIHJlYWxfbmFtZTogcmVjb3JkLnByb2ZpbGUucmVhbF9uYW1lID8gcmVjb3JkLnByb2ZpbGUucmVhbF9uYW1lIDogbnVsbCxcbiAgICAgICAgZGlzcGxheV9uYW1lOiByZWNvcmQucHJvZmlsZS5kaXNwbGF5X25hbWUgPyByZWNvcmQucHJvZmlsZS5kaXNwbGF5X25hbWUgOiBudWxsLFxuICAgICAgICByZWFsX25hbWVfbm9ybWFsaXplZDogcmVjb3JkLnByb2ZpbGUucmVhbF9uYW1lX25vcm1hbGl6ZWQgPyByZWNvcmQucHJvZmlsZS5yZWFsX25hbWVfbm9ybWFsaXplZCA6IG51bGwsXG4gICAgICAgIGRpc3BsYXlfbmFtZV9ub3JtYWxpemVkOiByZWNvcmQucHJvZmlsZS5kaXNwbGF5X25hbWVfbm9ybWFsaXplZCA/IHJlY29yZC5wcm9maWxlLmRpc3BsYXlfbmFtZV9ub3JtYWxpemVkIDogbnVsbCxcbiAgICAgICAgZW1haWw6IHJlY29yZC5wcm9maWxlLmVtYWlsID8gcmVjb3JkLnByb2ZpbGUuZW1haWwgOiBudWxsLFxuICAgICAgICBpbWFnZV9vcmlnaW5hbDogcmVjb3JkLnByb2ZpbGUuaXNfY3VzdG9tX2ltYWdlID8gcmVjb3JkLnByb2ZpbGUuaW1hZ2Vfb3JpZ2luYWwgOiBudWxsXG4gICAgICB9LFxuICAgICAgaXNfYWRtaW46IHJlY29yZC5pc19hZG1pbixcbiAgICAgIGlzX293bmVyOiByZWNvcmQuaXNfb3duZXIsXG4gICAgICBpc19wcmltYXJ5X293bmVyOiByZWNvcmQuaXNfcHJpbWFyeV9vd25lcixcbiAgICAgIGlzX3Jlc3RyaWN0ZWQ6IHJlY29yZC5pc19yZXN0cmljdGVkLFxuICAgICAgaXNfdWx0cmFfcmVzdHJpY3RlZDogcmVjb3JkLmlzX3VsdHJhX3Jlc3RyaWN0ZWQsXG4gICAgICBpc19ib3Q6IHJlY29yZC5pc19ib3QsXG4gICAgICB1cGRhdGVkOiByZWNvcmQudXBkYXRlZCxcbiAgICAgIGlzX2FwcF91c2VyOiByZWNvcmQuaXNfYXBwX3VzZXIsXG4gICAgICByYXdfanNvbjogSlNPTi5zdHJpbmdpZnkocmVjb3JkKVxuICAgIH0pKTtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcnNcbiAgICB9O1xuICB9XG59O1xuZXhwb3J0IHR5cGUgTmFuZ29BY3Rpb25Mb2NhbCA9IFBhcmFtZXRlcnM8KHR5cGVvZiBhY3Rpb24pWydleGVjJ10+WzBdO1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9uOyIsICJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuZXhwb3J0IGNvbnN0IFNsYWNrVXNlciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRlYW1faWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGRlbGV0ZWQ6IHouYm9vbGVhbigpLFxuICB0ejogei5zdHJpbmcoKSxcbiAgdHpfbGFiZWw6IHouc3RyaW5nKCksXG4gIHR6X29mZnNldDogei5udW1iZXIoKSxcbiAgcHJvZmlsZTogei5vYmplY3Qoe1xuICAgIGF2YXRhcl9oYXNoOiB6LnN0cmluZygpLFxuICAgIHJlYWxfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgICBkaXNwbGF5X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgcmVhbF9uYW1lX25vcm1hbGl6ZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgZGlzcGxheV9uYW1lX25vcm1hbGl6ZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgaW1hZ2Vfb3JpZ2luYWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSkub3B0aW9uYWwoKVxuICB9KSxcbiAgaXNfYWRtaW46IHouYm9vbGVhbigpLFxuICBpc19vd25lcjogei5ib29sZWFuKCksXG4gIGlzX3ByaW1hcnlfb3duZXI6IHouYm9vbGVhbigpLFxuICBpc19yZXN0cmljdGVkOiB6LmJvb2xlYW4oKSxcbiAgaXNfdWx0cmFfcmVzdHJpY3RlZDogei5ib29sZWFuKCksXG4gIGlzX2JvdDogei5ib29sZWFuKCksXG4gIHVwZGF0ZWQ6IHoubnVtYmVyKCksXG4gIGlzX2FwcF91c2VyOiB6LmJvb2xlYW4oKSxcbiAgcmF3X2pzb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2xhY2tVc2VyID0gei5pbmZlcjx0eXBlb2YgU2xhY2tVc2VyPjtcbmV4cG9ydCBjb25zdCBTbGFja0NoYW5uZWwgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBpc19jaGFubmVsOiB6LmJvb2xlYW4oKSxcbiAgaXNfZ3JvdXA6IHouYm9vbGVhbigpLFxuICBpc19pbTogei5ib29sZWFuKCksXG4gIGNyZWF0ZWQ6IHoubnVtYmVyKCksXG4gIGNyZWF0b3I6IHouc3RyaW5nKCksXG4gIGlzX2FyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgaXNfZ2VuZXJhbDogei5ib29sZWFuKCksXG4gIG5hbWVfbm9ybWFsaXplZDogei5zdHJpbmcoKSxcbiAgaXNfc2hhcmVkOiB6LmJvb2xlYW4oKSxcbiAgaXNfcHJpdmF0ZTogei5ib29sZWFuKCksXG4gIGlzX21waW06IHouYm9vbGVhbigpLFxuICB1cGRhdGVkOiB6Lm51bWJlcigpLFxuICBudW1fbWVtYmVyczogei5udW1iZXIoKSxcbiAgcmF3X2pzb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2xhY2tDaGFubmVsID0gei5pbmZlcjx0eXBlb2YgU2xhY2tDaGFubmVsPjtcbmV4cG9ydCBjb25zdCBTbGFja01lc3NhZ2UgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0czogei5zdHJpbmcoKSxcbiAgY2hhbm5lbF9pZDogei5zdHJpbmcoKSxcbiAgdGhyZWFkX3RzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBhcHBfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGJvdF9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGlzcGxheV9hc19ib3Q6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6Lm51bGwoKV0pLFxuICBpc19sb2NrZWQ6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6Lm51bGwoKV0pLFxuICBtZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGV2ZW50X3R5cGU6IHouc3RyaW5nKClcbiAgfSksXG4gIHBhcmVudF91c2VyX2lkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBzdWJ0eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0ZXh0OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0b3BpYzogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdXNlcl9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcmF3X2pzb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2xhY2tNZXNzYWdlID0gei5pbmZlcjx0eXBlb2YgU2xhY2tNZXNzYWdlPjtcbmV4cG9ydCBjb25zdCBTbGFja01lc3NhZ2VSZXBseSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRzOiB6LnN0cmluZygpLFxuICBjaGFubmVsX2lkOiB6LnN0cmluZygpLFxuICB0aHJlYWRfdHM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGFwcF9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgYm90X2lkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkaXNwbGF5X2FzX2JvdDogei51bmlvbihbei5ib29sZWFuKCksIHoubnVsbCgpXSksXG4gIGlzX2xvY2tlZDogei51bmlvbihbei5ib29sZWFuKCksIHoubnVsbCgpXSksXG4gIG1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgZXZlbnRfdHlwZTogei5zdHJpbmcoKVxuICB9KSxcbiAgcGFyZW50X3VzZXJfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHN1YnR5cGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHRleHQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHRvcGljOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB1c2VyX2lkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICByb290OiB6Lm9iamVjdCh7XG4gICAgbWVzc2FnZV9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgICB0czogei5zdHJpbmcoKVxuICB9KSxcbiAgcmF3X2pzb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2xhY2tNZXNzYWdlUmVwbHkgPSB6LmluZmVyPHR5cGVvZiBTbGFja01lc3NhZ2VSZXBseT47XG5leHBvcnQgY29uc3QgU2xhY2tNZXNzYWdlUmVhY3Rpb24gPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBtZXNzYWdlX3RzOiB6LnN0cmluZygpLFxuICB0aHJlYWRfdHM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGNoYW5uZWxfaWQ6IHouc3RyaW5nKCksXG4gIHVzZXJfaWQ6IHouc3RyaW5nKCksXG4gIHJlYWN0aW9uX25hbWU6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2xhY2tNZXNzYWdlUmVhY3Rpb24gPSB6LmluZmVyPHR5cGVvZiBTbGFja01lc3NhZ2VSZWFjdGlvbj47XG5leHBvcnQgY29uc3QgU2VuZE1lc3NhZ2VJbnB1dCA9IHoub2JqZWN0KHtcbiAgY2hhbm5lbDogei5zdHJpbmcoKSxcbiAgdGV4dDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBTZW5kTWVzc2FnZUlucHV0ID0gei5pbmZlcjx0eXBlb2YgU2VuZE1lc3NhZ2VJbnB1dD47XG5leHBvcnQgY29uc3QgU2VuZE1lc3NhZ2VPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIG9rOiB6LmJvb2xlYW4oKSxcbiAgY2hhbm5lbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBtZXNzYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdhcm5pbmc6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcmF3X2pzb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2VuZE1lc3NhZ2VPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBTZW5kTWVzc2FnZU91dHB1dD47XG5leHBvcnQgY29uc3QgU2xhY2tNZXNzYWdlTWV0YWRhdGEgPSB6Lm9iamVjdCh7XG4gIGNoYW5uZWxzTGFzdFN5bmNEYXRlOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnN0cmluZygpKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrTWVzc2FnZU1ldGFkYXRhID0gei5pbmZlcjx0eXBlb2YgU2xhY2tNZXNzYWdlTWV0YWRhdGE+O1xuZXhwb3J0IGNvbnN0IG1vZGVscyA9IHtcbiAgU2xhY2tVc2VyOiBTbGFja1VzZXIsXG4gIFNsYWNrQ2hhbm5lbDogU2xhY2tDaGFubmVsLFxuICBTbGFja01lc3NhZ2U6IFNsYWNrTWVzc2FnZSxcbiAgU2xhY2tNZXNzYWdlUmVwbHk6IFNsYWNrTWVzc2FnZVJlcGx5LFxuICBTbGFja01lc3NhZ2VSZWFjdGlvbjogU2xhY2tNZXNzYWdlUmVhY3Rpb24sXG4gIFNlbmRNZXNzYWdlSW5wdXQ6IFNlbmRNZXNzYWdlSW5wdXQsXG4gIFNlbmRNZXNzYWdlT3V0cHV0OiBTZW5kTWVzc2FnZU91dHB1dFxufTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtB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UztBQUFBLE1BQ1QsUUFBUTtBQUFBLFFBQ04sT0FBTyxNQUFNLFNBQVM7QUFBQSxRQUN0QixHQUFJLGlCQUFpQjtBQUFBLFVBQ25CLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxVQUFNLFdBQVcsTUFBTSxNQUFNLElBRzFCLE1BQU07QUFDVCxRQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7QUFDckIsWUFBTSxJQUFJLE1BQU0sWUFBWTtBQUFBLFFBQzFCLFNBQVM7QUFBQSxNQUNYLENBQUM7QUFBQSxJQUNIO0FBQ0EsVUFBTSxRQUFxQixTQUFTLEtBQUssUUFBUSxJQUFJLGFBQVc7QUFBQSxNQUM5RCxJQUFJLE9BQU87QUFBQSxNQUNYLFNBQVMsT0FBTztBQUFBLE1BQ2hCLE1BQU0sT0FBTztBQUFBLE1BQ2IsU0FBUyxPQUFPO0FBQUEsTUFDaEIsSUFBSSxPQUFPO0FBQUEsTUFDWCxVQUFVLE9BQU87QUFBQSxNQUNqQixXQUFXLE9BQU87QUFBQSxNQUNsQixTQUFTO0FBQUEsUUFDUCxhQUFhLE9BQU8sUUFBUTtBQUFBLFFBQzVCLFdBQVcsT0FBTyxRQUFRLFlBQVksT0FBTyxRQUFRLFlBQVk7QUFBQSxRQUNqRSxjQUFjLE9BQU8sUUFBUSxlQUFlLE9BQU8sUUFBUSxlQUFlO0FBQUEsUUFDMUUsc0JBQXNCLE9BQU8sUUFBUSx1QkFBdUIsT0FBTyxRQUFRLHVCQUF1QjtBQUFBLFFBQ2xHLHlCQUF5QixPQUFPLFFBQVEsMEJBQTBCLE9BQU8sUUFBUSwwQkFBMEI7QUFBQSxRQUMzRyxPQUFPLE9BQU8sUUFBUSxRQUFRLE9BQU8sUUFBUSxRQUFRO0FBQUEsUUFDckQsZ0JBQWdCLE9BQU8sUUFBUSxrQkFBa0IsT0FBTyxRQUFRLGlCQUFpQjtBQUFBLE1BQ25GO0FBQUEsTUFDQSxVQUFVLE9BQU87QUFBQSxNQUNqQixVQUFVLE9BQU87QUFBQSxNQUNqQixrQkFBa0IsT0FBTztBQUFBLE1BQ3pCLGVBQWUsT0FBTztBQUFBLE1BQ3RCLHFCQUFxQixPQUFPO0FBQUEsTUFDNUIsUUFBUSxPQUFPO0FBQUEsTUFDZixTQUFTLE9BQU87QUFBQSxNQUNoQixhQUFhLE9BQU87QUFBQSxNQUNwQixVQUFVLEtBQUssVUFBVSxNQUFNO0FBQUEsSUFDakMsRUFBRTtBQUNGLFdBQU87QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbImltcG9ydF96b2QiXQp9Cg==
