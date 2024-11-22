"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = exports.help = exports.settings = exports.start = void 0;
const start = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const id = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.from.id;
    const referral = (_d = (_c = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.replace("/start", "")) === null || _d === void 0 ? void 0 : _d.trim();
    // let user = await User.findOne({ user: id });
    // if(!user){
    //     const newWallet = web3.Keypair.generate();
    //     user = new User({
    //         user: id,
    //         wallet: base58.encode(newWallet.secretKey),
    //     });
    //     await user.save();
    // }
    yield ctx.reply(`
        <b>Welcome to RondaBot</b>\n\nSui's fastest bot to trade coins, and RONDA's official Telegram trading bot.\n\nYou currently have no SUI balance. Please deposit more funds to your RondaBot wallet:
        \n<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a</code>(Tap to copy)\n\nOnce done tap refresh and your balance will appear here.

To buy a token just enter a token address, or even post the Dexscreener, Birdeye, or Movepump link of the coin.

For more info on your wallet and to retrieve your private key, tap the wallet button below.

We guarantee the safety of user funds on SuibaBot, but if you expose your private key your funds will not be safe.

Bot running slow? Our main bot has many users. Try a backup bot by using /bots`, {
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
    });
});
exports.start = start;
const settings = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.from.id;
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
    yield ctx.reply(...settingsContent(user));
});
exports.settings = settings;
const help = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(`Boost Your Trading Profits with the Fastest PUMP.FUN Telegram Bot.\nhttps://t.me/LynxBotHelp`, {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
        },
    });
});
exports.help = help;
const chat = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(`CHAT`, {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
        },
    });
});
exports.chat = chat;
