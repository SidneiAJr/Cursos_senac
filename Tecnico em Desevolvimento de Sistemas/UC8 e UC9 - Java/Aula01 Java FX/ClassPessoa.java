package p;

public class Pessoa {

    String NomePessoa;
    int IdadePessoa;
    String cidadePessoa;
    boolean isKing;
    public Pessoa(String NomePessoa, int IdadePessoa,String cidadePessoa,boolean isKing){
        this.cidadePessoa = cidadePessoa;
        this.NomePessoa = NomePessoa;
        this.IdadePessoa = IdadePessoa;
    }

    public void VerificarNome(){
        if(NomePessoa.equals("Kalleo")){
            System.out.println("Nome Prime");
        }else{
            System.out.println("Ta sem Nome");
        }
    }
    public void VerificarIdade(){
        if(IdadePessoa>=18){
            System.out.println("Maior de Idade " + IdadePessoa);
        }else{
            System.out.println("Menor de Idade "+ IdadePessoa);
        }
    }
    public void CidadePessoa(){
        switch (cidadePessoa){
            case "SP":
                System.out.println("São Paulo");
                break;
            case "Sl":
                System.out.println("São Leopoldo");
                break;
            case "NH":
                System.out.println("Novo Hamburgo");
                break;
            default:
                break;
        }
    }

    public void Apresentacao(){
        System.out.println("Nome " +NomePessoa+ " idade "+IdadePessoa +" cidade "+cidadePessoa);
    }

    public void Rei(){
          if(isKing==true){
              System.out.printf("È rei");
          }else{
              System.out.printf("Not King");
          }
    }





}


