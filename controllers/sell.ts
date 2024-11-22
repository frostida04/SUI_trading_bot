import { CallbackQueryContext, Context } from "grammy";
import fetch from "cross-fetch";

import { Conversation, ConversationFlavor } from "@grammyjs/conversations";
import { SolNetwork } from "@moralisweb3/common-sol-utils";
import base58 from "bs58";
import "dotenv/config";
import Moralis from "moralis";

type CusContext = Context & ConversationFlavor;
type CusConversation = Conversation<CusContext>;

const fetchSolAmount = async (address: string) => {
  const response = await Moralis.SolApi.account.getBalance({
    address,
    network: SolNetwork.MAINNET,
  });
  return response.toJSON();
};

const getSPL = async (address: string) => {
  const response = await Moralis.SolApi.account.getSPL({
    address,
    network: SolNetwork.MAINNET,
  });
  return response.toJSON();
};

export const sellConversation = async (
  conversation: CusConversation,
  ctx: CusContext
) => {
  const id = ctx.update.callback_query?.from.id;

  await ctx.reply("No non-SUI coins found in your wallet.", {
    parse_mode: "HTML",
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Refresh", callback_data: "refresh" },
                { text: "Close", callback_data: "close", },
            ],
        ],
    },
  }
);
  const {
    msg: { text: address },
  } = await conversation.waitFor("message");
  await ctx.reply("Enter the amount to sell:", {
    parse_mode: "HTML",
  });
  let {
    msg: { text: amount },
  } = await conversation.waitFor("message");

  console.log(address, amount);
  if (amount == undefined) amount = "0";

};

export const sell = async (ctx: CallbackQueryContext<CusContext>) => {
  await ctx.conversation.exit();
  await ctx.conversation.reenter("sell");
  await ctx.answerCallbackQuery();
};
