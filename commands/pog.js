const levels = require('discord-xp');
const canvacord = require('canvacord');
const Discord = require('discord.js');
const { description } = require('./kk');
const { name } = require('./salade');


module.exports = {

    name: "rank",

    run: async (client, message, args) => {
    const target = message.author;

    const user = await levels.fetch(target.id, message.guild.id);

    if (!user) return message.reply('je hebt geen xp noob')

    const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({dynamic: false, format: 'png' }))
        .setCurrentXP(user.xp)
        .setLevel(user.level)
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXp)
        .setStatus(message.member.presence.status)
        .setProgressBar('#1edb14', "COLOR")
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
    rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, `kanker.png`)
        message.channel.send(attachment);
        })
    }
}