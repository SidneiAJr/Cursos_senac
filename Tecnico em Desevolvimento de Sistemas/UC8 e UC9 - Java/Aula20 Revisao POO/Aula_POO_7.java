public class Main {
    public static void main(String[] args) {
       Pagamentopix p1 = new Pagamentopix();
       Pagamentocredito p2 = new Pagamentocredito();
       PagamentoBoleto p3 = new PagamentoBoleto();
       PagamentoDinheiro p4 = new PagamentoDinheiro();
       p1.pagar(1000);
       p2.pagar(200);
       p3.pagar(20);
       p4.pagar(500);

    }
}

class Pagamento{
    void pagar(double valor){
        System.out.println("Realizado Pagamento R$ "+ valor);
    }
}

class Pagamentopix extends Pagamento{
    @Override
    void pagar(double valor){
        System.out.println("Pagamento de R$ "+ valor + "Realizado via Pix");
    }
}

class Pagamentocredito extends Pagamento{
    @Override
    void pagar(double valor){
        System.out.println("Pagamento de R$ "+ valor + "Realizado via Pix");
    }
}

class PagamentoBoleto extends Pagamento{
    @Override
    void pagar(double valor){
        System.out.println("Pagamento de R$ "+ valor + "Realizado via Pix");
    }
}

class PagamentoDinheiro extends Pagamento{
    @Override
    void pagar(double valor){
        System.out.println("Pagamento de R$ "+ valor + "Realizado via Pix");
    }
}





