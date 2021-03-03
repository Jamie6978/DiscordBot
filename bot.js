require('dotenv').config()
require('buffer')
require('nodejs-base64-converter')
const { Client } = require('discord.js')
const PREFIX = '$'



const client = new Client({disableEveryone: true })

const status = (process.env.status)



client.on('ready', () => console.log("BEN KLAAR VOOR DE GEBRUIK WOLLAH"))

client.on('message', async message => {
    if(!message.content.startsWith(PREFIX)) return

    const args = message.content.slice(PREFIX.length).trim().split(' ');


    if (message.content.startsWith(`${PREFIX}kanker`)) {
            message.channel.send(process.env.KANKER)
        }
        else if (message.content.startsWith(`${PREFIX}dood`)) {
            message.channel.send('Ik ben dood.')
        }
})

client.login(process.env.TOKEN)

client.user.setPresence(status, {type: "PLAYING"})
