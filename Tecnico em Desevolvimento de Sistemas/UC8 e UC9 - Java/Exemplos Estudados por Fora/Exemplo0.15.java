
public class Projeto2 {

    public static void main(String[] args) {
        System.out.println("HM?");
        teste1 t1 = new teste1("Hello Word");
        t1.VerificarHello();
        t1.VerificarHello2();
    }
}
interface Verificar{
    void VerificarHello();
    void VerificarHello2();
}

abstract class Hello implements  Verificar{
    
    public String msg;
    
    Hello(String msg ){
        this.msg = msg;
    }
    public void VerificarHello(){
        if(msg=="Hello Word"){
            System.out.println("Vapo");
        }else{
            System.out.println("Sem Vapo");
        }
    }
    public void VerificarHello2(){
        if(msg=="Hello Word"){
            System.out.println("Tem Boia");
        }else{
            System.out.println("Sem Boia");
        }
    }
    
}

class teste1 extends Hello{
    
    teste1(String msg ){
        super(msg);
        this.msg = msg;
    }
    public void VerificarHello(){
        if(msg=="Hello Word"){
            System.out.println("Vapo");
        }else{
            System.out.println("Sem Vapo");
        }
    }
    public void VerificarHello2(){
        if(msg=="Hello Word"){
            System.out.println("Tem Boia");
        }else{
            System.out.println("Sem Boia");
        }
    }
}
