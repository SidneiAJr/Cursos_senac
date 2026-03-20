public class Main {
    public static void main(String[] args) {
       pessoa p1 = new pessoa("Alfredo",230);
        System.out.println("Nome: "+ p1.getNome());
        System.out.println("Idade "+ p1.getIdade());
        System.out.println("------Primeiro teste-----");
        p1.setNome("");
        System.out.println("Nome Final: "+ p1.getNome());
        System.out.println("Idade Final: "+p1.getIdade());
    }
}

class pessoa{
    private String Nome;
    private int idade;

    // Consttutor com validação usando os setters
    public pessoa(String Nome, int idade) {
        setNome(Nome);
        setIdade(idade);
    }

   // Getter -> pega o valor de forma segura
    public String getNome() {
        return Nome;
    }

    // Getter -> pega o valor de forma segura
    public int getIdade() {
        return idade;
    }

    public void setNome(String Nome) {
        if(Nome== null || Nome.isBlank()){
            System.out.println("Nome Invalido");
        }else{
            this.Nome = Nome;
        }
    }

    public void setIdade(int idade) {
        if(idade<0){
            System.out.println("Idade Invalido");
        }else{
            this.idade = idade;
        }
    }
}

