"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    user: {
        type: Number,
        required: true,
        unique: true,
    },
    wallet: {
        type: String,
    },
    slippage: {
        type: Number,
        default: 15,
    },
    fee: {
        type: Number,
        default: 0.001,
    },
    autobuy: {
        actived: {
            type: Boolean,
        },
        amount: {
            type: Number,
        },
    },
    refer: {
        code: {
            type: String,
        },
        counts: {
            type: Number,
        },
        referred: {
            type: String,
        },
    },
    trades: [
        {
            asset: String,
            tx: String,
            amount: String,
        },
    ],
    latest: {
        type: Boolean,
    },
    buys: [{ type: Number }],
    sells: [{ type: Number }],
});
const User = mongoose_1.default.model("user", UserSchema);
exports.default = User;
