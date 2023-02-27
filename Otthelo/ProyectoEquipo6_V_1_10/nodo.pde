import java.util.LinkedList;

/**
 * Definición de un objeto nodo que simula los nodos de un arbol
 * @author Equipo 6
 */
class Nodo{
    
    String nombre;
    int estado[][];
    
    LinkedList<NodoPeso> vecinos = new LinkedList<NodoPeso>();
    
    /**
    * Constructor de clase
    * @param data Nombre del nodo
    */
    Nodo(String data){
       this.nombre = data;
        
    }
    
    /**
    * Constructor de clase
    * @param data Nombre del nodo
    * @param m tamaño del arreglo de estado del nodo
    */
    Nodo(String data,int m){
       this.nombre = data;
       estado  = new int[m][m];
       estado[3][3] = -1;
       estado[4][4] = -1;

       estado[3][4] = 1;
       estado[4][3] = 1;
    }
    
    /**
    * Método para agregar un nodo vecino al nodo actual
    * @param n Nodo a agregar a la lista de vecinos
    */
    void agregaVecino(Nodo n){
      if(n != null){
        vecinos.addLast(new NodoPeso(n));
      }       
    }

    /**
    * Método que permite comparar el estado actual con el estado de otro nodo
    * @param n Nodo cuyo estado será comparado
    * @return True si el estado actual es igual al estado del nodo recibido
    */
    boolean igualEstado(Nodo n){
      int i,j;
      for(i = 0;i < 8;i++){
        for(j=0; j<8 ;j++){
          if(this.estado[i][j] != n.estado[i][j]){ 
            return false;
          }
        }
      }
      return true;
    }

    /**
    * Método que recupera una representación de tipo string del estado
    * @return una cadena con la representación del estado
    */
    String imprimeEstado(){
      String r = "";
      int i,j;
      for(i = 0;i < 8;i++){
        for(j = 0;j < 8;j++){
          r = r + (estado[j][i] == 0 ? " - " : estado[j][i] > 0 ? " O " : " X ");
        }
        r = r + "\n";
      }
      return r;
    }

    /**
    * Método que permite imprimir la información de los vecinos del nodo actual
    */
    void muestraVecinos(){
      int i = 0;
      print("[");
      for(NodoPeso v : this.vecinos){
        print("(" + v.nNodo.nombre + "," + v.peso + ")");
        if(i < this.vecinos.size()-1)
           print(", ");
           i++;
        }
        print("]");
    }
}
