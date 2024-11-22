import { CallbackQueryContext, Context } from "grammy";
import fetch from "cross-fetch";

import { Conversation, ConversationFlavor } from "@grammyjs/conversations";
import base58 from "bs58";
import "dotenv/config";
import Moralis from "moralis";

type CusContext = Context & ConversationFlavor;
type CusConversation = Conversation<CusContext>;

export const helpConversation = async (
  conversation: CusConversation,
  ctx: CusContext
) => {

  await ctx.reply("Blue dog can help you in chat, @RondaOnSuiportal.");
  
};

export const help = async (ctx: CallbackQueryContext<CusContext>) => {
  await ctx.conversation.exit();
  await ctx.conversation.reenter("help");
  await ctx.answerCallbackQuery();
};
