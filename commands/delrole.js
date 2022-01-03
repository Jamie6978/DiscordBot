module.exports = {
    name: 'delrole',
    description: "kanker",
    callback: (message, arguments) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            if (arguments.length > 0) {
                const role = message.guild.roles.find(role => role.name === arguments[0]);
                if (role) {
                    role.delete();
                    message.channel.send('De rol is verwijderd.');
                } else {
                    message.channel.send('Deze rol bestaat niet.');
                }
            } else {
                message.channel.send('Geen rol opgegeven.');
            }
        } else {
            message.channel.send('Je hebt geen toegang tot dit commando.');
        }
    }
    }