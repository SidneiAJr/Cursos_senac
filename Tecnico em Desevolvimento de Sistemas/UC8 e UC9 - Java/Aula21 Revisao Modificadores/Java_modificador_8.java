public class Main {
    public static void main(String[] args) {
    evamago m1 = new evamago();
    m1.sincroziado();
    


    }
}

class Maga {
   protected  int sincronizao;
   protected void ajustar(int valor){
       sincronizao = valor;
   }
}

class evamago extends Maga{
    public void sincroziado(){
        ajustar(100);
        System.out.println("Sync Magica: "+sincronizao+ "%");
    }
}






