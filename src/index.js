require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const python =  require('./data/python');
const html =  require('./data/html');
const langs = require('./data/languages');

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '!Coder help' || msg.content === '!coder help') {

    msg.reply('Usage: !Coder LANG SEARCH \n Example: !Coder Python functions')

  } else if (msg.content.split(' ')[0] === '!coder' || msg.content.split(' ')[0] === '!Coder') {
    if (!msg.content.split(' ')[1]) {
        msg.reply('Error: missing param, please input a language!')
    } else {

        let selector = langs.find(lang => {
            if (lang === msg.content.split(' ')[1].toUpperCase()) {
                return true
            } else {
                return false
            }
        })

        if (selector && msg.content.split(' ').length > 1) {
            let lang = msg.content.split(' ')[1].toUpperCase()
            let searchParams = msg.content.toLowerCase().trimEnd().split(' ')

            switch (lang) {
                case 'HTML':
                    var results = []
                    searchParams.map((element, index) => {
                        html.map(link => {
                            let name = link.name.toLowerCase().split(' ')
                            if (index > 1 && name.indexOf(element) > -1) {
                                results.push(link)
                            }
                        })
                    })

                   if (results.length > 0) {
                       let replyMsg = results.map(link => {
                           return link.url
                       })
                       msg.reply(replyMsg)
                   } else {
                       msg.reply('Sorry I was unable to find that!')
                   }                    break;
                case 'PYTHON':
                    var results = []
                    searchParams.map((element, index) => {
                        python.map(link => {
                            let name = link.name.toLowerCase().split(' ')
                            if (index > 1 && name.indexOf(element) > -1) {
                                results.push(link)
                            }
                        })
                    })

                   if (results.length > 0) {
                       let replyMsg = results.map(link => {
                           return link.url
                       })
                       msg.reply(replyMsg)
                   } else {
                       msg.reply('Sorry I was unable to find that!')
                   }
                default:
                    break;
            
                }
        } else {
            msg.reply('Sorry I couldn\'t seem to find that!')
        }

        }
    }
});
