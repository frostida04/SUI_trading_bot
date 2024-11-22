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
exports.start = void 0;
const User_1 = __importDefault(require("../models/User"));
const crypto_1 = __importDefault(require("crypto"));
const bs58_1 = __importDefault(require("bs58"));
const start = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const id = (_a = ctx.update.callback_query) === null || _a === void 0 ? void 0 : _a.from.id;
    let user = yield User_1.default.findOne({ user: id });
    if (!user) {
        return;
    }
    if (!((_b = user.refer) === null || _b === void 0 ? void 0 : _b.code)) {
        const code = bs58_1.default.encode(crypto_1.default.randomBytes(6));
        user.refer = {
            code: `ref_${code}`,
            counts: 0,
            referred: (_c = user.refer) === null || _c === void 0 ? void 0 : _c.referred,
        };
        yield user.save();
    }
    yield ctx.reply(`<b>Referrals</b>:

Your reflink: https://t.me/Trading_Ronda_bot?start=${user.refer.code}

Referrals: <b>${user.refer.counts}</b>

Pending Rewards: 0.00 SUI ($0.00)
Lifetime Earned: 0.00 SUI ($0.00)

Refer a friend and earn <b>40%</b> of their fees.

Referrals are processed approximately every 24 hours. The associated rewards are automatically added to your balance.`, {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
        },
    });
});
exports.start = start;
