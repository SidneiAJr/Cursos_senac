public class Main {
    public static void main(String[] args) {
       Homunculo h1 = new Homunculo();
       h1.setNome("Envy");
        h1.setNivelPerigoso(90);
        System.out.println("Homunculo: "+ h1.getNome());
        System.out.println("Periculosiddade: "+ h1.getNivelPerigoso());
        

    }
}

class Homunculo{
    private String Nome;
    private int NivelPerigoso;

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        this.Nome = nome;
    }

    public int getNivelPerigoso() {
        return NivelPerigoso;
    }

    public void setNivelPerigoso(int nivel) {
        if(nivel< 0 || nivel >100){
            System.out.println("Numero Invalido");
        }else{
            this.NivelPerigoso = nivel;
        }
    }
}






