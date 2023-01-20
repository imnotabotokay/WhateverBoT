const Discord = require('discord.js-selfbot-v13');
const selfbot = new Discord.Client({
    checkUpdate: false,
});

selfbot.on('messageCreate', message => {
    // Ignore messages that are sent by the bot itself
    if (message.author.id === selfbot.user.id) return;

    // Scrape the message and send it to another server
    if (message.channel.id === '1060578110954819664') {
        let targetServer = selfbot.guilds.cache.get('1060253778491752569');
        let targetChannel = targetServer.channels.cache.get('1060577543633252392');

        // Send the message content
        if (message.content) {
            try {
                targetChannel.send(message.content);
            } catch (err) {
                console.log(`An error occurred when trying to send the message: ${err}`);
            }
        }

        // Send the attachments
        message.attachments.forEach(attachment => {
            targetChannel.send({ files: [attachment.url] });
        });

        // Send the embeds
        message.embeds.forEach(embed => {
            try {
                targetChannel.send({ embed });
            } catch (err) {
                console.log(`An error occurred when trying to send the embed: ${err}`);
            }
        });
    }
});

// Start the bot using your account token
selfbot.login('OTcyOTU1MDMyNzE2NzM4NTkx.GLkTt1.vlnWzZBfLwUGRKKb_wbxKrSJqgbta2kexRKohA');
