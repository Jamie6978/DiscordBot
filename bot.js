require('dotenv').config()
require('buffer')
require('nodejs-base64-converter')
const Discord = require('discord.js')
const PREFIX = '$'
const fs = require('fs');
const mongo = require('mongoose');
const levels = require('discord-xp');
const client = new Discord.Client({disableEveryone: true })
client.login(process.env.TOKEN)

levels.setURL(process.env.MONGODB)

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}


client.on('message', async message =>{
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toString().toLowerCase();

    const randomXP = Math.floor(Math.random() * 9) + 1;
    const hasLeveledUp = await levels.appendXp(message.author.id, message.guild.id, randomXP);
    if (hasLeveledUp) {
        const user = await levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`je bent level omhoog manbro! je ben nu level ${user.level}, en hebt ${user.xp}XP!`);
    }


    if (command === 'salade'){
        client.commands.get('salade').execute(message, args);
    }
    else if (command == 'kk'){
        client.commands.get('kk').run(message, args)
    }
    else if (command == 'av'){
        client.commands.get('av').run(client, message, args);
    }
    else if (command == 'para'){
        client.commands.get('para').run(client, message, args);
    }
    else if (command == 'renskewap'){
        client.commands.get('renskewap').execute(message, args);
    }
    else if(command == 'duimpie'){
        client.commands.get('duimpie').execute(message, args);
    }
    else if(command == 'catnoir'){
        client.commands.get('catnoir').execute(message, args);
    }
    else if(command == 'rank'){
        const user = await levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`je bent nu level ${user.level}!`)
    }
})

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.cache.get(process.env.CHANNEL).send(x.join(" "))
})

client.on('ready', () => {
    client.user.setActivity('Jade die schreeuwt in het washok', {type: 'LISTENING' })
});









