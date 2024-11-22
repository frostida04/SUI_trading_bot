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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sell = exports.sellConversation = void 0;
const common_sol_utils_1 = require("@moralisweb3/common-sol-utils");
require("dotenv/config");
const moralis_1 = __importDefault(require("moralis"));
const fetchSolAmount = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield moralis_1.default.SolApi.account.getBalance({
        address,
        network: common_sol_utils_1.SolNetwork.MAINNET,
    });
    return response.toJSON();
});
const getSPL = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield moralis_1.default.SolApi.account.getSPL({
        address,
        network: common_sol_utils_1.SolNetwork.MAINNET,
    });
    return response.toJSON();
});
const sellConversation = (conversation, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    yield ctx.reply("No non-SUI coins found in your wallet.", {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Refresh", callback_data: "refresh" },
                    { text: "Close", callback_data: "close", },
                ],
            ],
        },
    });
    const { msg: { text: address }, } = yield conversation.waitFor("message");
    yield ctx.reply("Enter the amount to sell:", {
        parse_mode: "HTML",
    });
    let { msg: { text: amount }, } = yield conversation.waitFor("message");
    console.log(address, amount);
    if (amount == undefined)
        amount = "0";
});
exports.sellConversation = sellConversation;
const sell = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.conversation.exit();
    yield ctx.conversation.reenter("sell");
    yield ctx.answerCallbackQuery();
});
exports.sell = sell;
