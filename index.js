const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Listo!');
});

client.on('message', message => {
  if(message.content == '+ping'){
    message.channel.send('PONG, LA CONCHA DE TU MADRE!')
  }
});

client.login(config.token);
