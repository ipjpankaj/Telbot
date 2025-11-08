async function help(ctx) {
    await tx.reply("💡 Commands:\n/start - Start bot\n/ping - Test bot\n/price <coin> - Get crypto price");
}

export { help };