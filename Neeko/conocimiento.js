module.exports = {
  conocimiento : {
    bienvenida : {
      'intent': 'bienvenida',
      'regex': [
       '(hola)',
       'buen(a|o)s (dias|tardes|noches)*',
        'hol'

      ],
      'respuesta': [
        '¡Hola!, Neeko es mejor elección. \nSi quieres saber que hago escribe menu en cualquier momento.',
        '¡Hola invocador, ¡Prepárate!. \nSi quieres saber que hago escribe menu en cualquier momento.',
        '¡Hola!, ¿No eres Neeko en secreto, o sí?. \nSi quieres saber que hago escribe menu en cualquier momento.'
      ]
    },
    menu: {
      'intent': 'menu',
      'regex':[
        '(menu)'
      ],
      'respuesta':[
        'Selecciona una de las siguientes acciones' + 
        '\n1.- Jugar' + 
        '\n2.- Contar chiste' + 
        '\n3.- Datos curiosos' + 
        '\n4.- Recomendaciones de viaje' + 
        '\n5.- Busquedad de imagenes. Escribe 5 y el texto que quieres buscar'
      ]
    },
    menuJugar: {
      'intent': 'menuJugar',
      'regex':[
        '(1)'
      ],
      'respuesta':[
        'Selecciona una de las siguientes acciones' + 
        '\n6.- Jugar un volado' + 
        '\n7.- Jugar piedra, papel o tijeras'
      ]
    },
    menuJugarPPT: {
      'intent': 'menuJugar',
      'regex':[
        '(7)'
      ],
      'respuesta':[
        '\n Escribe lo que deseas jugar (Piedra, Papel o Tijeras)'
      ]
    },
    funcion : {
        'intent': 'funcion',
        'regex': [
            '(quien eres|eres| que eres)',
        ],
         'respuesta': [
           'Neeko es un chatbot de entretenimiento'
         ]
      
    },
    presentacion : {
        'intent': 'presentacion',
        'regex': [
          
            '(presentate|presentacion)'
        ],
        'respuesta': [
            'Neeko es Oovi-kat, no somos Vastaya.\nSomos... Vastayashai\'rei, somos más coloridos.\nPero Neeko sera tu Co-\'om Se-Henna, eso significa amigo. Si quieres saber que hago escribe menu en cualquier momento.'
        ] 
    },

    estadoAnimo:{
      'intent': 'animo',
      'regex': [
        '(Como estas|Como andas|andas)',

      ],
      'respuesta': [
        'Neeko es fuerte, puede conquistar al mundo ¿Cómo estás tú?',
        'Neeko feliz por tener a un amigo como tú ¿Cómo estás tú?'
      ]
      
    },

    hacer : {
        'intent': 'hacer',
        'regex': [
            '(que haces|haces)'
        ],
        'respuesta': [
          'Sólo soy yo haciendo… cosas que hago yo. Nada sospechosa”',
          'Tu tu ru... sólo me ocupo de mis asuntos, como no ser Neeko'
        ] 
    },

    gustar : {
        'intent': 'gustar',
        'regex': [
            '(Qué te gusta|gusta)'
        ],
        'respuesta': [
          '¡Me gusta... CUCHILLOS, PISTOLAS, TACOS, SKAAAARL!”',
          'A Neeko le encanta bailar!',
          'Me gusta mucho tu Sho\'ma, lo protegere!'
        ] 
    },
    
    estar : {
      'intent': 'estar',
      'regex': [
          '(Dónde estás|estas|Donde)'
        ],
      'respuesta': [
        '¿Dónde está Neeko?, vi a Neeko por el río. Todos saben que a Neeko le encantan los ríos',
        '¿Neeko está lejos, Neeko está cerca? Nadie lo sabe'
        ] 
    },
    
    Amor: {
      'intent': 'amor',
      'regex': [
        'te quiero',
        'te amo',
        'casate conmigo',
        'quieres casarte conmigo', 
        'quieres ser mi novia', 
        'enamorado de ti'
      ],
      'respuesta': [
        'No te pongas rojo como tomate',
        'Guácala! Ya bañate. Qué asco',
        'Ahora tenemos un vínculo ¡Gracias!'
      ]
    },
    visitar:{
      'intent': 'visitar',
      'regex': [
        '(A donde te gustaria ir |ir|Que lugar te gustaria visitar|visitar)',
        '/^otro$/', '/^otra$/', '(4)'

      ],
      'respuesta': [
        'Neeko te recomienda visitar Ionia, ahi hay mucha magia como la de Neeko',
        'Neeko te recomienda  visitar a su amiga Nidalee!',
        'Neeko te recomienda ir a shurima, uuuuh, mucha arena',
        'Neeko te recomienda que no vayas a Aguas Turbias, alejate de ahi, por favor',
        'Neeko piensa que serias feliz en donde haya pan con queso'
      ]
  
    },
    busqueda : {
      'intent': 'busqueda',
      'regex': [
        '(buscar|busca|imagen|busqueda)',
        '(5)'
      ],
      'respuesta': [
        'Esto es lo que neeko pudo encontrar'
      ]
    },
    susto : {
      'intent': 'susto',
      'regex': [
        '(boo|bu)'
      ],
      'respuesta': [
        'Uuuh. Tenebroooso'
      ]
    },
    
    volado : {
      'intent': 'volado',
      'regex': [
        'echa un volado',
        'volado',
        '/^otro$/', 
        '/^otra$/',
        '(6)'
      ],
      'respuesta': [
        'La moneda esta en el aire, salio '
      ]
    },
    
    despedida: {
      'intent': 'despedida',
      'regex': [
        'Adios',
        'bye',
        'me voy'
      ],
      'respuesta': [
        '¡Ayeye! Hasta pronto'
      ]
    },
    chiste : {
      'intent': 'chiste',
      'regex': [
        'chiste',
        'broma',
        '(2)'
      ],
      'respuesta': [
        'Bien, ',
        'Ahí te va, '
      ]
    },
    datosCuriosos : {
      'intent': 'datosCuriosos',
      'regex': [
        'dato',
        'curioso',
        'curiosidad',
        '(3)'
      ],
      'respuesta': [
        'Neeko te dice: ',
      ]
    },
    juegaPiedra : {
      'intent': 'juegaPiedra',
      'regex': [
        '(piedra)'
      ],
      'respuesta': [
        'Neeko jugo papel. Perdiste!!',
        'Neeko jugo tijeras. Ganaste!!',
        'Neeko jugo piedra. Empate!!',
      ]
    },
    juegaPapel : {
      'intent': 'juegaPapel',
      'regex': [
        '(papel)'
      ],
      'respuesta': [
        'Neeko jugo papel. Empate!!',
        'Neeko jugo tijeras. Perdiste!!',
        'Neeko jugo piedra. Ganaste!!',
      ]
    },
    juegaTijeras : {
      'intent': 'juegaTijeras',
      'regex': [
        '(tijera|tijeras)'
      ],
      'respuesta': [
        'Neeko jugo papel. Ganaste!!',
        'Neeko jugo tijeras. Empate!!',
        'Neeko jugo piedra. Perdiste!!',
      ]
    },
    
    desaprobacion : {
      'intent': 'desaprobacion',
      'regex': [
        '(no me gusta|me aburre|algo mas|miedo|asusta|mas|no gracias)'
      ],
      'respuesta': [
        'Neeko lamenta que tu Sho\'ma este así, puede Neeko ayudarte en algo?'
      ]
    },
    desconocido : {
        'intent': 'desconocido',
        'regex': [
            '.*'
        ],
        'respuesta': [
          'Neeko no entendió lo que dijiste',
          'Neeko no sabe de que estas hablando, intenta de nuevo'
        ]
    }
  }
}