import { apiClient } from "./apiClient/index.js";
import dotenv from "dotenv";
dotenv.config();
async function getPrice(coin) {
    const data = await apiClient(process.env.COIN_GECKO_URL + `?ids=${coin}&vs_currencies=usd`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }   );
    if (!data[coin]) {
      return "❌ Invalid coin name. Example: /price bitcoin";
    }

    return data[coin].usd;
}

export { getPrice };