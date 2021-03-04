const { Client, Message, Util } = require('discord.js');

module.exports = {
    name: 'av',
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args 
    */
   run: async(client, message, args)  => {
       message.channel.send(client.emojis.get(emoji).url)

   }
}