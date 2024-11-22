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
exports.buy = exports.buyConversation = void 0;
require("dotenv/config");
// const connection = new web3.Connection(process.env.RPC_URL as string, {
//   confirmTransactionInitialTimeout: 120000, // 60 seconds
// });
const buyConversation = (conversation, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("To buy a token please enter the Dexscreener, Birdeye, or Movepump link or contract below to begin.");
    const { msg: { text: address }, } = yield conversation.waitFor("message");
    yield ctx.reply("Enter the amount to buy:", {
        parse_mode: "HTML",
    });
    let { msg: { text: amount }, } = yield conversation.waitFor("message");
    console.log(address, amount);
});
exports.buyConversation = buyConversation;
const buy = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.conversation.exit();
    yield ctx.conversation.reenter("buy");
    yield ctx.answerCallbackQuery();
});
exports.buy = buy;
