import { Bot, Context, session ,CallbackQueryContext} from "grammy";
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from "@grammyjs/conversations";
import Moralis from "moralis";

import config from "./config"

import connectDB from "./config/db";
import {
    root,
    refer,
    wallet,
    buy,
    sell,
    help,
    setting,
    common,
    claim
} from "./controllers"

import { cancel } from './controllers/common';

Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
});

type CusContext = Context & ConversationFlavor;

const bot = new Bot<CusContext>(config.TG_BOT_TOKEN);


(async function () {
    try {
        await connectDB();
        bot.use(
        session({
            initial() {return {};},
        })
        );

        bot.use(conversations());
        bot.command("start" , root.start);
        bot.command("settings", root.settings);
        bot.command("help", root.help);
        bot.command("chat", root.chat);
        bot.callbackQuery("cancel", common.cancel);

        // wallet callback
        bot.callbackQuery("wallet", wallet.start);
        bot.callbackQuery("wallet_reset", wallet.reset);
        bot.callbackQuery("wallet_reset_confirm", wallet.resetConfirm);
        bot.callbackQuery("wallet_export", wallet.exportPrvkey);
        bot.callbackQuery("wallet_export_confirm", wallet.exportPrvkeyConfirm);
        bot.callbackQuery("wallet_refresh", wallet.refresh);
        bot.callbackQuery("wallet_deposit", wallet.deposit);
        bot.use(createConversation(wallet.withdrawConversation, "wallet-withdraw"));
        bot.callbackQuery("wallet_withdraw", wallet.withdraw);


          // buy callback
        bot.use(createConversation(buy.buyConversation, "buy"));
        bot.callbackQuery("buy", buy.buy);

        // sell callback
        bot.use(createConversation(sell.sellConversation, "sell"));
        bot.callbackQuery("sell", sell.sell);

        bot.use(createConversation(help.helpConversation, "help"));
        bot.callbackQuery("help", help.help);

        bot.use(createConversation(setting.settingConversation, "setting"));
        bot.callbackQuery("setting", setting.setting);

        // refer callback
        bot.callbackQuery("refer", refer.start);
        // claim callback
        bot.use(createConversation(claim.claimConversation, "claim"));
        bot.callbackQuery("claim", claim.claim);


        bot.catch((err) => console.log(err));
        bot.start();
    }
    catch (err) {
        console.log(err);
    }
})();