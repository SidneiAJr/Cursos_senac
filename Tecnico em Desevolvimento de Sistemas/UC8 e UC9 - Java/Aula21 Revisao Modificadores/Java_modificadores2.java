public class Main {
    public static void main(String[] args) {
      retsuko r1 = new retsuko();
      r1.cantarMetal();
      r1.estado(100);


    }
}

class retsuko{
    public void cantarMetal(){
        System.out.println("Cantar Metal......");
    }
    public int estado(int estress){
        System.out.println("Nivel de Stress: "+estress);
        return  estress;
    }
}




