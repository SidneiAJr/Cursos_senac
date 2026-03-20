class Main {
    public static void main(String[] args) {
       Filho filho = new Filho("Pedro Mesa","SP","00000000000",20);
    }
}
class Pessoa{
    public String nome;
    public String cidade;
    public String cpf;
    public int idade;
    
    Pessoa(String nome,String cidade,String cpf,int idade){
        this.nome = nome;
        this.cidade = cidade;
        this.idade = idade;
    }
}
class Filho extends Pessoa{
    Filho(String nome,String cidade,String cpf,int idade){
        super(nome,cidade,cpf,idade);
        System.out.println("Nome da Crianca" + this.nome  +  "Idade"+ this.idade);

        if(this.idade>=18){
            System.out.println("E Maior de Idade");
        }else{
            System.out.println("E Menor de Idade");
        }
    }
}
