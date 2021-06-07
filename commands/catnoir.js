module.exports = {
    name: 'catnoir',
    description: "kanker kat",
    run: async(client, message, args) => {
        message.channel.send(process.env.catnoir)
    }
}