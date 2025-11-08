import { getBinancePrice } from "../../services/getBinancePrice/index.js";
async function binancePrice(ctx) {
  const text = ctx.message.text.split(" ");
  if (text.length < 2) {
    return ctx.reply("⚠️ Usage: /price bitcoin");
  }

  const coin = text[1].toUpperCase();
 console.log(coin);
  try {
    let price = await getBinancePrice(coin);
    ctx.reply(`💰 ${coin.toUpperCase()} price is $${price}`);
  } catch (err) {
    console.error("Network error:", err.message);
    ctx.reply("⚠️ Network error. Please try again later.");
  }
}

export { binancePrice };