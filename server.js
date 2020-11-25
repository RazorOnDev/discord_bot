//Esto hace que el bot sirva, no tocar xd

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


//TOKEN Y ESTADO, FUNDAMENTAL QUE LO CAMBIEN

client.login('pONE.tU.tOKEN.aCA.A4MTkw.Xfja6g.0fpbej2Gy1l9nEaGP8sZXvpN0C4');

client.on('ready', () => {
console.log("Conectado como " + client.user.tag )

client.user.setActivity("tus dudas, preguntame algo n.n", {type: "listening"})})






//-------------------------------------------------------------------------------------------------------------------------------
//EMPIEZE SU PROGRAMACION DESDE AQUI EN ADELANTE, YA CON ALGUNOS EJEMPLOS




//hola
client.on('message', msg => {
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("hola")) {
    msg.reply('Hola :D')
  }});


//Si contiene ejemplo1 o ejemplo2 va a contestar respuesta
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("ejemplo1") || message.includes("ejemplo2") ) {
    msg.channel.send('te contestesto si pusiste alguna de esas palabras')
  }
});



//Si contiene palabra 1 Y palabra 2 contesta
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("palabra1") && message.includes("palabra2")  ) {
    msg.channel.send(` Contesto si escribiste las 2 cosas`)
  }});



//Si contiene algunas de estas palabras borra el mensaje
client.on('message', msg => {
  if(msg.content.includes('malapalabra1')
     || msg.content.includes('malapalabra2')
     || msg.content.includes('malapalabra3')
     || msg.content.includes('malapalabra4')
     || msg.content.includes('malapalabra5')
    ){msg.delete()
    }});

//Como me llamo?
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



/* 
----Aclaraciones de codigo para el que quiera cambiar algo pero no entiende como funciona xd----
&& significa AND
|| significa OR 
${msg.author} Esto etiqueta al usuario que envio el mensaje
msg.react('😭') reacciona con tal emoji
Esto hace que NO se cree un bucle infinito contestandose a si mismo:
 if (msg.author == client.user){return}
Esto hace que NO conteste al bot Mee6, no es nesesario si no lo tienen en su server:
 if (msg.author.id == "159985870458322944"){return}
Esto permite el que entienda los mensajes auNqUe EsTen EscritoS aSi(mayusculas por si no quedo claro xd):
let message = msg.content.toLowerCase()
Esto permite que aparezca el bot como escribiendo, cambien los numeros para cambiar el tiempo de espera:
    setTimeout(function(){msg.reply('Hola bombon :3') ; }, Math.floor(Math.random() * 1000+550));
 LO QUE ESTA ESCRITO EN ESTE COLOR ES SOLO TEXTO, NO AFECTA AL CODIGO, SE HACE CON // O CON / Y *
*/
