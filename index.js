  const { Telegraf } = require('telegraf');
  const axios = require('axios');
    const bot = new Telegraf('6058392487:AAHnSQXWoy60jTcg7cQtEz66e-nhWcwbqM4');
  bot.start((ctx) => ctx.reply('Welcome'));
  bot.help((ctx) => ctx.reply('Send me a sticker'));
  bot.on('sticker', (ctx) => ctx.reply('❤️'));
  bot.command('oldschool', (ctx) => ctx.reply('Hello'));
  bot.command('binarysearch',async function (ctx){
    const response=await axios.get('https://raw.githubusercontent.com/singhsanket143/DSA_JS/master/1.AdvancedProblemsOnArraysandObjects/isomorphic_strings.js');
    // console.log(response.data);
    return ctx.reply(response.data);
  })
  bot.launch();