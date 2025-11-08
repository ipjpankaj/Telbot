import { getPrice } from "../../services/index.js";
async function coinGeckoPrice(ctx) {
  const text = ctx.message.text.split(" ");
  if (text.length < 2) {
    return ctx.reply("⚠️ Usage: /price bitcoin");
  }

  const coin = text[1].toLowerCase();
//   console.log(coin);
  try {
    let price = await getPrice(coin);
    ctx.reply(`💰 ${coin.toUpperCase()} price is $${price}`);
  } catch (err) {
    console.error("Network error:", err.message);
    ctx.reply("⚠️ Network error. Please try again later.");
  }
}

export { coinGeckoPrice };