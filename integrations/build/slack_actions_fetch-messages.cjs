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

// slack/actions/fetch-messages.ts
var fetch_messages_exports = {};
__export(fetch_messages_exports, {
  default: () => fetch_messages_default
});
module.exports = __toCommonJS(fetch_messages_exports);
var import_crypto = require("crypto");

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

// slack/actions/fetch-messages.ts
var import_zod2 = require("zod");
var FetchMessagesInput = import_zod2.z.object({
  channel: import_zod2.z.string(),
  limit: import_zod2.z.number().optional(),
  oldest: import_zod2.z.string().optional(),
  latest: import_zod2.z.string().optional(),
  includeReplies: import_zod2.z.boolean().optional(),
  includeReactions: import_zod2.z.boolean().optional()
});
var FetchMessagesOutput = import_zod2.z.object({
  messages: import_zod2.z.array(SlackMessage),
  replies: import_zod2.z.array(SlackMessageReply).optional(),
  reactions: import_zod2.z.array(SlackMessageReaction).optional()
});
var action = {
  type: "action",
  description: "Fetch messages from a specific Slack channel with optional replies and reactions",
  version: "1.0.0",
  endpoint: {
    method: "GET",
    path: "/messages",
    group: "Messages"
  },
  input: FetchMessagesInput,
  output: FetchMessagesOutput,
  scopes: ["channels:read", "channels:history"],
  exec: async (nango, input) => {
    const {
      channel,
      limit = 100,
      oldest,
      latest,
      includeReplies = false,
      includeReactions = false
    } = input;
    const messages = [];
    const replies = [];
    const reactions = [];
    const messagesRequestConfig = {
      endpoint: "conversations.history",
      params: {
        channel,
        limit: limit.toString(),
        ...oldest && {
          oldest
        },
        ...latest && {
          latest
        }
      },
      retries: 10
    };
    const response = await nango.get(messagesRequestConfig);
    if (!response.data.ok) {
      throw new nango.ActionError({
        message: `Failed to fetch messages from channel ${channel}`
      });
    }
    for (const message of response.data.messages) {
      const mappedMessage = {
        id: (0, import_crypto.createHash)("sha256").update(`${message.ts}${channel}`).digest("hex"),
        ts: message.ts,
        channel_id: channel,
        thread_ts: message.thread_ts ? message.thread_ts : null,
        app_id: message.app_id ? message.app_id : null,
        bot_id: message.bot_id ? message.bot_id : null,
        display_as_bot: message.display_as_bot ? message.display_as_bot : null,
        is_locked: message.is_locked ? message.is_locked : null,
        metadata: {
          event_type: message.type
        },
        parent_user_id: message.parent_user_id ? message.parent_user_id : null,
        subtype: message.subtype ? message.subtype : null,
        text: message.text ? message.text : null,
        topic: message.topic ? message.topic : null,
        user_id: message.user ? message.user : null,
        raw_json: JSON.stringify(message, (k, v) => k === "block_id" ? void 0 : v)
      };
      messages.push(mappedMessage);
      if (includeReactions && message.reactions) {
        for (const reaction of message.reactions) {
          for (const user of reaction.users) {
            const mappedReaction = {
              id: (0, import_crypto.createHash)("sha256").update(`${message.ts}${reaction.name}${channel}${user}`).digest("hex"),
              message_ts: message.ts,
              channel_id: channel,
              user_id: user,
              thread_ts: message.thread_ts ? message.thread_ts : null,
              reaction_name: reaction.name
            };
            reactions.push(mappedReaction);
          }
        }
      }
      if (includeReplies && message.reply_count && message.reply_count > 0 && message.thread_ts) {
        const messagesReplyRequestConfig = {
          endpoint: "conversations.replies",
          params: {
            channel,
            ts: message.thread_ts
          },
          retries: 10
        };
        try {
          const replyResponse = await nango.get(messagesReplyRequestConfig);
          if (replyResponse.data.ok) {
            for (const reply of replyResponse.data.messages) {
              if (reply.ts === message.ts) continue;
              const mappedReply = {
                id: (0, import_crypto.createHash)("sha256").update(`${reply.ts}${channel}`).digest("hex"),
                ts: reply.ts,
                channel_id: channel,
                thread_ts: reply.thread_ts ? reply.thread_ts : null,
                app_id: reply.app_id ? reply.app_id : null,
                bot_id: reply.bot_id ? reply.bot_id : null,
                display_as_bot: reply.display_as_bot ? reply.display_as_bot : null,
                is_locked: reply.is_locked ? reply.is_locked : null,
                metadata: {
                  event_type: reply.type
                },
                parent_user_id: reply.parent_user_id ? reply.parent_user_id : null,
                subtype: reply.subtype ? reply.subtype : null,
                text: reply.text ? reply.text : null,
                topic: reply.topic ? reply.topic : null,
                user_id: reply.user ? reply.user : null,
                root: {
                  message_id: message.client_message_id,
                  ts: message.thread_ts
                },
                raw_json: JSON.stringify(reply, (k, v) => k === "block_id" ? void 0 : v)
              };
              replies.push(mappedReply);
              if (includeReactions && reply.reactions) {
                for (const reaction of reply.reactions) {
                  for (const user of reaction.users) {
                    const mappedReaction = {
                      id: (0, import_crypto.createHash)("sha256").update(`${reply.ts}${reaction.name}${channel}${user}`).digest("hex"),
                      message_ts: reply.ts,
                      channel_id: channel,
                      user_id: user,
                      thread_ts: reply.thread_ts ? reply.thread_ts : null,
                      reaction_name: reaction.name
                    };
                    reactions.push(mappedReaction);
                  }
                }
              }
            }
          }
        } catch (error) {
          await nango.log(`Failed to fetch replies for thread ${message.thread_ts}: ${error}`, {
            level: "warn"
          });
        }
      }
    }
    const result = {
      messages
    };
    if (includeReplies && replies.length > 0) {
      result.replies = replies;
    }
    if (includeReactions && reactions.length > 0) {
      result.reactions = reactions;
    }
    return result;
  }
};
var fetch_messages_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2xhY2svYWN0aW9ucy9mZXRjaC1tZXNzYWdlcy50cyIsICJzbGFjay9tb2RlbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB7IGNyZWF0ZUhhc2ggfSBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHR5cGUgeyBQcm94eUNvbmZpZ3VyYXRpb24gfSBmcm9tICduYW5nbyc7XG5pbXBvcnQgeyBTbGFja01lc3NhZ2UsIFNsYWNrTWVzc2FnZVJlcGx5LCBTbGFja01lc3NhZ2VSZWFjdGlvbiB9IGZyb20gJy4uL21vZGVscy5qcyc7XG5pbXBvcnQgdHlwZSB7IFNsYWNrTWVzc2FnZVJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMuanMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5jb25zdCBGZXRjaE1lc3NhZ2VzSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGNoYW5uZWw6IHouc3RyaW5nKCksXG4gIGxpbWl0OiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIG9sZGVzdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXRlc3Q6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaW5jbHVkZVJlcGxpZXM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGluY2x1ZGVSZWFjdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKClcbn0pO1xuY29uc3QgRmV0Y2hNZXNzYWdlc091dHB1dCA9IHoub2JqZWN0KHtcbiAgbWVzc2FnZXM6IHouYXJyYXkoU2xhY2tNZXNzYWdlKSxcbiAgcmVwbGllczogei5hcnJheShTbGFja01lc3NhZ2VSZXBseSkub3B0aW9uYWwoKSxcbiAgcmVhY3Rpb25zOiB6LmFycmF5KFNsYWNrTWVzc2FnZVJlYWN0aW9uKS5vcHRpb25hbCgpXG59KTtcbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdGZXRjaCBtZXNzYWdlcyBmcm9tIGEgc3BlY2lmaWMgU2xhY2sgY2hhbm5lbCB3aXRoIG9wdGlvbmFsIHJlcGxpZXMgYW5kIHJlYWN0aW9ucycsXG4gIHZlcnNpb246ICcxLjAuMCcsXG4gIGVuZHBvaW50OiB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBwYXRoOiAnL21lc3NhZ2VzJyxcbiAgICBncm91cDogJ01lc3NhZ2VzJ1xuICB9LFxuICBpbnB1dDogRmV0Y2hNZXNzYWdlc0lucHV0LFxuICBvdXRwdXQ6IEZldGNoTWVzc2FnZXNPdXRwdXQsXG4gIHNjb3BlczogWydjaGFubmVsczpyZWFkJywgJ2NoYW5uZWxzOmhpc3RvcnknXSxcbiAgZXhlYzogYXN5bmMgKG5hbmdvLCBpbnB1dCk6IFByb21pc2U8e1xuICAgIG1lc3NhZ2VzOiBTbGFja01lc3NhZ2VbXTtcbiAgICByZXBsaWVzPzogU2xhY2tNZXNzYWdlUmVwbHlbXTtcbiAgICByZWFjdGlvbnM/OiBTbGFja01lc3NhZ2VSZWFjdGlvbltdO1xuICB9PiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhbm5lbCxcbiAgICAgIGxpbWl0ID0gMTAwLFxuICAgICAgb2xkZXN0LFxuICAgICAgbGF0ZXN0LFxuICAgICAgaW5jbHVkZVJlcGxpZXMgPSBmYWxzZSxcbiAgICAgIGluY2x1ZGVSZWFjdGlvbnMgPSBmYWxzZVxuICAgIH0gPSBpbnB1dDtcbiAgICBjb25zdCBtZXNzYWdlczogU2xhY2tNZXNzYWdlW10gPSBbXTtcbiAgICBjb25zdCByZXBsaWVzOiBTbGFja01lc3NhZ2VSZXBseVtdID0gW107XG4gICAgY29uc3QgcmVhY3Rpb25zOiBTbGFja01lc3NhZ2VSZWFjdGlvbltdID0gW107XG4gICAgY29uc3QgbWVzc2FnZXNSZXF1ZXN0Q29uZmlnOiBQcm94eUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICBlbmRwb2ludDogJ2NvbnZlcnNhdGlvbnMuaGlzdG9yeScsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksXG4gICAgICAgIC4uLihvbGRlc3QgJiYge1xuICAgICAgICAgIG9sZGVzdFxuICAgICAgICB9KSxcbiAgICAgICAgLi4uKGxhdGVzdCAmJiB7XG4gICAgICAgICAgbGF0ZXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgcmV0cmllczogMTBcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmFuZ28uZ2V0PHtcbiAgICAgIG1lc3NhZ2VzOiBTbGFja01lc3NhZ2VSZXNwb25zZVtdO1xuICAgICAgb2s6IGJvb2xlYW47XG4gICAgfT4obWVzc2FnZXNSZXF1ZXN0Q29uZmlnKTtcbiAgICBpZiAoIXJlc3BvbnNlLmRhdGEub2spIHtcbiAgICAgIHRocm93IG5ldyBuYW5nby5BY3Rpb25FcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZmV0Y2ggbWVzc2FnZXMgZnJvbSBjaGFubmVsICR7Y2hhbm5lbH1gXG4gICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIHJlc3BvbnNlLmRhdGEubWVzc2FnZXMpIHtcbiAgICAgIGNvbnN0IG1hcHBlZE1lc3NhZ2U6IFNsYWNrTWVzc2FnZSA9IHtcbiAgICAgICAgaWQ6IGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShgJHttZXNzYWdlLnRzfSR7Y2hhbm5lbH1gKS5kaWdlc3QoJ2hleCcpLFxuICAgICAgICB0czogbWVzc2FnZS50cyxcbiAgICAgICAgY2hhbm5lbF9pZDogY2hhbm5lbCxcbiAgICAgICAgdGhyZWFkX3RzOiBtZXNzYWdlLnRocmVhZF90cyA/IG1lc3NhZ2UudGhyZWFkX3RzIDogbnVsbCxcbiAgICAgICAgYXBwX2lkOiBtZXNzYWdlLmFwcF9pZCA/IG1lc3NhZ2UuYXBwX2lkIDogbnVsbCxcbiAgICAgICAgYm90X2lkOiBtZXNzYWdlLmJvdF9pZCA/IG1lc3NhZ2UuYm90X2lkIDogbnVsbCxcbiAgICAgICAgZGlzcGxheV9hc19ib3Q6IG1lc3NhZ2UuZGlzcGxheV9hc19ib3QgPyBtZXNzYWdlLmRpc3BsYXlfYXNfYm90IDogbnVsbCxcbiAgICAgICAgaXNfbG9ja2VkOiBtZXNzYWdlLmlzX2xvY2tlZCA/IG1lc3NhZ2UuaXNfbG9ja2VkIDogbnVsbCxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICBldmVudF90eXBlOiBtZXNzYWdlLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgcGFyZW50X3VzZXJfaWQ6IG1lc3NhZ2UucGFyZW50X3VzZXJfaWQgPyBtZXNzYWdlLnBhcmVudF91c2VyX2lkIDogbnVsbCxcbiAgICAgICAgc3VidHlwZTogbWVzc2FnZS5zdWJ0eXBlID8gbWVzc2FnZS5zdWJ0eXBlIDogbnVsbCxcbiAgICAgICAgdGV4dDogbWVzc2FnZS50ZXh0ID8gbWVzc2FnZS50ZXh0IDogbnVsbCxcbiAgICAgICAgdG9waWM6IG1lc3NhZ2UudG9waWMgPyBtZXNzYWdlLnRvcGljIDogbnVsbCxcbiAgICAgICAgdXNlcl9pZDogbWVzc2FnZS51c2VyID8gbWVzc2FnZS51c2VyIDogbnVsbCxcbiAgICAgICAgcmF3X2pzb246IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UsIChrLCB2KSA9PiBrID09PSAnYmxvY2tfaWQnID8gdW5kZWZpbmVkIDogdilcbiAgICAgIH07XG4gICAgICBtZXNzYWdlcy5wdXNoKG1hcHBlZE1lc3NhZ2UpO1xuXG4gICAgICAvLyBGZXRjaCByZWFjdGlvbnMgaWYgcmVxdWVzdGVkXG4gICAgICBpZiAoaW5jbHVkZVJlYWN0aW9ucyAmJiBtZXNzYWdlLnJlYWN0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHJlYWN0aW9uIG9mIG1lc3NhZ2UucmVhY3Rpb25zKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHJlYWN0aW9uLnVzZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXBwZWRSZWFjdGlvbjogU2xhY2tNZXNzYWdlUmVhY3Rpb24gPSB7XG4gICAgICAgICAgICAgIGlkOiBjcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoYCR7bWVzc2FnZS50c30ke3JlYWN0aW9uLm5hbWV9JHtjaGFubmVsfSR7dXNlcn1gKS5kaWdlc3QoJ2hleCcpLFxuICAgICAgICAgICAgICBtZXNzYWdlX3RzOiBtZXNzYWdlLnRzLFxuICAgICAgICAgICAgICBjaGFubmVsX2lkOiBjaGFubmVsLFxuICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyLFxuICAgICAgICAgICAgICB0aHJlYWRfdHM6IG1lc3NhZ2UudGhyZWFkX3RzID8gbWVzc2FnZS50aHJlYWRfdHMgOiBudWxsLFxuICAgICAgICAgICAgICByZWFjdGlvbl9uYW1lOiByZWFjdGlvbi5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVhY3Rpb25zLnB1c2gobWFwcGVkUmVhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGZXRjaCByZXBsaWVzIGlmIHJlcXVlc3RlZCBhbmQgbWVzc2FnZSBoYXMgcmVwbGllc1xuICAgICAgaWYgKGluY2x1ZGVSZXBsaWVzICYmIG1lc3NhZ2UucmVwbHlfY291bnQgJiYgbWVzc2FnZS5yZXBseV9jb3VudCA+IDAgJiYgbWVzc2FnZS50aHJlYWRfdHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXNSZXBseVJlcXVlc3RDb25maWc6IFByb3h5Q29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICBlbmRwb2ludDogJ2NvbnZlcnNhdGlvbnMucmVwbGllcycsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgdHM6IG1lc3NhZ2UudGhyZWFkX3RzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXRyaWVzOiAxMFxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcGx5UmVzcG9uc2UgPSBhd2FpdCBuYW5nby5nZXQ8e1xuICAgICAgICAgICAgbWVzc2FnZXM6IFNsYWNrTWVzc2FnZVJlc3BvbnNlW107XG4gICAgICAgICAgICBvazogYm9vbGVhbjtcbiAgICAgICAgICB9PihtZXNzYWdlc1JlcGx5UmVxdWVzdENvbmZpZyk7XG4gICAgICAgICAgaWYgKHJlcGx5UmVzcG9uc2UuZGF0YS5vaykge1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXBseSBvZiByZXBseVJlc3BvbnNlLmRhdGEubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcGx5LnRzID09PSBtZXNzYWdlLnRzKSBjb250aW51ZTsgLy8gU2tpcCB0aGUgcGFyZW50IG1lc3NhZ2VcblxuICAgICAgICAgICAgICBjb25zdCBtYXBwZWRSZXBseTogU2xhY2tNZXNzYWdlUmVwbHkgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShgJHtyZXBseS50c30ke2NoYW5uZWx9YCkuZGlnZXN0KCdoZXgnKSxcbiAgICAgICAgICAgICAgICB0czogcmVwbHkudHMsXG4gICAgICAgICAgICAgICAgY2hhbm5lbF9pZDogY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB0aHJlYWRfdHM6IHJlcGx5LnRocmVhZF90cyA/IHJlcGx5LnRocmVhZF90cyA6IG51bGwsXG4gICAgICAgICAgICAgICAgYXBwX2lkOiByZXBseS5hcHBfaWQgPyByZXBseS5hcHBfaWQgOiBudWxsLFxuICAgICAgICAgICAgICAgIGJvdF9pZDogcmVwbHkuYm90X2lkID8gcmVwbHkuYm90X2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5X2FzX2JvdDogcmVwbHkuZGlzcGxheV9hc19ib3QgPyByZXBseS5kaXNwbGF5X2FzX2JvdCA6IG51bGwsXG4gICAgICAgICAgICAgICAgaXNfbG9ja2VkOiByZXBseS5pc19sb2NrZWQgPyByZXBseS5pc19sb2NrZWQgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgICBldmVudF90eXBlOiByZXBseS50eXBlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJlbnRfdXNlcl9pZDogcmVwbHkucGFyZW50X3VzZXJfaWQgPyByZXBseS5wYXJlbnRfdXNlcl9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VidHlwZTogcmVwbHkuc3VidHlwZSA/IHJlcGx5LnN1YnR5cGUgOiBudWxsLFxuICAgICAgICAgICAgICAgIHRleHQ6IHJlcGx5LnRleHQgPyByZXBseS50ZXh0IDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3BpYzogcmVwbHkudG9waWMgPyByZXBseS50b3BpYyA6IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogcmVwbHkudXNlciA/IHJlcGx5LnVzZXIgOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2UuY2xpZW50X21lc3NhZ2VfaWQsXG4gICAgICAgICAgICAgICAgICB0czogbWVzc2FnZS50aHJlYWRfdHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJhd19qc29uOiBKU09OLnN0cmluZ2lmeShyZXBseSwgKGssIHYpID0+IGsgPT09ICdibG9ja19pZCcgPyB1bmRlZmluZWQgOiB2KVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXBsaWVzLnB1c2gobWFwcGVkUmVwbHkpO1xuXG4gICAgICAgICAgICAgIC8vIEZldGNoIHJlYWN0aW9ucyBmb3IgcmVwbGllcyBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgICAgaWYgKGluY2x1ZGVSZWFjdGlvbnMgJiYgcmVwbHkucmVhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByZWFjdGlvbiBvZiByZXBseS5yZWFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdXNlciBvZiByZWFjdGlvbi51c2Vycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRSZWFjdGlvbjogU2xhY2tNZXNzYWdlUmVhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShgJHtyZXBseS50c30ke3JlYWN0aW9uLm5hbWV9JHtjaGFubmVsfSR7dXNlcn1gKS5kaWdlc3QoJ2hleCcpLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdHM6IHJlcGx5LnRzLFxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfaWQ6IGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRfdHM6IHJlcGx5LnRocmVhZF90cyA/IHJlcGx5LnRocmVhZF90cyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgcmVhY3Rpb25fbmFtZTogcmVhY3Rpb24ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZWFjdGlvbnMucHVzaChtYXBwZWRSZWFjdGlvbik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGF3YWl0IG5hbmdvLmxvZyhgRmFpbGVkIHRvIGZldGNoIHJlcGxpZXMgZm9yIHRocmVhZCAke21lc3NhZ2UudGhyZWFkX3RzfTogJHtlcnJvcn1gLCB7XG4gICAgICAgICAgICBsZXZlbDogJ3dhcm4nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7XG4gICAgICBtZXNzYWdlc1xuICAgIH07XG4gICAgaWYgKGluY2x1ZGVSZXBsaWVzICYmIHJlcGxpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0LnJlcGxpZXMgPSByZXBsaWVzO1xuICAgIH1cbiAgICBpZiAoaW5jbHVkZVJlYWN0aW9ucyAmJiByZWFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0LnJlYWN0aW9ucyA9IHJlYWN0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydCB0eXBlIE5hbmdvQWN0aW9uTG9jYWwgPSBQYXJhbWV0ZXJzPCh0eXBlb2YgYWN0aW9uKVsnZXhlYyddPlswXTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjsiLCAiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmV4cG9ydCBjb25zdCBTbGFja1VzZXIgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0ZWFtX2lkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBkZWxldGVkOiB6LmJvb2xlYW4oKSxcbiAgdHo6IHouc3RyaW5nKCksXG4gIHR6X2xhYmVsOiB6LnN0cmluZygpLFxuICB0el9vZmZzZXQ6IHoubnVtYmVyKCksXG4gIHByb2ZpbGU6IHoub2JqZWN0KHtcbiAgICBhdmF0YXJfaGFzaDogei5zdHJpbmcoKSxcbiAgICByZWFsX25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgZGlzcGxheV9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIHJlYWxfbmFtZV9ub3JtYWxpemVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIGRpc3BsYXlfbmFtZV9ub3JtYWxpemVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIGVtYWlsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICAgIGltYWdlX29yaWdpbmFsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLm9wdGlvbmFsKClcbiAgfSksXG4gIGlzX2FkbWluOiB6LmJvb2xlYW4oKSxcbiAgaXNfb3duZXI6IHouYm9vbGVhbigpLFxuICBpc19wcmltYXJ5X293bmVyOiB6LmJvb2xlYW4oKSxcbiAgaXNfcmVzdHJpY3RlZDogei5ib29sZWFuKCksXG4gIGlzX3VsdHJhX3Jlc3RyaWN0ZWQ6IHouYm9vbGVhbigpLFxuICBpc19ib3Q6IHouYm9vbGVhbigpLFxuICB1cGRhdGVkOiB6Lm51bWJlcigpLFxuICBpc19hcHBfdXNlcjogei5ib29sZWFuKCksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrVXNlciA9IHouaW5mZXI8dHlwZW9mIFNsYWNrVXNlcj47XG5leHBvcnQgY29uc3QgU2xhY2tDaGFubmVsID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgaXNfY2hhbm5lbDogei5ib29sZWFuKCksXG4gIGlzX2dyb3VwOiB6LmJvb2xlYW4oKSxcbiAgaXNfaW06IHouYm9vbGVhbigpLFxuICBjcmVhdGVkOiB6Lm51bWJlcigpLFxuICBjcmVhdG9yOiB6LnN0cmluZygpLFxuICBpc19hcmNoaXZlZDogei5ib29sZWFuKCksXG4gIGlzX2dlbmVyYWw6IHouYm9vbGVhbigpLFxuICBuYW1lX25vcm1hbGl6ZWQ6IHouc3RyaW5nKCksXG4gIGlzX3NoYXJlZDogei5ib29sZWFuKCksXG4gIGlzX3ByaXZhdGU6IHouYm9vbGVhbigpLFxuICBpc19tcGltOiB6LmJvb2xlYW4oKSxcbiAgdXBkYXRlZDogei5udW1iZXIoKSxcbiAgbnVtX21lbWJlcnM6IHoubnVtYmVyKCksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrQ2hhbm5lbCA9IHouaW5mZXI8dHlwZW9mIFNsYWNrQ2hhbm5lbD47XG5leHBvcnQgY29uc3QgU2xhY2tNZXNzYWdlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdHM6IHouc3RyaW5nKCksXG4gIGNoYW5uZWxfaWQ6IHouc3RyaW5nKCksXG4gIHRocmVhZF90czogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgYXBwX2lkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBib3RfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRpc3BsYXlfYXNfYm90OiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei5udWxsKCldKSxcbiAgaXNfbG9ja2VkOiB6LnVuaW9uKFt6LmJvb2xlYW4oKSwgei5udWxsKCldKSxcbiAgbWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICBldmVudF90eXBlOiB6LnN0cmluZygpXG4gIH0pLFxuICBwYXJlbnRfdXNlcl9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgc3VidHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdGV4dDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdG9waWM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHVzZXJfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrTWVzc2FnZSA9IHouaW5mZXI8dHlwZW9mIFNsYWNrTWVzc2FnZT47XG5leHBvcnQgY29uc3QgU2xhY2tNZXNzYWdlUmVwbHkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0czogei5zdHJpbmcoKSxcbiAgY2hhbm5lbF9pZDogei5zdHJpbmcoKSxcbiAgdGhyZWFkX3RzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBhcHBfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGJvdF9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGlzcGxheV9hc19ib3Q6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6Lm51bGwoKV0pLFxuICBpc19sb2NrZWQ6IHoudW5pb24oW3ouYm9vbGVhbigpLCB6Lm51bGwoKV0pLFxuICBtZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGV2ZW50X3R5cGU6IHouc3RyaW5nKClcbiAgfSksXG4gIHBhcmVudF91c2VyX2lkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBzdWJ0eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0ZXh0OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0b3BpYzogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdXNlcl9pZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcm9vdDogei5vYmplY3Qoe1xuICAgIG1lc3NhZ2VfaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gICAgdHM6IHouc3RyaW5nKClcbiAgfSksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrTWVzc2FnZVJlcGx5ID0gei5pbmZlcjx0eXBlb2YgU2xhY2tNZXNzYWdlUmVwbHk+O1xuZXhwb3J0IGNvbnN0IFNsYWNrTWVzc2FnZVJlYWN0aW9uID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbWVzc2FnZV90czogei5zdHJpbmcoKSxcbiAgdGhyZWFkX3RzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBjaGFubmVsX2lkOiB6LnN0cmluZygpLFxuICB1c2VyX2lkOiB6LnN0cmluZygpLFxuICByZWFjdGlvbl9uYW1lOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNsYWNrTWVzc2FnZVJlYWN0aW9uID0gei5pbmZlcjx0eXBlb2YgU2xhY2tNZXNzYWdlUmVhY3Rpb24+O1xuZXhwb3J0IGNvbnN0IFNlbmRNZXNzYWdlSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGNoYW5uZWw6IHouc3RyaW5nKCksXG4gIHRleHQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU2VuZE1lc3NhZ2VJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFNlbmRNZXNzYWdlSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IFNlbmRNZXNzYWdlT3V0cHV0ID0gei5vYmplY3Qoe1xuICBvazogei5ib29sZWFuKCksXG4gIGNoYW5uZWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbWVzc2FnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3YXJuaW5nOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHJhd19qc29uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFNlbmRNZXNzYWdlT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgU2VuZE1lc3NhZ2VPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IFNsYWNrTWVzc2FnZU1ldGFkYXRhID0gei5vYmplY3Qoe1xuICBjaGFubmVsc0xhc3RTeW5jRGF0ZTogei5yZWNvcmQoei5zdHJpbmcoKSwgei5zdHJpbmcoKSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBTbGFja01lc3NhZ2VNZXRhZGF0YSA9IHouaW5mZXI8dHlwZW9mIFNsYWNrTWVzc2FnZU1ldGFkYXRhPjtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7XG4gIFNsYWNrVXNlcjogU2xhY2tVc2VyLFxuICBTbGFja0NoYW5uZWw6IFNsYWNrQ2hhbm5lbCxcbiAgU2xhY2tNZXNzYWdlOiBTbGFja01lc3NhZ2UsXG4gIFNsYWNrTWVzc2FnZVJlcGx5OiBTbGFja01lc3NhZ2VSZXBseSxcbiAgU2xhY2tNZXNzYWdlUmVhY3Rpb246IFNsYWNrTWVzc2FnZVJlYWN0aW9uLFxuICBTZW5kTWVzc2FnZUlucHV0OiBTZW5kTWVzc2FnZUlucHV0LFxuICBTZW5kTWVzc2FnZU91dHB1dDogU2VuZE1lc3NhZ2VPdXRwdXRcbn07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
