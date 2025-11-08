import { apiClient } from "../apiClient/index.js";
import dotenv from "dotenv";
dotenv.config();
async function getBinancePrice(coin) {
    const data = await apiClient(process.env.BINANCE_URL + `?symbol=${coin}`  , {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log("bndata", data);
    // Check if API returned an error
    if (!data || data.code) {
        return `❌ Error: ${data?.msg || 'Invalid coin name or network error'}. Example: /price bitcoin`;
    }
    
    // Binance API returns { symbol: "BTCUSDT", price: "50000.00" }
    if (data.price) {
        return parseFloat(data.price);
    }
    
    return "❌ Invalid response from API";
}

export { getBinancePrice };