//run app
const express = require("express");
const app = express();
const { MessageAttachment } = require('discord.js');

app.listen(3000, () => {
  console.log("Esta corriendo");
})

app.get("/", (req, res) => {
  res.send("Neeko les dice hola!");
})

//neeko index
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const conocimiento = require("./conocimiento");
const refunc = require("./responseFunctions");
const adfunc = require("./aditionalFunctions");
const file = new MessageAttachment('./img/neeko.jpg');

var prefix = "!n";
//Base de conocimiento
var conoci = conocimiento.conocimiento;
//Intent
var intent;
//Respuesta
var respuesta = "";
//Info extra
var infoAdicional = "";
//Contexto por DEFAULT
var contexto = "DEFAULT";
//!message.content.startsWith(prefix) || 
client.on("message", message =>{

  if(!message.content.startsWith(prefix) || message.author.bot){

    return;
  }
  console.log("CONTEXTO: " + contexto);
  message.channel.sendTyping();

  var text = message.content; 
  if(text.indexOf('otro')<0 && text.indexOf('otra')<0){
    intent = refunc.findIntent(conoci, text);
  //console.log(intent);
    contexto = refunc.identificarContexto(intent, contexto); 
  }
  
  console.log(contexto);
  if(contexto == 'BUSQUEDA'){
    message.channel.send({ embeds:     [refunc.acciones(intent, text, contexto)], files: [file] });
  } else {
    respuesta = refunc.responder(intent);
    //console.log(respuesta);
    infoAdicional = refunc.acciones(intent, text, contexto);
    //console.log(infoAdicional);
    //console.log(typeof(infoAdicional));
    respuesta += infoAdicional
    message.channel.send(respuesta);
  }

})

client.login(process.env.token);