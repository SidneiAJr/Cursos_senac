public class Main {
    public static void main(String[] args) {
   hashira h1 = new hashira();
   h1.forcaTotal(20,30);
   h1.usarRespiracao("Pedra Voadora");


    }
}


class hashira{
    public void usarRespiracao(String tecnica){
        System.out.println("Usou Tecnica: "+tecnica);
    }
    public int forcaTotal(int base , int experencia){
        int soma = base+experencia;
        System.out.println("Soma Ttoal: "+soma);
        return soma;
    }
}


