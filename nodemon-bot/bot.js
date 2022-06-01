const telegraf = require("telegraf");
const config = require("./config");

const bot = new telegraf.Telegraf(config.TELEGRAM_TOKEN);

bot.on("text", (ctx) => ctx.reply(ctx.message.text));

module.exports = {
  run: function () {
    bot.launch();
    process.on("SIGINT", () => bot.stop());
    process.on("SIGTERM", () => bot.stop());
  },
};
