import { CallbackQueryContext, Context } from "grammy";


import base58 from "bs58";
import { Conversation, ConversationFlavor } from "@grammyjs/conversations";


type CusContext = Context & ConversationFlavor;
type CusConversation = Conversation<CusContext>;

const walletCardContent = () => {
  return [
    `<b>Your Wallet:</b>\n\nAddress:<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a
    </code>\nBalance: <b>${
      0
    }</b> SUI\n\n Tap to copy the address and send SUI to deposit.`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "View on SuiScan",
              url: `https://suiscan.xyz/mainnet/account/0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a`,
            },
            { text: "Close", callback_data: "cancel" },
          ],
          [{ text: "Buy/Get SUI", callback_data: "wallet_refresh" }],
          [
            { text: "Withdraw all SUI", callback_data: "wallet_deposit" },
            {
              text: "Withdraw X SOL",
              callback_data: "wallet_withdraw",
            },
          ],
          [
            { text: "Reset Wallet", callback_data: "wallet_reset" },
            {
              text: "Export Private Key",
              callback_data: "wallet_export",
            },
          ],
          [{ text: "Refresh", callback_data: "wallet_refresh" }],
        ],
      },
    },
  ];
};

export const start = async (ctx: CallbackQueryContext<Context>) => {
  const id = ctx.update.callback_query?.from.id;

  

  //@ts-ignore
  await ctx.reply(...walletCardContent());
  await ctx.answerCallbackQuery();
};

export const reset = async (ctx: CallbackQueryContext<Context>) => {
  await ctx.reply(
    "Are you sure you want to reset your <b>LynxBot Wallet</b>?\n\n<b>WARNING: This action is irreversible!</b>\n\nLynxBot will generate a new wallet for you and discard your old one.",
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Cancel", callback_data: "cancel" },
            {
              text: "Confirm",
              callback_data: "wallet_reset_confirm",
            },
          ],
        ],
      },
    }
  );
  await ctx.answerCallbackQuery();
};

export const resetConfirm = async (ctx: CallbackQueryContext<Context>) => {
  const id = ctx.update.callback_query?.from.id;


  await ctx.reply(
    `<b>Success:</b> Your new wallet is:\n\n<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a</code>\n\nYou can now send SOL to this address to deposit into your new wallet. Press refresh to see your new wallet.`,
    {
      parse_mode: "HTML",
    }
  );
  await ctx.answerCallbackQuery();
};

export const exportPrvkey = async (ctx: CallbackQueryContext<Context>) => {
  await ctx.reply("Are you sure you want to export your <b>Private Key</b>?", {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Cancel", callback_data: "cancel" },
          {
            text: "Confirm",
            callback_data: "wallet_export_confirm",
          },
        ],
      ],
    },
  });
  await ctx.answerCallbackQuery();
};

export const exportPrvkeyConfirm = async (
  ctx: CallbackQueryContext<Context>
) => {
  const id = ctx.update.callback_query?.from.id;
  
  await ctx.reply(
    `Your <b>Private Key</b> is:
  <code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a</code>
  
   You can now i.e. import the key into a wallet like Solflare. (tap to copy).
  Delete this message once you are done.`,
    {
      parse_mode: "HTML",
    }
  );
  await ctx.answerCallbackQuery();
};

export const refresh = async (ctx: CallbackQueryContext<Context>) => {
  const id = ctx.update.callback_query?.from.id;


  try {
    // @ts-ignore
    await ctx.editMessageText(...walletCardContent(wallet, balance));
  } catch (err) {
    console.log(err);
  }
  await ctx.answerCallbackQuery();
};

export const deposit = async (ctx: CallbackQueryContext<Context>) => {
  const id = ctx.update.callback_query?.from.id;

  await ctx.reply(
    `To deposit send SOL to below address:\n\n<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a}</code>`,
    {
      parse_mode: "HTML",
    }
  );
  await ctx.answerCallbackQuery();
};

export const withdrawConversation = async (
  conversation: CusConversation,
  ctx: CusContext
) => {
  const id = ctx.update.callback_query?.from.id;

  
  await ctx.reply(
    `<b>Balance</b>: ${
      0
    } SOL\n\nEnter <b>SOL</b> amount to withdraw:`,
    {
      parse_mode: "HTML",
    }
  );
  let amount;
 
  await ctx.reply("Enter recipient address:");
  let recipient;
  do {
    const {
      msg: { text },
    } = await conversation.waitFor("message");
    try {
      break;
    } catch (err) {
      console.log(err);
      await ctx.reply("<i>Invalid recipient address</i>", {
        parse_mode: "HTML",
      });
    }
  } while (true);
  await ctx.reply(`<i>Withdrawing SOL...</i>`, {
    parse_mode: "HTML",
  });

};

export const withdraw = async (ctx: CallbackQueryContext<CusContext>) => {
  await ctx.conversation.exit();
  await ctx.conversation.reenter("wallet-withdraw");

  await ctx.answerCallbackQuery();
};
