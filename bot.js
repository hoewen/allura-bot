const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("zarkon")) {
               message.channel.send("We will defeat the Galra!")
               }
     
     client.on('ready', () => {
  console.log('I am ready!');
     
});

client.on('guildMemberAdd', member => {
       member.guild.defaultChannel.send(`Welcome to Voltron, paladin ${member}!`);
       console.log(`${member.user.username} has joined the Voltron coalition`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
