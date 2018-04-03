console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    max_message_cache: 0
});
const moment = require('moment');
moment.locale('pt-BR');

const prefix = "-"
const token = process.env.token;

client.on('guildMemberAdd', member => {
    client.guilds.get(member.guild.id).channels.get("426712660453752872").send(`kk eae ${member}, Bem-vindo ao **Servidor do Noobs,** Espero que curta o servidor.  `);
   })

client.on("ready", () => {

    let string = ''
    for (var i = 0; i < client.users.size; i++) {

        let userStatus = {
            online: 'online',
            idle: 'ausente',
            dnd: 'ocupado',
            offline: 'offline'
        }[client.users.array()[i].presence.status]

        string += "     - " + client.users.array()[i].username + " ( " + userStatus + " ) ,\n";
    }

    const membrosNomes = string
    var statusIDO = ["idle", "dnd", "online", ]
    var jogando = [`Digite -ajuda para ver meus comandos.`, `Divulgue o servidor pros parças, use: -convite`, `Visite o Canal da Twitch do Noobs use: -twitch`, `Entre no servidor do nosso Parceiro, use: -player`, `Para receber cargos de jogos, utilize a sala registro`, `Servidor do Noobs ${client.users.size} membros. `,] 

    console.log(`Conectado !`)
    setTimeout(function() {
        console.log(`                   ---== NOOBS EVOLUTION ==---                 \n\nMembros: (${client.users.size}):\n\n${membrosNomes}`);
    }, 2000)
    client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/noobsevolution");
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    setInterval(() => {
        client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/noobsevolution");
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)
    client.guilds.get("304254306054307850").channels.get("426712660453752872").sendMessage("**:warning: Fui Reiniciado Automaticamente.**");
    
});


client.login(token)


client.on("message", (message) => {

    if(message.content.startsWith(prefix + "twitch")){
        message.reply("**Canal da Twitch: https://www.twitch.tv/noobsevolution :smile:**");
    }

    if(message.content.startsWith(prefix + "convite")){
        message.reply("**Convide seus amigos para o servidor: https://discord.gg/noobsevolution**");
    }

    if(message.content.startsWith(prefix + "ajuda")){
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤㅤㅤㅤㅤㅤ**:pushpin:  HELP  :pushpin:** ㅤㅤㅤㅤㅤㅤ\nㅤ\n**Comandos:**\n-musicas\n-twitch\n-convite\n-avatar\n-player",
              "color": 16711680,
              "thumbnail": {
                "url": "https://imgur.com/b733f0a5-5b66-4066-81e9-47afcb37e4df"
              }
            }
          });
    }

    if(message.content.startsWith(prefix + "player")){
        message.reply("**Servidor do nosso parceiro: https://discord.gg/swacvgR**");
    }

    if(message.content.startsWith(prefix + "avatar")){
        let user = message.mentions.users.first(); 
        if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
        if (message.mentions.users.size < 1) return message.channel.sendMessage({
        "embed": {
          "description": "**" + message.author.username + "**",
          "color": 16711680,
          "image": {
            "url": message.author.displayAvatarURL
          }
        }
      });
      message.channel.sendMessage({
        "embed": {
          "description": "**" + message.mentions.users.first().username + "**",
          "color": 16711680,
          "image": {
            "url": message.mentions.users.first().displayAvatarURL
          }
        }
      })
    }

    if(message.content.startsWith(prefix + "musicas")){
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤㅤㅤㅤㅤㅤㅤ**:musical_note:  Comandos de Músicas  :musical_note:** ㅤㅤㅤㅤㅤㅤ\nㅤ\n**Todos os Comandos:**",
              "color": 16711680,
              "thumbnail": {
                "url": "https://i.imgur.com/iVn9gsZ.jpg"
              },
              "fields": [
                {
                  "name": ":fire: Sagiri:",
                  "value": "**-** ;tocar\n**-** ;pular\n**-** ;pausar\n**-** ;retomar\n**-** ;volume\n**-** ;votar",
                  "inline": true
             
                }
              ]
            }
          });
    }

})
