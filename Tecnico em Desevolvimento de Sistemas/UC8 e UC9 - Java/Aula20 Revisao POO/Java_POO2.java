public class Main {
    public static void main(String[] args) {
    motor cr1 = new motor("V8",2000,true,2);
    System.out.println("Motor Esta Ligado: "+cr1.estarLigado());
    cr1.acelerar();
    cr1.freiar();
    cr1.acelerar();
    cr1.desliga();
    }
}

class carro {
    protected String Motor;
    protected int potencia;

    /*
    //final ganrete que depois de criado no consctrutor não trocaremos esse motor
    variavel: final motor mt
    variavel: final Carro carro;
     */

    public carro(String motor, int potencia) {
        Motor = motor;
        this.potencia = potencia;
    }
}

class motor extends  carro{
    protected boolean ligado;
    protected int fatorInjecao;
    protected int rpm;

    public motor(String motor, int potencia, boolean ligado, int fatorInjecao) {
        super(motor, potencia);
        this.ligado = ligado;
        this.fatorInjecao = 1;
    }

    public int Ligado(){
        if(!ligado){
            return 0;
        }else{
            return(int)Math.round(fatorInjecao*3000);
        }
    }
    void acelerar(){
        if(fatorInjecao<2.6){
            fatorInjecao+=0.4;
            System.out.println("RPM do Motor"+rpm);
        }
    }
    void freiar(){
        if(fatorInjecao>0.5){
            fatorInjecao-=0.4;
        }
    }
    void ligar(){
        boolean ligado = true;
    }
    void desliga(){
        boolean ligado = false;
    }
    boolean estarLigado(){
        return ligado;
    }
}
