module.exports = {
    name: 'duimpie',
    description: "wap",
    execute(message, args){
        message.channel.send(process.env.duimpie)
    }
}