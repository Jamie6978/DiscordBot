require('dotenv').config()
require('buffer')
require('nodejs-base64-converter')
const { Client } = require('discord.js')
const PREFIX = '$'



const client = new Client({disableEveryone: true })



client.on('ready', () => {
    client.user.setActivity('Jade die schreeuwt in het washok', {type: 'LISTENING' })
})

client.on('message', async message => {
    if(!message.content.startsWith(PREFIX)) return

    const args = message.content.slice(PREFIX.length).trim().split(' ');


    if (message.content.startsWith(`${PREFIX}kanker`)) {
            message.channel.send(process.env.KANKER)
        }
        else if (message.content.startsWith(`${PREFIX}dood`)) {
            message.channel.send('Ik ben dood.')
        }
        else if (message.content.startsWith(`${PREFIX}paraduze`)) {
            message.channel.send(process.env.para)
        }
})

client.login(process.env.TOKEN)




