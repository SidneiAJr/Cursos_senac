interface Nave{
    Verificanave():void;
    VerificaCapacidade():void;
}
interface Capitao{
    VerificaCapitao():void;
}

interface Colonia{
    VerificaPlaneta():void;
}

interface CivilicaoWarp{
    VerificaCapacidadeDobra():void;
}
class Federacao implements Capitao,Nave{
    constructor(public NomeCapitão:string,public NomeNave:string,public TamanhoNave:number,public Capitao:boolean, public Classe:string,public capacidade:number) {}
  VerificaCapacidade(): void {
      if(this.capacidade>=1000){
        console.log(`Capacidade ${this.capacidade}`);
      }else{
        console.log("Capacidade Lotada");
      }
  }
  Verificanave(): void {
      if(this.Classe==="Coliseu"||this.Classe==="Destroyer"||this.Classe==="Orbital Hunter"){
        console.log("Vamo Bora que vai ser uma longa Viajem");
      }else{
        console.log("Cuidado Na sua viaje , Vida longa e prospera");
      }
  }
  VerificaCapitao(): void {
      if(this.Capitao===true){
        console.log(`Capitão ${this.Capitao} Despachado Pode Seguir Viajem na Nave ${this.NomeNave}`);
      }else{
        console.log("Aguarde Nave sem Capitao");
      }
  }
}

class Civilicao implements CivilicaoWarp{
    constructor(public NomeCivilicao:string,public TemCapacidadeDobra:boolean){}
    VerificaCapacidadeDobra(): void {
        if(this.TemCapacidadeDobra===true){
            console.log("Fazer contato");
        }else{
            console.log("Não quebrar Primeira diretriz");
        }
    }
}
class Planeta implements Colonia{
    constructor(public NomePlaneta:string,public Ecolonia:boolean){}
    VerificaPlaneta(): void {
        if(this.Ecolonia===true){
            console.log("Pode ir");
        }else{
            console.log("Não entrar em contato Apenas Observar")
        }
    }
}

const Nave1 = new Federacao("Oswavald","Endurece",600,true,"Cronus Type VI",200);
const Planeta1 = new Planeta("Centurium Prime",true);
const Civilicao1 = new Civilicao("Kalotilianos",false);

Nave1.VerificaCapacidade();
Nave1.VerificaCapitao();
Nave1.Verificanave();

Planeta1.VerificaPlaneta();

Civilicao1.VerificaCapacidadeDobra();
