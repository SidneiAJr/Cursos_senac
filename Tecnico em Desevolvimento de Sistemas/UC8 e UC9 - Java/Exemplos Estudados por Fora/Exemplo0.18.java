

class Main {
    public static void main(String[] args) {
        System.out.println("Verificador de Comunista");
        Individuo i1 = new Individuo("Veruno",true);
        i1.Ecomunista();
        i1.NaoComunista();
    }
}

interface VerificarComunismo{
    void Ecomunista();
    void NaoComunista();
}

abstract class Pessoa implements VerificarComunismo{
    public String NomePessoa;
    public boolean comunismo;
    Pessoa(String NomePessoa,boolean comunismo){
     this.NomePessoa = NomePessoa;
     this.comunismo= comunismo;
    }
    public void Ecomunista(){}
    public void NaoComunista(){}
}

class Individuo extends Pessoa{
    Individuo(String NomePessoa,boolean comunismo){
        super(NomePessoa,comunismo);
    }
    public void Ecomunista(){
       if(comunismo==true){
        System.out.println("Pessoa Comunista, Absurdo");
    }else{
        System.out.println("Porque nao es comunista, Absurdo");
    }
    }
    public void NaoComunista(){}
}
