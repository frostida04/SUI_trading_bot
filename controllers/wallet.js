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
exports.withdraw = exports.withdrawConversation = exports.deposit = exports.refresh = exports.exportPrvkeyConfirm = exports.exportPrvkey = exports.resetConfirm = exports.reset = exports.start = void 0;
const walletCardContent = () => {
    return [
        `<b>Your Wallet:</b>\n\nAddress:<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a
    </code>\nBalance: <b>${0}</b> SUI\n\n Tap to copy the address and send SUI to deposit.`,
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
const start = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    //@ts-ignore
    yield ctx.reply(...walletCardContent());
    yield ctx.answerCallbackQuery();
});
exports.start = start;
const reset = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Are you sure you want to reset your <b>LynxBot Wallet</b>?\n\n<b>WARNING: This action is irreversible!</b>\n\nLynxBot will generate a new wallet for you and discard your old one.", {
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
    });
    yield ctx.answerCallbackQuery();
});
exports.reset = reset;
const resetConfirm = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    yield ctx.reply(`<b>Success:</b> Your new wallet is:\n\n<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a</code>\n\nYou can now send SOL to this address to deposit into your new wallet. Press refresh to see your new wallet.`, {
        parse_mode: "HTML",
    });
    yield ctx.answerCallbackQuery();
});
exports.resetConfirm = resetConfirm;
const exportPrvkey = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Are you sure you want to export your <b>Private Key</b>?", {
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
    yield ctx.answerCallbackQuery();
});
exports.exportPrvkey = exportPrvkey;
const exportPrvkeyConfirm = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    yield ctx.reply(`Your <b>Private Key</b> is:
  <code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a</code>
  
   You can now i.e. import the key into a wallet like Solflare. (tap to copy).
  Delete this message once you are done.`, {
        parse_mode: "HTML",
    });
    yield ctx.answerCallbackQuery();
});
exports.exportPrvkeyConfirm = exportPrvkeyConfirm;
const refresh = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    try {
        // @ts-ignore
        yield ctx.editMessageText(...walletCardContent(wallet, balance));
    }
    catch (err) {
        console.log(err);
    }
    yield ctx.answerCallbackQuery();
});
exports.refresh = refresh;
const deposit = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    yield ctx.reply(`To deposit send SOL to below address:\n\n<code>0x09c2c86550b1eadb825922e328cc8eab2c0f91900c193775cae425582aa60d8a}</code>`, {
        parse_mode: "HTML",
    });
    yield ctx.answerCallbackQuery();
});
exports.deposit = deposit;
const withdrawConversation = (conversation, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    yield ctx.reply(`<b>Balance</b>: ${0} SOL\n\nEnter <b>SOL</b> amount to withdraw:`, {
        parse_mode: "HTML",
    });
    let amount;
    yield ctx.reply("Enter recipient address:");
    let recipient;
    do {
        const { msg: { text }, } = yield conversation.waitFor("message");
        try {
            break;
        }
        catch (err) {
            console.log(err);
            yield ctx.reply("<i>Invalid recipient address</i>", {
                parse_mode: "HTML",
            });
        }
    } while (true);
    yield ctx.reply(`<i>Withdrawing SOL...</i>`, {
        parse_mode: "HTML",
    });
});
exports.withdrawConversation = withdrawConversation;
const withdraw = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.conversation.exit();
    yield ctx.conversation.reenter("wallet-withdraw");
    yield ctx.answerCallbackQuery();
});
exports.withdraw = withdraw;
