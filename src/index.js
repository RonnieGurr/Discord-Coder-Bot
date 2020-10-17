require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const python =  require('./data/python');
const html =  require('./data/html');
const javascript =  require('./data/javascript');
const css =  require('./data/css');
const sql =  require('./data/sql');
const php =  require('./data/php');
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

        let selector
        langs.map(lang => {
            if (lang === msg.content.split(' ')[1].toUpperCase()) {
                selector = true
            }
        })

        if (msg.content[3] && selector) {
            let lang = msg.content.split(' ')[1].toUpperCase()
            console.log(lang)
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
                       let replyMsg = ''
                        results.map(link => {
                            replyMsg += link.url + '\n'
                        })
                        msg.reply('this is what I found:\n' + replyMsg)
                   } else {
                       msg.reply('Sorry I was unable to find that! Try !Coder help.')
                   }                    
                   break;

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
                       let replyMsg = ''
                       results.map(link => {
                            replyMsg += link.url + '\n'
                       })
                       msg.reply('this is what I found:\n' + replyMsg)
                   } else {
                       msg.reply('Sorry I was unable to find that! Try !Coder help.')
                   }
                   break;

                case 'CSS':
                    var results = []
                    searchParams.map((element, index) => {
                        css.map(link => {
                            let name = link.name.toLowerCase().split(' ')
                            if (index > 1 && name.indexOf(element) > -1) {
                                results.push(link)
                            }
                        })
                    })

                   if (results.length > 0) {
                       let replyMsg = ''
                       results.map(link => {
                            replyMsg += link.url + '\n'
                       })
                       msg.reply('this is what I found:\n' + replyMsg)
                   } else {
                       msg.reply('Sorry I was unable to find that! Try !Coder help.')
                   }
                   break;

                case 'SQL':
                    var results = []
                    searchParams.map((element, index) => {
                        sql.map(link => {
                            let name = link.name.toLowerCase().split(' ')
                            if (index > 1 && name.indexOf(element) > -1) {
                                results.push(link)
                            }
                        })
                    })

                   if (results.length > 0) {
                       let replyMsg = ''
                       results.map(link => {
                            replyMsg += link.url + '\n'
                       })
                       msg.reply('this is what I found:\n' + replyMsg)
                   } else {
                       msg.reply('Sorry I was unable to find that! Try !Coder help.')
                   }
                   break;

                case 'PHP':
                    var results = []
                    searchParams.map((element, index) => {
                        php.map(link => {
                            let name = link.name.toLowerCase().split(' ')
                            if (index > 1 && name.indexOf(element) > -1) {
                                results.push(link)
                            }
                        })
                    })

                   if (results.length > 0) {
                       let replyMsg = ''
                       results.map(link => {
                            replyMsg += link.url + '\n'
                       })
                       msg.reply('this is what I found:\n' + replyMsg)
                   } else {
                       msg.reply('Sorry I was unable to find that! Try !Coder help.')
                   }
                   break;
                   
                default:
                    break;
            
                }
        } else {
            msg.reply('I couldnt find that language.')
        }

        }
    }
});
