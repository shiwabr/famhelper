const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ':'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping' ) {
    msg.reply('Pong!' + client.ping + 'ms');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'shiwa') {
    msg.reply('He is my master and creator!');
  }
});

client.login('NTMwMzE3OTU4MzI1NjAwMjY2.Dw9pLw.8OTRqiS-khqdrvxmpc6x4Y7uqqY');