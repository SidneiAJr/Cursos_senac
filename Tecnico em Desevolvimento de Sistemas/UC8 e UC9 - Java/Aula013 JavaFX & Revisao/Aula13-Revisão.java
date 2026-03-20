package exc1;

public class Exc1 {

    public static void main(String[] args) {
       Teste s1 = new Teste(2000,8,0,24);
       s1.verificarsalario();
       s1.horatrabalhada();
       ConversorTemp t1 = new ConversorTemp(10);
       t1.ConversaoTempo();
       Usuario u1 = new Usuario(true);
       u1.Verificar();
       estoque e1 = new estoque("Pedra", "1A", 'P', 10);
       e1.VerificarProduto();
       MediaAluno a1 = new MediaAluno(5, 5.5, 5.5);
       a1.VerificarNota();
       par p1 = new par(5);
       p1.verificarImparPar();
    }
    
}

// Exercicio 1:
interface VerificarSalario{
    public void verificarsalario();
    public void horatrabalhada();
}

class Teste implements VerificarSalario{
     protected double salario;
     protected int horasTrabalhadas;
     protected double horasTotais;
     protected int dias;

    public Teste(double salario, int horasTrabalhadas, double horasTotais, int dias) {
        this.salario = salario;
        this.horasTrabalhadas = horasTrabalhadas;
        this.horasTotais = horasTotais;
        this.dias = dias;
    }
     

    @Override
    public void verificarsalario(){
       double valorHora = salario/(horasTrabalhadas*dias);
       int totalTrabalhado = dias*horasTrabalhadas;
        System.out.println(String.format("Valor da Hora R$%.2f",valorHora));
        System.out.println("Total Horas: "+totalTrabalhado);
    }
    @Override
   public void horatrabalhada() {
    double valorHora = salario / (horasTrabalhadas * dias);

    if (valorHora <= 4.55) {
        // Se o valor da hora for menor ou igual a 4.55, é considerado "Ué tu existe?"
        System.out.println(String.format("Ué tu existe? %.2f", valorHora));
    } else if (valorHora <= 7.55) {
        // Se o valor da hora for maior que 4.55 e menor ou igual a 7.55, é "Subexistencia?"
        System.out.println(String.format("Subexistencia? %.2f", valorHora));
    } else {
        // Se o valor da hora for maior que 7.55, é "Pobre?"
        System.out.println(String.format("Pobre? %.2f", valorHora));
    }
}
    }
    

// Exercicio 2:
class ConversorTemp{
    protected double TemperaturaC;

    public ConversorTemp(double TemperaturaC) {
        this.TemperaturaC = TemperaturaC;
    }
    
    public void ConversaoTempo(){
     double convFahrenheit = (TemperaturaC * 9 / 5) + 32;
     double convKelvin = TemperaturaC + 273.15;
     System.out.println(String.format("Temperatura F %.2f\nTemperatura K %.2f",convFahrenheit,convKelvin));
}
    
}

// Exercicio 3:
class Usuario{
    protected boolean usuario;

    public Usuario(boolean usuario) {
        this.usuario = usuario;
    }
    
    public void Verificar(){
        boolean Usuario = true;
        if(Usuario==true){
            System.out.printf("Usuario ativo\n");
        }else{
            System.out.printf("Usuario Desativado ! Favor contactar a TI\n");
        }
    }
}

// Exercicio 4:
class estoque{
    protected String nomeProduto;
    protected String codigoProduto;
    protected char Categoria;
    protected int QuantidadeEstoque;

    public estoque(String nomeProduto, String codigoProduto, char Categoria, int QuantidadeEstoque) {
        this.nomeProduto = nomeProduto;
        this.codigoProduto = codigoProduto;
        this.Categoria = Categoria;
        this.QuantidadeEstoque = QuantidadeEstoque;
    }
    
    public void VerificarProduto(){
        System.out.printf("Produto " + nomeProduto +" Codigo Produto "+ codigoProduto +" Categoria "+ Categoria +" Quantidade em Estoque "+QuantidadeEstoque);
        
        if(QuantidadeEstoque<=2){
            System.out.println("Ta Acabando");
        }else{
            System.out.println("Acabou");
        }
    }
}

class MediaAluno{
    protected double nota1;
    protected double nota2;
    protected double nota3;

    public MediaAluno(double nota1, double nota2, double nota3) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    
    public void VerificarNota(){
        double media = (nota1+nota2+nota3)/3;
        if(media>=7){
            System.out.println("Aprovado");
        }else if(media>5){
            System.out.println("Em Recuperacao");
        }else{
            System.out.println("Reprovado");
        }
    }
}

class par{
    protected int numero;

    public par(int numero) {
        this.numero = numero;
    }
    
    public void verificarImparPar(){
         String res = (numero%2==0)&&true?"Numero e par":"Numero Impar";
         System.out.printf(res);
         
    }
         
    }
    
    


