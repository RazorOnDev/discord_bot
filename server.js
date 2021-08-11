// Esto hace que el bot funcione, no tocar

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();


// Pon el token de tu bot dentro del client.login para que el bot funcione. También puedes cambiar el estado del bot aquí abajo.

client.login('TOKEN DEL BOT AQUI');

client.on('ready', () => {
console.log("Conectado como " + client.user.tag )

client.user.setActivity("tus dudas, preguntame algo n.n", {type: "listening"})})






// COMANDOS - CON EJEMPLOS - //




// hola
client.on('message', msg => {
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("hola")) {
    msg.reply('Hola :D')
  }});


// Si contiene ejemplo1 o ejemplo2 va a contestar respuesta
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("ejemplo1") || message.includes("ejemplo2") ) {
    msg.channel.send('te contestesto si pusiste alguna de esas palabras')
  }
});



// Si contiene palabra 1 Y palabra 2 contesta
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("palabra1") && message.includes("palabra2")  ) {
    msg.channel.send(` Contesto si escribiste las 2 cosas`)
  }});



// Si contiene algunas de estas palabras borra el mensaje
client.on('message', msg => {
  if(msg.content.includes('malapalabra1')
     || msg.content.includes('malapalabra2')
     || msg.content.includes('malapalabra3')
     || msg.content.includes('malapalabra4')
     || msg.content.includes('malapalabra5')
    ){msg.delete()
    }});

// Como me llamo?
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("como me llamo") ) {
    msg.channel.send(` te llamas ${msg.author} :D`)
  }});



client.on('message', msg => {
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("como estas")) {
    msg.channel.startTyping();
    setTimeout(function(){msg.reply('Bien y tu? :D') ; }, Math.floor(Math.random() * 1000+550));
    msg.channel.stopTyping(true);
  }});
