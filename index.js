let config = require("./config.json");
let Eris = require("eris");
let c = new Eris.Client(config.token);

c.on("guildMemberAdd", (guild, member) => {
    c.createMessage(guild.defaultChannel.id, `Welcome to Voltron, ${member.user.mention}!`);
})

c.on('messageCreate', msg => {
    if (msg.content.startsWith(c.user.mention))
        msg.channel.createMessage('No.')
})

c.on('error', console.log)

c.connect();
