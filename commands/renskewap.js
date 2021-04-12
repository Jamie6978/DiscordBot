module.exports = {
    name: 'renskewap',
    description: "renzke",
    execute(message, args){
        message.channel.send(process.env.renskewap)
    }
}