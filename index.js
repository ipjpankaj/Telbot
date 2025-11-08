import { Telegraf } from "telegraf";

// ⚠️ Replace with your own bot token from @BotFather
const BOT_TOKEN = "8587749749:AAGGUm8eRgJDHa8OpvAqD5aSIIE5FzMO88A";

if (!BOT_TOKEN) {
  console.error("❌ Missing bot token!");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply("👋 Welcome! Use /price <coin> to check crypto prices."));
bot.help((ctx) => ctx.reply("💡 Commands:\n/start - Start bot\n/ping - Test bot\n/price <coin> - Get crypto price"));
bot.command("ping", (ctx) => ctx.reply("🏓 Pong!"));

// 💰 /price command using CoinGecko API (works in bash)
bot.command("price", async (ctx) => {
  const text = ctx.message.text.split(" ");
  if (text.length < 2) {
    return ctx.reply("⚠️ Usage: /price bitcoin");
  }

  const coin = text[1].toLowerCase();
console.log(coin);
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`);
    const data = await res.json();

    if (!data[coin]) {
      return ctx.reply("❌ Invalid coin name. Example: /price bitcoin");
    }

    const price = data[coin].usd;
    ctx.reply(`💰 ${coin.toUpperCase()} price is $${price}`);
  } catch (err) {
    console.error("Network error:", err.message);
    ctx.reply("⚠️ Network error. Please try again later.");
  }
});

bot.launch();
console.log("🤖 Bot is running... Press Ctrl+C to stop.");
