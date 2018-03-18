const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login("NDI0ODEwMDc0Mjc2MzY0Mjg5.DY-S0w.mMUoDDDdxJ3u4ATF6d5aXsv9Ut0");
