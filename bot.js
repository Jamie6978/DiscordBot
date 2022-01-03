require('dotenv').config()
require('buffer')
require('nodejs-base64-converter')
const Discord = require('discord.js')
const PREFIX = '$'
const fs = require('fs');
const mongo = require('mongoose');
const levels = require('discord-xp');
const catnoir = require('./commands/catnoir')
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
    if (message.author.bot) return;
    if (message.content.startsWith(',', '!', PREFIX)) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toString().toLowerCase();


    const randomXP = Math.floor(Math.random() * 25) + 1;
    const hasLeveledUp = await levels.appendXp(message.author.id, message.guild.id, randomXP);
    if (hasLeveledUp) {
        const user = await levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`je bent level omhoog manbro! je bent nu level ${user.level}!`);
    }
    if (!message.content.startsWith(PREFIX)) return;
    if (command == 'kk'){
        client.commands.get('kk').run(message, args)
    }
    else if (command == 'salade') {
        client.commands.get('salade').run(message, args);
    }
    else if (command == 'av'){
        client.commands.get('av').run(client, message, args);
    }
    else if(command == 'rank'){
        client.commands.get('pog').run(client, message, args);
    }
    else if(command == 'kiss') {
        client.commands.get('kiss').run(client, message, args);
    }
    else if(command == 'kyenna') {
        client.commands.get('kyenna').run(client, message , args);
    }
    else if (command == 'catnoir') {
        client.commands.get('catnoir').run(client, message, args);
    }
    else if (command == 'rule34') {
        client.commands.get('rule34').run(client, message, args);
    }
    else if (command == 'duimpie') {
        client.commands.get('duimpie').run(client, message, args);
    }
    else if (command == 'spotify') {
        client.commands.get('spotify').run(client, message, args);
    }

    else if (command == 'lb' || command == 'leaderboard') {
        const rawLeaderboard = await levels.fetchLeaderboard(message.guild.id, 10)
        const leaderboard = await levels.computeLeaderboard(client, rawLeaderboard)
        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
        message.channel.send(`${lb.join("\n\n")}`)
    }
})

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.cache.get(process.env.CHANNEL).send(x.join(" "))
})

client.on('ready', () => {
    client.user.setActivity(process.env.status, {type: 'PLAYING' })
});






//hoi//


