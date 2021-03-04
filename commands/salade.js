module.exports = {
    name: 'salade',
    description: "dit is salade",
    execute(message, args){
        message.channel.send(process.env.christiaanmusic)
    }
}