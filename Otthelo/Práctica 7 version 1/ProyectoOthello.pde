/**
 * Proyecto base para el juego de Othello/Reversi
 * @author Rodrigo Colín
 */

Tablero tablero;

Jugador jugador;

int ContadorTiempo = 150;

/**
 * Método para establecet tamaño de ventana al incluir variables
 */
void settings(){
  tablero =  new Tablero();
  size(tablero.dimension * tablero.tamCasilla, tablero.dimension * tablero.tamCasilla);
  
  jugador = new Jugador();
}

/**
 * Inicializaciones
 */
void setup(){
  println("Proyecto base para el juego de mesa Othello");
  tablero.muestraJugadas();
}

/**
 * Ciclo de dibujado
 */
void draw(){
  
  
  if(tablero.turno)
    ContadorTiempo++;
    tablero.display();
    tablero.muestraJugadas();
  if(tablero.turno && !tablero.finPartida() && ContadorTiempo > 150){
      PVector jugada = jugador.Jugar(tablero);
      if(tablero.esJugable(floor(jugada.x),floor(jugada.y))){
        tablero.setFicha(floor(jugada.x),floor(jugada.y));
        println("\nIA jugó en:" + "[" + jugada.x + ", " + jugada.y + "]");
        tablero.cambiarTurno();
        ContadorTiempo = 0;
        println("Score: " + tablero.cantidadFichas().x + " - " + tablero.cantidadFichas().y);
        println("Turno #" + tablero.numeroDeTurno + ": ");
      }

      
      
      if(tablero.sinMovimientos()){
        
        if(tablero.finPartida()){
          println("Fin de la partida!");
          tablero.dibujaFin();
          int i = 0;
          for(i=0;i < tablero.numeroDeTurno-1;i++){
            println(jugador.bifurcacion[i] + "," + jugador.fichas[i] + ", " + jugador.explorados[i]);
          }
          tablero.terminaPartida();
        }
        else
        {
          println("Sin jugadas posibles","Turno para el siguiente jugador.");
        }
       
      }
      
    }  
}

/**
 * Evento para detectar cuando el usuario da clic
 */
void mousePressed() {
  
  int casillaX,casillaY;
  casillaX = mouseX/tablero.tamCasilla;
  casillaY = mouseY/tablero.tamCasilla;
     
  if((casillaX < 8 && casillaY < 8) && tablero.esJugable(casillaX,casillaY) && !tablero.turno){    
      jugador.bifurcacion[tablero.numeroDeTurno] = floor(tablero.jugadasPosibles()[0].x);
      jugador.fichas[tablero.numeroDeTurno] = floor(tablero.cantidadFichas().x);
      tablero.setFicha(casillaX,casillaY);
      tablero.cambiarTurno();
      
      if(tablero.sinMovimientos()){
        
        if(tablero.finPartida()){
          println("Fin de la partida!");
        }
        else
        {
          println("Sin jugadas posibles","Turno para el siguiente jugador.");
        } 
      }
      tablero.display();
      tablero.muestraJugadas();    
  }
  else if((casillaX < 8 && casillaY < 8)){
     println("No es posible colocar ficha en la casilla " + "[" + casillaX + ", " + casillaY + "]");
  }    
}
