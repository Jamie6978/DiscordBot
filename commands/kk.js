module.exports = {
    name: 'kk',
    description: "kanker",
    run: async(message, args) => {
        message.channel.send(process.env.KANKER)
    }
}