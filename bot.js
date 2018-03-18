const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("zarkon")) {
               message.channel.send("We will defeat the Galra!")
               }
      })

client.on('guildMemberAdd', member => {
    member.guild.channels.get('424310753940733963').send('Welcome, Paladin' + member.displayName + ' to Voltron!')
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
