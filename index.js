import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import { start } from "./src/commands/start/index.js";
import { help } from "./src/commands/help/index.js";
import { ping } from "./src/commands/ping/index.js";
import { price } from "./src/commands/price/index.js";
dotenv.config();
// ⚠️ Replace with your own bot token from @BotFather
const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error("❌ Missing bot token!");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => await start(ctx));
bot.help(async (ctx) => await help(ctx));
bot.command("ping", async (ctx) => await ping(ctx));

// 💰 /price command using CoinGecko API (works in bash)
bot.command("price", async (ctx) => {
  await price(ctx);
});

bot.launch();
console.log("🤖 Bot is running... Press Ctrl+C to stop.");
