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
    client.guilds.get(member.guild.id).channels.get("431316521936224260").send(`Olá {user} Bem-Vindo ao Servidor **VDD** Espero que Curta o Servidor. `);
   })
        
    
});

client.login(token)


client.on("message", (message) => {

    if(message.content.startsWith(prefix + "avatar")){
        let user = message.mentions.users.first(); 
        if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
        if (message.mentions.users.size < 1) return message.channel.sendMessage({
        "embed": {
          "description": "**" + message.author.username + "**",
          "color": 16711680,
          "image": {
          message.reply("Aqui está seu Avatar")
            "url": message.author.displayAvatarURL
          }
        }
      });
      message.channel.sendMessage({
        "embed": {
          "description": "**" + message.mentions.users.first().username + "**",
          "color": 16711680,
          "image": {
          }
       }
  });
