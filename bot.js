require('dotenv').config()
require('buffer')
require('nodejs-base64-converter')
const Discord = require('discord.js')
const PREFIX = '$'
const fs = require('fs');
const client = new Discord.Client({disableEveryone: true })


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}


client.on('message', message =>{
    if (!message.content.startsWith(PREFIX)) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toString().toLowerCase();

    if (command === 'salade'){
        client.commands.get('salade').execute(message, args);
    }
    else if (command == 'kanker'){
        client.commands.get('kanker').execute(message, args)
    }
    else if (command == 'av'){
        client.commands.get('av').run(client, message, args);
    }
    else if (command == 'para'){
        client.commands.get('para').run(client, message, args);
    }
})

client.on('ready', () => {
    client.user.setActivity('Jade die schreeuwt in het washok', {type: 'LISTENING' })
})




client.login(process.env.TOKEN)




