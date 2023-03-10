import java.util.LinkedList;

class Nodo{
    
    String nombre;
    int estado[][];
    
    LinkedList<NodoPeso> vecinos = new LinkedList<NodoPeso>();
    
    Nodo(String data){
       this.nombre = data;
        
    }

    Nodo(String data,int m){
       this.nombre = data;
       estado  = new int[m][m];
       estado[3][3] = -1;
       estado[4][4] = -1;

       estado[3][4] = 1;
       estado[4][3] = 1;
    }
    

    void agregaVecino(Nodo n){
      if(n != null){
        vecinos.addLast(new NodoPeso(n));
      }       
    }

    
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
