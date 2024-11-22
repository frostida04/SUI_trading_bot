import { CallbackQueryContext, Context } from "grammy";
import User from "../models/User";
import crypto from "crypto";
import base58 from "bs58";

export const start = async (ctx: CallbackQueryContext<Context>) => {
  const id = ctx.update.callback_query?.from.id;

  let user = await User.findOne({ user: id });

  if (!user) {
    return;
  }

  if (!user.refer?.code) {
    const code = base58.encode(crypto.randomBytes(6));
    user.refer = {
      code: `ref_${code}`,
      counts: 0,
      referred: user.refer?.referred,
    };
    await user.save();
  }

  await ctx.reply(
    `<b>Referrals</b>:

Your reflink: https://t.me/Trading_Ronda_bot?start=${user.refer.code}

Referrals: <b>${user.refer.counts}</b>

Pending Rewards: 0.00 SUI ($0.00)
Lifetime Earned: 0.00 SUI ($0.00)

Refer a friend and earn <b>40%</b> of their fees.

Referrals are processed approximately every 24 hours. The associated rewards are automatically added to your balance.`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "Close", callback_data: "cancel" }]],
      },
    }
  );
};
