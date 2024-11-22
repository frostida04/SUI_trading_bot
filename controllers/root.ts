import {CommandContext, Context} from "grammy"
import base58 from "bs58";

import User from "../models/User"

export const start = async (ctx : CommandContext <Context>) => {
    const id = ctx.message?.from.id;

    const referral = ctx.message?.text?.replace("/start", "")?.trim();

    // let user = await User.findOne({ user: id });
    // if(!user){
    //     const newWallet = web3.Keypair.generate();
    //     user = new User({
    //         user: id,
    //         wallet: base58.encode(newWallet.secretKey),
    //     });
    //     await user.save();
    // }



    await ctx.reply(
        `
        <b>Welcome to RondaBot</b>\n\nSui's fastest bot to trade coins, and RONDA's official Telegram trading bot.\n\nYou currently have no SUI balance. Please deposit more funds to your RondaBot wallet:
        \n<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a</code>(Tap to copy)\n\nOnce done tap refresh and your balance will appear here.

To buy a token just enter a token address, or even post the Dexscreener, Birdeye, or Movepump link of the coin.

For more info on your wallet and to retrieve your private key, tap the wallet button below.

We guarantee the safety of user funds on SuibaBot, but if you expose your private key your funds will not be safe.

Bot running slow? Our main bot has many users. Try a backup bot by using /bots`
        ,
        {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Buy", callback_data: "buy" },
                        { text: "Sell & Manage", callback_data: "sell", },
                    ],
                    [
                        { text: "Help", callback_data: "help" },
                        { text: "Refer Friends", callback_data: "refer" },
                    ],
                    [
                        { text: "Setting", callback_data: "setting" },
                        { text: "Wallet", callback_data: "wallet" },
                    ],
                    [
                        { text: "Pin", callback_data: "pin" },
                        { text: "Refresh", callback_data: "refresh" },
                    ],
                    [{ text: "Claim Ronda NFT", callback_data: "claim" }],
                ],
            },
        }
    );
}

export const settings = async (ctx: CommandContext<Context>) => {
    const id = ctx.message?.from.id;

    // let user = await User.findOne({ user: id });

    // if (!user) {
    //     const newWallet = web3.Keypair.generate();
    //     user = new User({
    //     user: id,
    //     wallet: base58.encode(newWallet.secretKey),
    //     });
    //     await user.save();
    // }
    //@ts-ignore
    await ctx.reply(...settingsContent(user));
};

export const help = async (ctx: CommandContext<Context>) => {
    await ctx.reply(
    `Boost Your Trading Profits with the Fastest PUMP.FUN Telegram Bot.\nhttps://t.me/LynxBotHelp`,
    {
        parse_mode: "HTML",
        reply_markup: {
        inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
        },
    }
    );
};

export const chat = async (ctx: CommandContext<Context>) => {
    await ctx.reply(`CHAT`, {
    parse_mode: "HTML",
    reply_markup: {
        inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
    },
    });
};
