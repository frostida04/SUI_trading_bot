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
exports.claim = exports.claimConversation = void 0;
require("dotenv/config");
const claimConversation = (conversation, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Sorry you did not qualify for the free mint. If this is an error, please go to @RondaOnSuiportal.", {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
        },
    });
});
exports.claimConversation = claimConversation;
const claim = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.conversation.exit();
    yield ctx.conversation.reenter("claim");
    yield ctx.answerCallbackQuery();
});
exports.claim = claim;
