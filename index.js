const Discord = require("discord.js");
const {prefix, token } = require("./config.json")
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Listo!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send('PONG, LA CONCHA DE TU MADRE!')
  }

  if(command === `angularvsreact`){
    message.channel.send("No me preguntes a mi, solo soy un script de node...")
  }

  if(command === `usercount`){
    message.channel.send(`La cantidad de usuarios en este servidor es de ${message.guild.memberCount} usuarios`)
  }

  if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	  }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }

  if(command === "kick"){
    if(!message.mentions.users.size){
      return message.reply("tenes que taggear a alguien, aweonao")
    }
    
    const taggedUser = message.mentions.users.first();

    message.channel.send(`Trataste de kickear a ${taggedUser.username}, puto`)
  }
});

client.login(token);
