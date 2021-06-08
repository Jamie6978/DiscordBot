module.exports = {
    name: 'spotify',

    run: async(client, message, args) => {
        const data = getDataSomehow()
        const canvacord = require('canvacord');
        const card = new canvacord.Spotify()
            .setAuthor(data.author)
            .setAlbum(data.album)
            .setStartTimestamp(data.start)
            .setEndTimestamp(data.end)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setTitle(data.title);

        card.build()
        .then(buffer => {
            canvacord.write(buffer, 'spotify.png');
        });
    }


}