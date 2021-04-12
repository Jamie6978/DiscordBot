module.exports = {
    name: 'catnoir',
    description: "kanker kat",
    execute(message, args){
        message.channel.send(process.env.catnoir)
    }
}