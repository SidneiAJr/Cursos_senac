public class Main {
    public static void main(String[] args) {
        // Criando Objetos das classes Filhas
        dog d1 = new dog(5,"Tobis","Marmota");
        cat gato = new cat(5,"Prime");
        d1.dormir();
        gato.dormir();
        gato.emitirSom();
        d1.emitirSom();
    }
}

class Animal{
    // Atributos comuns da classe
    protected String nome;
    protected int idade;

    public Animal(int idade, String nome) {
        this.idade = idade;
        this.nome = nome;
    }

    //Metodos comum que todos os aniemais fazem

    void andar(){

    }

    void dormir(){
        System.out.println(nome+" Está Dormindo......");
    }

    void emitirSom(){
        System.out.println("Som Generico do Animal.......");
    }


}

class dog extends Animal{
    protected String raca;

    public dog(int idade, String nome, String raca) {
        super(idade, nome);
        this.raca = raca;
    }
    @Override
    public void emitirSom(){
        System.out.println(nome+" Diz:auauauauaua");
    }
    public void correr(){
        System.out.println(nome+" Está Correndo atras de moto");
    }
}

class cat extends Animal{
    public cat(int idade, String nome) {
        super(idade, nome);
    }
    @Override
    public void emitirSom(){
        System.out.println(nome+" Diz : Mnheeeeeee");
    }
}



