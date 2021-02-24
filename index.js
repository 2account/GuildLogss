const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client()
const logChannel = 'CHANNEL_ID';

client.on('guildCreate', (guild) => {
    client.channels.cache.get(logChannel).send(
        new MessageEmbed()
        .setTitle('New server!')
        .addField('Server info', `${guild.name} (${guild.id}) **${guild.memberCount} MEMBERS**`)
        .setFooter(`Im now in ${client.guilds.cache.size} servers!`)
        .setThumbnail(guild.iconUrl({ dynamic: true }))
        .setColor('GREEN')
        .setTimestamp()
    )

})

client.on('guildDelete', (guild) => {
    client.channels.cache.get(logChannel).send(
        new MessageEmbed()
        .setTitle('Leaved a server!')
        .addField('Server info', `${guild.name} (${guild.id}) **${guild.memberCount} MEMBERS**`)
        .setFooter(`Im now in ${client.guilds.cache.size} servers!`)
        .setColor('RED')
        .setTimestamp()
    )
    
})



client.login('BOT_TOKEN');