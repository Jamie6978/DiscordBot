const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'para',
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args 
    */
   run: async(client, message, args)  => {
       message.channel.send(process.env.para)
   }

}