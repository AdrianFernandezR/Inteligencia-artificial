const adFunc = require("./aditionalFunctions");

module.exports = {
  findIntent(diccionario, userInput){
    //Función que identifica el intent buscando en toda la base de conocimiento.
    for (var key of Object.keys(diccionario)) {
      //console.log(diccionario[key].regex);
      for (const regex of diccionario[key].regex) {
        //console.log(regex);
          var re = new RegExp(regex, "i");
          let str = userInput.match(re);
          if(str){
            //console.log("Match: " + str);
            return diccionario[key];
          }
      }
    }    
  },

  identificarContexto(intent, contexto){
    //Función que asocia un intent a un contexto.
    var intentName = intent.intent
    if(intentName == 'bienvenida'){
      return 'BIENVENIDA';
    } else if(intentName == 'presentacion'){
      return 'PRESENTACION'
    } else if(intentName == 'chiste'){
      return 'CHISTE'
    } else if(intentName == 'animo'){
      return 'ANIMO'
    } else if(intentName == 'funcion'){
      return 'FUNCION'
    } else if(intentName == 'presentacion'){
      return "PRESENTACION"
    } else if(intentName == 'amor'){
      return "AMOR"
    } else if (intentName == 'visitar'){
      return "VISITAR"
    } else if (intentName == 'desconocido'){
      return "DESCONOCIDO"
    } else if (intentName == 'busqueda'){
      return "BUSQUEDA"
    } else if (intentName == 'susto'){
      return "SUSTO"
    } else if (intentName == 'hacer'){
      return "HACER"
    } else if (intentName == 'gustar'){
      return "GUSTAR"
    } else if (intentName == 'estar'){
      return "ESTAR"
    } else if (intentName == 'juegaPiedra' || intentName == 'juegaPapel' || intentName == 'juegaTijeras'){
      return "JUGANDO PIEDRA PAPEL O TIJERAS"
    } else if (intentName == 'despedida'){
      return "DESPEDIDA"
    } else if (intentName == 'volado'){
      return "VOLADO"
    } else if (intentName == 'menu'){
      return "MENU"
    } else if (intentName == 'menuJugar'){
      return "MENUJUEGO"
    } else if (intentName == 'datosCuriosos'){
      return "DATOCURIOSO"
    }
    return contexto;
  },  

  responder(intent){
    //Función que devuelve una respuesta aleatoria de las disponibles.
    return adFunc.choice(intent.respuesta);
  },

  acciones(intent, userInput, contexto){
    //Función que añade contenido necesario a una respuesta.
    var intentName = intent.intent;
    if(intentName == 'desaprobacion'){
      return module.exports.respuestaApropiada(intent, userInput, contexto);
    }else if(intentName == 'chiste'){
      return adFunc.contarChiste();
    }
    //else if(intentName == 'piedraPapel'){
      //return adFunc.juegaPiedraPapel();
    //} 
    else if(intentName == 'volado'){
      return adFunc.volado();
    } else if(intentName == 'busqueda'){
      return adFunc.busqueda(userInput);
    } else if (intentName == 'datosCuriosos'){
      return adFunc.datoCurioso();
    } else if (intentName == 'juegaPiedra' || intentName == 'juegaPapel' || intentName == 'juegaTijeras'){
      return ' \nSi deseas jugar de nuevo introduce (Piedra, Papel, Tijeras)';
    }
    return '';
  },

  respuestaApropiada(intent, userInput, contexto){
    //Función que modifica una respuesta para que su contenido sea el adecuado.
    //if(contexto == 'JUGANDO PIEDRA PAPEL O TIJERAS'){
      //return 'Otra ronda! ' + adFunc.juegaPiedraPapel();
    //} else 
    if(contexto == 'VOLADO'){
      return 'Aquí te va otro' + adFunc.volado();
    } else if(contexto == 'VOLADO'){
      return 'Aquí te va otro' + adFunc.volado();
    }
     else if(contexto == 'VISITAR'){
      return 'Aquí te va otro' + adFunc.contarChiste();
    }{
      return '...';
    }
  }
}