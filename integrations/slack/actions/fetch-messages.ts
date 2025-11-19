import { createAction } from 'nango';
import { createHash } from 'crypto';
import type { ProxyConfiguration } from 'nango';
import { SlackMessage, SlackMessageReply, SlackMessageReaction } from '../models.js';
import type { SlackMessageResponse } from '../types.js';
import { z } from 'zod';

const FetchMessagesInput = z.object({
    channel: z.string(),
    limit: z.number().optional(),
    oldest: z.string().optional(),
    latest: z.string().optional(),
    includeReplies: z.boolean().optional(),
    includeReactions: z.boolean().optional()
});

const FetchMessagesOutput = z.object({
    messages: z.array(SlackMessage),
    replies: z.array(SlackMessageReply).optional(),
    reactions: z.array(SlackMessageReaction).optional()
});

const action = createAction({
    description: 'Fetch messages from a specific Slack channel with optional replies and reactions',
    version: '1.0.0',

    endpoint: {
        method: 'GET',
        path: '/messages',
        group: 'Messages'
    },

    input: FetchMessagesInput,
    output: FetchMessagesOutput,

    scopes: ['channels:read', 'channels:history'],

    exec: async (nango, input): Promise<{ messages: SlackMessage[]; replies?: SlackMessageReply[]; reactions?: SlackMessageReaction[] }> => {
        const { channel, limit = 100, oldest, latest, includeReplies = false, includeReactions = false } = input;

        const messages: SlackMessage[] = [];
        const replies: SlackMessageReply[] = [];
        const reactions: SlackMessageReaction[] = [];

        const messagesRequestConfig: ProxyConfiguration = {
            endpoint: 'conversations.history',
            params: {
                channel,
                limit: limit.toString(),
                ...(oldest && { oldest }),
                ...(latest && { latest })
            },
            retries: 10
        };

        const response = await nango.get<{
            messages: SlackMessageResponse[];
            ok: boolean;
        }>(messagesRequestConfig);

        if (!response.data.ok) {
            throw new nango.ActionError({
                message: `Failed to fetch messages from channel ${channel}`
            });
        }

        for (const message of response.data.messages) {
            const mappedMessage: SlackMessage = {
                id: createHash('sha256').update(`${message.ts}${channel}`).digest('hex'),
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
                raw_json: JSON.stringify(message, (k, v) => (k === 'block_id' ? undefined : v))
            };

            messages.push(mappedMessage);

            // Fetch reactions if requested
            if (includeReactions && message.reactions) {
                for (const reaction of message.reactions) {
                    for (const user of reaction.users) {
                        const mappedReaction: SlackMessageReaction = {
                            id: createHash('sha256').update(`${message.ts}${reaction.name}${channel}${user}`).digest('hex'),
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

            // Fetch replies if requested and message has replies
            if (includeReplies && message.reply_count && message.reply_count > 0 && message.thread_ts) {
                const messagesReplyRequestConfig: ProxyConfiguration = {
                    endpoint: 'conversations.replies',
                    params: {
                        channel,
                        ts: message.thread_ts
                    },
                    retries: 10
                };

                try {
                    const replyResponse = await nango.get<{
                        messages: SlackMessageResponse[];
                        ok: boolean;
                    }>(messagesReplyRequestConfig);

                    if (replyResponse.data.ok) {
                        for (const reply of replyResponse.data.messages) {
                            if (reply.ts === message.ts) continue; // Skip the parent message

                            const mappedReply: SlackMessageReply = {
                                id: createHash('sha256').update(`${reply.ts}${channel}`).digest('hex'),
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
                                raw_json: JSON.stringify(reply, (k, v) => (k === 'block_id' ? undefined : v))
                            };

                            replies.push(mappedReply);

                            // Fetch reactions for replies if requested
                            if (includeReactions && reply.reactions) {
                                for (const reaction of reply.reactions) {
                                    for (const user of reaction.users) {
                                        const mappedReaction: SlackMessageReaction = {
                                            id: createHash('sha256').update(`${reply.ts}${reaction.name}${channel}${user}`).digest('hex'),
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
                    await nango.log(`Failed to fetch replies for thread ${message.thread_ts}: ${error}`, { level: 'warn' });
                }
            }
        }

        const result: any = { messages };
        if (includeReplies && replies.length > 0) {
            result.replies = replies;
        }
        if (includeReactions && reactions.length > 0) {
            result.reactions = reactions;
        }

        return result;
    }
});

export type NangoActionLocal = Parameters<(typeof action)['exec']>[0];
export default action;