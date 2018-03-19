const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("zarkon")) {
               message.channel.send("We will defeat the Galra!")
               }
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("alfor"))
               message.channel.send("My father was... a wonderful man. I hope to follow in his footsteps someday.")
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
