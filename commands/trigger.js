const canva = require('canvacord')
const Discord = require('discord.js')


module.exports = {
    name: 'kiss',
    
    async run (client, message, args){
        const member = message.mentions.members.first();

        let avatar = await message.author.displayAvatarURL({dynamic: false, format: 'png'});
        let avatar2 = await member.user.displayAvatarURL({dynamic: false, format: 'png'});

        let image = await canva.Canvas.kiss(avatar, avatar2);

        let kiss = new Discord.MessageAttachment(image, 'kiss.png')

        message.channel.send(kiss)
    }

}


