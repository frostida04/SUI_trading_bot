import { CallbackQueryContext, Context } from "grammy";
import fetch from "cross-fetch";
import base58 from "bs58";
import { Conversation, ConversationFlavor } from "@grammyjs/conversations";
import { SolNetwork } from "@moralisweb3/common-sol-utils";
import "dotenv/config";
import Moralis from "moralis";

type CusContext = Context & ConversationFlavor;
type CusConversation = Conversation<CusContext>;

// const connection = new web3.Connection(process.env.RPC_URL as string, {
//   confirmTransactionInitialTimeout: 120000, // 60 seconds
// });

export const buyConversation = async (
  conversation: CusConversation,
  ctx: CusContext
) => {

  await ctx.reply("To buy a token please enter the Dexscreener, Birdeye, or Movepump link or contract below to begin.");
  const {
    msg: { text: address },
  } = await conversation.waitFor("message");
  await ctx.reply("Enter the amount to buy:", {
    parse_mode: "HTML",
  });
  let {
    msg: { text: amount },
  } = await conversation.waitFor("message");

  console.log(address, amount);

};

export const buy = async (ctx: CallbackQueryContext<CusContext>) => {
  await ctx.conversation.exit();
  await ctx.conversation.reenter("buy");
  await ctx.answerCallbackQuery();
};
