import { Telegraf } from 'telegraf'

import * as config from "./config.imba"

const bot = new Telegraf config.TELEGRAM_TOKEN

bot.on "text", do(ctx) ctx.reply ctx.message.text

export def run
	bot.launch!
	process.once "SIGINT", do bot.stop "SIGINT"
	process.once "SIGTERM", do bot.stop "SIGTERM"