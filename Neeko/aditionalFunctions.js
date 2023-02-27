const { MessageEmbed } = require('discord.js');

module.exports = {
  choice(options) {
    //Funcion que elige al azar un elemento de una lista
    var rand = Math.floor(Math.random() * options.length);
    return options[rand];
  },
  contarChiste() {
    //Funcion que regresa un chiste al azar
    chistes = [
      'Había una vez un perrito llamado pegamento se cayo y se pego!!!',
      '¿Qué es una mujer objeto? Una instancia de una mujer con clase.',
'¿Qué le menciona una IP a otra? — ¿Qué tramas?.',
'¿Qué es un terapeuta? – 1024 Gigapeutas.',
'¿Que le habla un bit al otro? Nos vemos en el bus.',
'¿Cuántos programadores hacen falta para cambiar una bombilla? – Ninguno, porque es un problema hardware.',
'Se abre el telón, aparece un informático y dice: ¡qué habéis tocado que no se cierra el telón!.',
'¿Pero qué haces tirando esos portátiles al río? – ! pero mira como beben los PC,s en el rió!.',
'Error 0094782: No se detecta ningún teclado pulse una tecla para continuar.',
'Están 1023 gigabytes en una fiesta, llegan 1048576 más y dicen: ¿Nos hacemos un peta?.',
'¿Qué le dice un .GIF a un .JPEG? -Anímate viejo.',
'Los verdaderos programadores programan en binario.',
'No te despedirán del trabajo, si nunca comentas tu código y además eres el único que sabe cómo funciona.',
'Los programadores comentando una noticia del menéame: fallece una persona mientras estudiaba en la biblioteca – Que estaba estudiando? – El API de Windows.',
'Sólo hay 10 tipos de personas en este bendito mundo, las que entienden binario y las que no.',
'¿Cuál es la diferencia entre batman y Bill Gates? Que cuando batman luchó contra el pingüino ganó.',
'Dos programadores java charlando: «la excepción confirma la regla» «pues si hay una excepción, la capturamos».',
'Para qué quiere un pastor un compilador? pues para tener «OBEJOTAS».',
'La barriga de un programador es directamente proporcional a la cantidad de información que maneja.',
'Dios es real, a no ser que lo declares como integer.',
'Dos programadores dialogando sobre sus relaciones con su pareja: Yo tengo un vínculo muy fuerte con mi mujer. Entonces, tienes un hipervínculo?.'
    ]
    chiste = module.exports.choice(chistes)
    return chiste
  },
  datoCurioso() {
    //Funcion que regresa un chiste al azar
    datos = [
        '```El primer correo electrónico fue QWERTYUIOP, muy originales, neeko les mandara correos de Movistar!```',
'```No puedes hacerte cosquillas a ti mismo, uuuuh, curioso```',
'``` Los ojos hacen más ejercicio que las piernas, ojos fuertisimos como la felina Nidalee!```',
'```Un shopping de China ha incorporado cabinas para que las esposas dejen allí a sus maridos mientras ellas hacen las compras. Estan equipadas con una TV, consola de videojuegos y silla masajeadora.```',
'```La razón por la que el personaje de Crash no tiene cuello es debido a las limitaciones técnicas de aquella época (1996). Diseñaron a Crash de esa manera para simplificarlo, restandole complejidad a su geometría. Como se veria Neeko sin cuello?```',
'```Según el lore, Darius no es virgen, ya que tuvo un amor con un amiga, pero murió en sus brazos apuñalada por rebelarse contra Noxus. Además, tiene una hija, pero no la reconoce. Quien lo diria? Un lolero no virgen:o```',
'```La temperatura del cuerpo de Ornn es tan alta que puede derretir hielo puro y la ropa simplemente acercándose```',
'```Ashe era rubia y fue entrenada por su madre para que usase muchas armas. Aun así, eligió el arco por encima de todo, y su pelo se volvió blanco por la presión de su arma. El Sho\'ma de Ashe se siente... poderoso```',
'```El ojo de Nagakeboros de Illaoi pesa, según se dice, lo mismo que un barril de vino, que son aproximadamente unos 40 kilogramos vacío y unos 273 si el barril está lleno. Pero ella lo lleva en una sola mano. A Neeko le han dado sapes con ese ojo:(```',
'```Sion odiaba estar vivo. De hecho, fue devuelto a la vida en contra de su voluntad, simplemente porque era un general imparable. Ahora solo lucha porque le trae recuerdos buenos de su yo en vida. Como puede alguien odiar estar vivo?:o```',
'```Ziggs y Jinx tienen ideas en común y son aliados, pero Ziggs decidió no seguir tan de cerca la alianza porque considera que Jinx está loca. ¡Jinx es salvaje, acaba con todo! ¡Piu, piu!```'
    ]
    dato = module.exports.choice(datos)
    return dato
  },
  juegaPiedraPapel(messageUser) {
    //Funcion que regresa un chiste al azar
    jugadas = [
        'Yo elijo tijeras',
        'Neeko pide piedra', 
        'Neeko elije es el mas fuerte!'
    ]
    jugada = module.exports.choice(jugadas)
    return jugada
  },

    volado(){
    //Funcion que regresa un chiste al azar
      volados= [
        'Aguila',
        'Sol'
    ]
    volado = module.exports.choice(volados)
    return volado
  },
  busqueda(userInput){
    const regEx1 = 'buscar';
    const regEx2 = 'busca';
    const regEx3 = 'imagen';
    const regEx31 = 'imagenes';
    const regEx4 = 'busqueda';
    const regEx5 = ' de ';
    const regEx6 = '5';
    const regEx7 = ' ';
    const busqueda = userInput.replaceAll('!n', '').replaceAll(regEx1, '').replaceAll(regEx2, '').replaceAll(regEx31, '').replaceAll(regEx3, '').replaceAll(regEx4, '').replaceAll(regEx5, '').replace(regEx6, '').trim().replaceAll(regEx7, '+');

    const exampleEmbed = new MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Resultados para: ' + busqueda)
      .setDescription('Neeko encontro los siguientes resultados para tu búsqueda, da click en el enlace para ir a ver más información.')
      .setURL('https://www.google.com/search?tbm=isch&q=' + busqueda)
      .setImage('attachment://neeko.jpg');

    return exampleEmbed;
  }
  

  
}