module.exports = {
    name: 'catnoir',
    description: "kanker kat",
    run(message, args){
        message.channel.send(process.env.catnoir)
    }
}