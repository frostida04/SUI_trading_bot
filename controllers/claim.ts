import { CallbackQueryContext, Context } from "grammy";
import fetch from "cross-fetch";

import { Conversation, ConversationFlavor } from "@grammyjs/conversations";
import base58 from "bs58";
import "dotenv/config";
import Moralis from "moralis";

type CusContext = Context & ConversationFlavor;
type CusConversation = Conversation<CusContext>;

export const claimConversation = async (
  conversation: CusConversation,
  ctx: CusContext
) => {

  await ctx.reply("Sorry you did not qualify for the free mint. If this is an error, please go to @RondaOnSuiportal."
    ,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
      },
    }
  );
  
};

export const claim = async (ctx: CallbackQueryContext<CusContext>) => {
  await ctx.conversation.exit();
  await ctx.conversation.reenter("claim");
  await ctx.answerCallbackQuery();
};
