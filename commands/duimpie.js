module.exports = {
    name: 'duimpie',

    run: async(client, message, args) => {
        message.channel.send(process.env.duimpie)
    }
}