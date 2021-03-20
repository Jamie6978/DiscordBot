const { Attachment } = require('discord.js');

module.exports.run = async (client, message, args) => {
  try {
    const [result] = await google.search('John Cena', { page: 1 });

    if (!result) return await message.channel.send(':x: No images found!');

    const attachment = new Attachment(result.url);
    await message.channel.send(attachment);
  } catch(err) {
    console.error(err);
  }
};