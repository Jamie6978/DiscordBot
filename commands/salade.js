module.exports = {
    name: 'salade',
    description: "kanker",
    run: async(message, args) => {
        message.channel.send(process.env.christiaanmusic)
    }
}