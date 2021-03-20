const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'av',
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args 
    */
   run: async(client, message, args)  => {
       const member = message.mentions.members.first() || message.member;
       message.channel.send(
           new MessageEmbed()
           .setTitle(`profielvoto van ${member.user.tag}`)
           .setImage(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
           .setColor('RANDOM')
       )

   }

}
