import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            salario s1 = new salario(1000, 0.02, 0.05); // Corrigi a inicialização do saldo
            s1.verificarsaldo();
            s1.sacar(500); // Exemplo de saque
            s1.sacar(600); // Tentativa de saque maior que o saldo
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

class salario{
    private double saldo;
    private double juros;
    private double acrecimo;

    public salario(double saldo, double juros, double acrecimo) {
        this.saldo = 1000;
        this.juros = juros;
        this.acrecimo = acrecimo;
    }

    public void verificarsaldo(){
        if(saldo>=0){
            System.out.println("Conta sem Saldo:" +saldo);
        }
    }

    public void sacar(double valor) throws Exception {
        if (valor > saldo) {
            // Aqui, o saldo está sendo subtraído de 80 de forma incorreta. O correto seria lançar a exceção sem modificar o saldo
            throw new Exception("❌ Saldo Insuficiente | Tentou sacar R$ " + valor + " mas o saldo é R$ " + saldo);
        }
        saldo -= valor; // Subtrai o valor do saque
        System.out.println("Saque realizado com sucesso! Novo saldo: R$ " + saldo);
    }


    public void acrescimento(double acres){
        try{
          if(saldo>-200){
              acres = saldo*acrecimo;
              System.out.println("Acresimo de Juros: "+ acres);
          }
        }catch (ArithmeticException e){
            if(saldo>-300){
                acres = saldo*acrecimo;
                System.out.println("Acresimo de Juros: "+ acres);
            }
        }finally {
            System.out.println("Juros Mais Alto:  ");
        }

    }



}





