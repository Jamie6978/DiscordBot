module.exports = {
    name: 'renskewap',
    description: "wap",
    execute(message, args){
        message.channel.send(process.env.renskewap)
    }
}