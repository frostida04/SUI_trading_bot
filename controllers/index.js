"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.claim = exports.setting = exports.common = exports.refer = exports.sell = exports.help = exports.buy = exports.wallet = exports.root = void 0;
exports.root = __importStar(require("./root"));
exports.wallet = __importStar(require("./wallet"));
exports.buy = __importStar(require("./buy"));
exports.help = __importStar(require("./help"));
exports.sell = __importStar(require("./sell"));
exports.refer = __importStar(require("./refer"));
exports.common = __importStar(require("./common"));
exports.setting = __importStar(require("./settings"));
exports.claim = __importStar(require("./claim"));
