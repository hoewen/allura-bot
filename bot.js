const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if(message.content.toLowerCase().includes("zarkon"))
               message.channel.send("We will defeat the Galra!")
      }

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
