module.exports = {
    name: 'catnoir',

    run: async(client, message, args) => {
        message.channel.send(process.env.catnoir)
    }
}