interface VerificarNave{
    TipodeNave():void;
    Municao():void;
    Propulsão():void;
    QuantidadeMunicao():void;
    VerificaClasse():void;
}


interface Vida{
     VerificarVida():void;
}


abstract class TipoNave implements VerificarNave, Vida{
      constructor(public NomeNave:string,public ClasseNave:string,public municaoTotal:number,public DanoNave:number,public VelocidadeMaxima:number,public TipoPropulcao:string,public TipoMunicao:string,public TipodeBlindagem:string,public VidaMax:number, public escudoMax:number,public QuantidadeMaxMunicao:number){}

      TipodeNave(): void {
          
      }

      Municao(): void {
          
      }

      Propulsão(): void {
          
      }

      VerificarVida(): void {
          
      }
      QuantidadeMunicao(): void {
          
      }
      VerificaClasse(): void {
          
      }
}

class Nave extends TipoNave{
     Municao(): void {
         switch(this.TipoMunicao){
          case "Energia":
          if(this.TipodeBlindagem==="Escudo"){
             const dano1 = 150;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1}`);
          }else if(this.TipodeBlindagem==="Sem escudo"){
             const dano1 = 500;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1} Dano Direto! Blindagem Penetrada`);
          }else{
            const dano1 = 100;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1} Dano Crito! Blindagem Penetrada`);
          }
          break;
          case "Cinetico":
          if(this.TipodeBlindagem==="Blindagem Polarizada"){
             const dano1 = 150;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1}`);
          }else if(this.TipodeBlindagem==="Blindagem Comum"){
             const dano1 = 500;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1} Dano Direto! Blindagem Penetrada`);
          }else{
            const dano1 = 100;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1} Dano Crito! Blindagem Penetrada`);
          }
          break;
          case "Torpedo":
          if(this.TipodeBlindagem==="Blindagem Polarizada"){
             const dano1 = 0;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1}`);
          }else if(this.TipodeBlindagem==="Blindagem Comum"){
             const dano1 = 5000;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1} Dano Direto! Blindagem Penetrada`);
          }else{
            const dano1 = 10000;
             console.log(`Munição ${this.TipoMunicao} Dano ${dano1} Dano Crito! Blindagem Penetrada`);
          }
          break;

         }
     }
     Propulsão(): void {
         switch(this.TipoPropulcao){
           case "Warp":
            console.log(`Propulsão ${this.TipoPropulcao}`)
            break;
            case "Transwarp":
            console.log(`Propulsão ${this.TipoPropulcao}`)
            break;  
            case "SubLuz":
            console.log(`Propulsão ${this.TipoPropulcao}`)
            break;
         }
     }
      QuantidadeMunicao(): void {
          if(this.TipoMunicao==="Torpedo"){
            this.municaoTotal -= 1
          }else if(this.TipoMunicao==="Cinetica"){
            this.municaoTotal -= 1
          }else if(this.TipoMunicao==="Energia"){
            this.municaoTotal -= 1
          }
      }
      VerificaClasse(): void {
          switch(this.ClasseNave){
            case "Explorador":
            console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Destroyer":
           console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Cruzador Leve":
           console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Cruzador Pesado":
          console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Cruzador Supremo":
           console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Couraçado Leve":
           console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Couraçado Pesado":
            console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Couraçado Supremo":
           console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Quantum Star":
            console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
            case "Supreme Star":
            console.log(`Nave Classe ${this.ClasseNave} Tem ${this.TipodeBlindagem} Nave Nome ${this.NomeNave}`)
            break;
          }
      }
}
interface VerInimigo{
    VerificarInimigo():void;
    Atacar():void;
}

class Inimigo implements VerInimigo{
     constructor(public NomeInimigo:string,public EscudoInimigo:number,public NaveInimigoAtacar:Nave){}
     VerificarInimigo(): void {
         switch(this.NomeInimigo){
            case "Alien1":
            if(this.NaveInimigoAtacar.ClasseNave==="Cruzador Pesado"){
               if(this.NaveInimigoAtacar.TipodeBlindagem==="Escudo"){
                 this.NaveInimigoAtacar.escudoMax -=20
                 console.log(`Cruzador recebeu Dano no escudo ${this.NaveInimigoAtacar.escudoMax}`)
               }
            }
            else{
               if(this.NaveInimigoAtacar.TipodeBlindagem==="Blindagem"){
                if(this.NaveInimigoAtacar.VidaMax>0){
                     this.NaveInimigoAtacar.VidaMax -= 2000
                    console.log(`Cruzador Destruido ${this.NaveInimigoAtacar.VidaMax}`)
                }
                 console.log(`Cruzador recebeu Dano no escudo ${this.NaveInimigoAtacar.VidaMax}`)
               } 
            }
            break;
            case "Cator":
               if(this.NaveInimigoAtacar.ClasseNave==="Explorador"){
               if(this.NaveInimigoAtacar.TipodeBlindagem==="Escudo"){
                 this.NaveInimigoAtacar.escudoMax -=200
                 console.log(`Cruzador recebeu Dano no escudo ${this.NaveInimigoAtacar.escudoMax}`)
               }
            }
            else{
               if(this.NaveInimigoAtacar.TipodeBlindagem==="Blindagem"){
                 if(this.NaveInimigoAtacar.VidaMax>0){
                     this.NaveInimigoAtacar.VidaMax -= 2000
                    console.log(`Cruzador Destruido ${this.NaveInimigoAtacar.VidaMax}`)
                }
                 this.NaveInimigoAtacar.escudoMax -=2000
                 console.log(`Cruzador recebeu Dano no escudo ${this.NaveInimigoAtacar.VidaMax}`)
               } 
            } 
            break;
            case "Sentinelas Profundos":
               if(this.NaveInimigoAtacar.ClasseNave==="Cruzador Pesado"){
                if(this.NaveInimigoAtacar.VidaMax>0){
                    console.log(`Cruzador Destruido ${this.NaveInimigoAtacar.VidaMax}`)
                }
               if(this.NaveInimigoAtacar.TipodeBlindagem==="Escudo"){
                 this.NaveInimigoAtacar.escudoMax -=2000
                 console.log(`Cruzador recebeu Dano no escudo ${this.NaveInimigoAtacar.escudoMax}`)
               }
            }
            else{
               if(this.NaveInimigoAtacar.TipodeBlindagem==="Blindagem"){
                 this.NaveInimigoAtacar.escudoMax -=20000
                 if(this.NaveInimigoAtacar.VidaMax>0){
                    console.log(`Cruzador Destruido ${this.NaveInimigoAtacar.VidaMax}`)
                }
                 console.log(`Cruzador recebeu Dano no escudo ${this.NaveInimigoAtacar.VidaMax}`)
               } 
            } 
            break;
         }
     }
     Atacar(): void {
    if (this.NaveInimigoAtacar.municaoTotal > 0) {
        this.NaveInimigoAtacar.QuantidadeMunicao(); // reduz a munição
        console.log(`Munição Total: ${this.NaveInimigoAtacar.municaoTotal}`);
    } else {
        console.log(`Sem munição!`);
    }
}
}

const nave1 = new Nave("USS Sentinel","Cruzador Pesado",200,2000,200,"Transwarp","Energia","Escudo",20000,200,20);
nave1.VerificaClasse();
nave1.Municao();
nave1.Propulsão();
nave1.QuantidadeMunicao();

const Inimigo1 = new Inimigo("Sentinelas Profundos",200,nave1);
Inimigo1.VerificarInimigo();
Inimigo1.Atacar();
