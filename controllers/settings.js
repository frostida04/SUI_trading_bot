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
exports.setting = exports.settingConversation = void 0;
require("dotenv/config");
const settingConversation = (conversation, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(`<b>GENERAL SETTINGS</b> \n\n<b>SuibaBot Announcements:</b> Occasional announcements. Tap to toggle.

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
    });
});
exports.settingConversation = settingConversation;
const setting = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.conversation.exit();
    yield ctx.conversation.reenter("setting");
    yield ctx.answerCallbackQuery();
});
exports.setting = setting;
