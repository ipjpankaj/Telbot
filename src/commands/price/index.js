import { getPrice } from "../../services/index.js";
async function price(ctx) {
  const text = ctx.message.text.split(" ");
  if (text.length < 2) {
    return ctx.reply("⚠️ Usage: /price bitcoin");
  }

  const coin = text[1].toLowerCase();
  try {
    let price = await getPrice(coin);
    console.log(price);
    ctx.reply(`💰 ${coin.toUpperCase()} price is $${price}`);
  } catch (err) {
    console.error("Network error:", err.message);
    ctx.reply("⚠️ Network error. Please try again later.");
  }
}

export { price };