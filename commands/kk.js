module.exports = {
    name: 'kanker',
    description: "kanker",
    run: async(message, args) => {
        message.channel.send(process.env.KANKER)
    }
}