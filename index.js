const { Client } = require('discord.js-selfbot-v13');
const dotenv = require('dotenv');
require('dotenv').config();
const client = new Client({
    checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`${client.user.username}#${client.user.discriminator} (#${client.user.id}) is ready!`);
})

client.on('message', async (message) => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
});

client.on('message', async (message) => {
    if (message.content === 'choice') {
        const choices = ['rock', 'paper', 'scissors'];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        message.channel.send(randomChoice);
    }
});

client.on('message', async (message) => {
    if (message.content === 'random') {
        const random = Math.floor(Math.random() * 100);
        message.channel.send(`${random}`);
    }
});

client.login(process.env.TOKEN);