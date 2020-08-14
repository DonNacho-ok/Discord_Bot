const Discord = require("discord.js");
const {prefix, token } = require("./config.json")
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Listo!');
});

client.on('message', message => {
  if(message.content == '+ping'){
    message.channel.send('PONG, LA CONCHA DE TU MADRE!')
  }

  if(message.content == `${prefix}angularvsreact`){
    message.channel.send("No me preguntes a mi, solo soy un script de node...")
  }

  if(message.content == `${prefix}usercount`){
    message.channel.send(`La cantidad de usuarios en este servidor es de ${message.guild.memberCount} usuarios`)
  }
});

client.login(token);
