module.exports = {
    name: 'kanker',
    description: "kanker",
    execute(message, args){
        message.channel.send(process.env.KANKER)
    }
}