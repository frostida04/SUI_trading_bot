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
exports.help = exports.helpConversation = void 0;
require("dotenv/config");
const helpConversation = (conversation, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Blue dog can help you in chat, @RondaOnSuiportal.");
});
exports.helpConversation = helpConversation;
const help = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.conversation.exit();
    yield ctx.conversation.reenter("help");
    yield ctx.answerCallbackQuery();
});
exports.help = help;
