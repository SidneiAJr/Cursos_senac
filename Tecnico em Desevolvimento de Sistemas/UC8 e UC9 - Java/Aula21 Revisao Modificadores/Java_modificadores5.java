public class Main {
    public static void main(String[] args) {
     dragon d1 = new dragon();
     d1.sinal = 80;
     d1.Conectar();

    }
}

class dragon{
    int sinal;
    void Conectar(){
        System.out.println("Sinal: "+sinal);
        if(sinal<=0){
            System.out.println("Sinal Fraco");
        }else{
            System.out.println("Sinal Forte");
        }
    }
}









