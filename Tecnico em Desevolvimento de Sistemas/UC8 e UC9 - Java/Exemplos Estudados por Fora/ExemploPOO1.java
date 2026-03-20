public class Mavenproject1 {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        VerificarTexto t1 = new VerificarTexto("Mas","Loop");
        t1.Ver1();
        t1.Ver2();
    }
}

interface Teste{
    public void Ver1();
    public void Ver2();
}

abstract  class Texto implements  Teste{
    public String msg;
    public String msg1;
    Texto(String msg,String msg1){
    this.msg = msg;
    this.msg1 = msg1;
    }
     public abstract void Ver1();
     public abstract void Ver2();
}

class VerificarTexto extends Texto{

    VerificarTexto(String msg,String msg1) {
        super(msg,msg1);
    }
    
    public void Ver1(){
        switch(msg){
            case "Mas":
               String mas = msg.toUpperCase();
                System.out.println("Maiusculas " + mas);
            break;
            case "Min":
               String min = msg.toLowerCase();
                System.out.println("Minusculo"+min);
            break;   
        }
    };
    public void Ver2(){
        switch(msg1){
            case "Loop":
            for(int i=0;i<10;i++){
                System.out.println("Contando "+i);
            }
            break;
            default:
                System.out.println("Invalido");
                break;
        }
    }
}
