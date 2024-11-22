import { CallbackQueryContext, Context } from "grammy";
import fetch from "cross-fetch";

import { Conversation, ConversationFlavor } from "@grammyjs/conversations";
import base58 from "bs58";
import "dotenv/config";
import Moralis from "moralis";

type CusContext = Context & ConversationFlavor;
type CusConversation = Conversation<CusContext>;

export const settingConversation = async (
  conversation: CusConversation,
  ctx: CusContext
) => {

  await ctx.reply(`<b>GENERAL SETTINGS</b> \n\n<b>SuibaBot Announcements:</b> Occasional announcements. Tap to toggle.

<b>Minimum Position Value:</b> Minimum position value to show in portfolio. Will hide tokens below this threshold. Tap to edit.

<b>AUTO BUY</b>
Immediately buy when pasting token address. Tap to toggle.

<b>BUTTONS CONFIG</b>
Customize your buy and sell buttons for buy token and manage position. Tap to edit.

<b>SLIPPAGE CONFIG</b>
Customize your slippage settings for buys and sells. Tap to edit.

<b>GAS SETTINGS</b>
Increase your Transaction Priority to improve transaction speed. Select preset or tap to edit.`, {
    parse_mode: "HTML",
    reply_markup: {
        inline_keyboard: [
            [
                { text: "🟢 Announcements", callback_data: "qqwe" },
                { text: "💰 Min Pos Value: $0.01", callback_data: "qwe", },
            ],
            [{ text: " ✅ Auto buy", callback_data: "fqwf" }],
            [
              { text: "🔴 Disabled", callback_data: "qqwe" },
              { text: "✏️ 1 SUI", callback_data: "qwe", },
            ],
            [{ text: "🔘 Buy Buttons", callback_data: "fqwf" }],
            [
              { text: "✏️ Left Buy: 1 SUI", callback_data: "qqwe" },
              { text: "✏️ Right Buy: 10 SUI", callback_data: "qwe", },
            ],
            [{ text: "🔘 Sell Buttons", callback_data: "fqwf" }],
            [
              { text: "✏️ Left Sell: 25%", callback_data: "qqwe" },
              { text: "✏️ Right Sell: 25%", callback_data: "qwe", },
            ],
            [{ text: "🔄 Slippage", callback_data: "fqwf" }],
            [
              { text: "✏️ Buy Slippage: 5%", callback_data: "qqwe" },
              { text: "✏️ Sell Slippage: 5%", callback_data: "qwe", },
            ],
            [{ text: "✏️ MAx Price Impace: 25%", callback_data: "fqwf" }],
            [{ text: "--Gas Setting--", callback_data: "fqwf" }],
            [
              { text: "Custom Gas:", callback_data: "qqwe" },
              { text: "✏️ 0.1 SUI", callback_data: "qwe", },
            ],
            [
              { text: "Refresh", callback_data: "qqwe" },
              { text: "Close", callback_data: "qwe", },
            ],
        ],
    },
  })
};

export const setting = async (ctx: CallbackQueryContext<CusContext>) => {
  await ctx.conversation.exit();
  await ctx.conversation.reenter("setting");
  await ctx.answerCallbackQuery();
};
