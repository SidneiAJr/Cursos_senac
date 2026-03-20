interface VerificarMunicao{
   VerificaTipoMunicao():void;
}

interface VerificarTank{
   VerificarTipodeTank():void;
}

interface VerificarMotor{
    VerificarTipoMotor():void;
}

interface VerificarTransmissao{
    Verificartipotranmissao():void;

}
interface VerificaVida{
    VerificarVida():void;
}

interface Inimigo{
    VerInimigo():void;
}

abstract class Veiculo implements VerificarMunicao,VerificarTank,VerificarMotor,VerificarTransmissao,VerificaVida{
    constructor(public NomeTank:string,public Calibre:number,public VelocidadeMax:number,public BlindagemMax:number,public PotenciaNova:number,public TipoMunicao:string,public Penetracaomedia:number,public NomeMotor:string,public PotenciaMotor:number,public TipoTank:string,public VidaMax:number,public vida:number){}
    VerificaTipoMunicao(): void {
        
    }
    VerificarTipodeTank(): void {
        
    }
    VerificarTipoMotor(): void {
        
    }
    Verificartipotranmissao(): void {
        
    }
    VerificarVida(): void {
        
    }
    Inimigo():void{

    }
}

class Tank extends Veiculo{
    VerificaTipoMunicao(): void {
        switch(this.TipoMunicao){
         case "AP":
            if(this.Calibre===88){
             const penmedia1= 120;
             console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia1}mm`)
            }else if(this.Calibre===120){
              const penmedia1=200;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia1}mm`)
            }else if(this.Calibre===128){
              const penmedia1= 250;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia1}mm`)
            }
         break;
         case "APCBC":
             if(this.Calibre===88){
             const penmedia2= 140;
             console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia2}mm`)
            }else if(this.Calibre===120){
              const penmedia2= 200;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia2}mm`)
            }else if(this.Calibre===128){
              const penmedia2= 260;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia2}mm`)
            }
         break;
         case "HE":
            if(this.Calibre===88){
             const penmedia3 =20;
             console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia3}mm`)
            }else if(this.Calibre===120){
               const penmedia3 =20;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia3}mm`)
            }else if(this.Calibre===128){
                const penmedia3 =20;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia3}mm`)
            }
         break;
         case "APCR":
            if(this.Calibre===88){
              const penmedia4 = 220;
             console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia4}mm`)
            }else if(this.Calibre===120){
                const penmedia4 = 250;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia4}mm`)
            }else if(this.Calibre===128){
                 const penmedia4 = 280;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia4}mm`)
            }
            break;
            case "APDS":
            if(this.Calibre==105){
              const penmedia4 = 330;
             console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia4}mm`)
            }else if(this.Calibre===120){
                const penmedia4 = 400;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia4}mm`)
            }else if(this.Calibre===128){
                 const penmedia4 = 450;
              console.log(`Penetração em Calibre ${this.Calibre} Taxa media de penetração ${penmedia4}mm`)
            }
            break;
            default:
            console.log("Informação Não cadastrada");
            break;
        }
    }
    VerificarTipoMotor(): void {
        switch(this.NomeMotor){
           case "Maybach HL 230 P30":
           console.log(`Motor ${this.NomeMotor} tem Potencia de ${this.PotenciaMotor}HP`)
           break;
           case "Rolls-Royce Meteor":
           console.log(`Motor ${this.NomeMotor} tem Potencia de ${this.PotenciaMotor}HP`)
           break;
           case "V-2-34":
           console.log(`Motor ${this.NomeMotor} tem Potencia de ${this.PotenciaMotor}HP`)
           break;
           default:
            console.log("Informação Não cadastrada");
            break;
        }
         
    }
    VerificarTipodeTank(): void {
        switch(this.TipoTank){
            case "Pesado":
            console.log(`Tank ${this.NomeTank} Tem Blindagem ${this.BlindagemMax}mm`);
            break;
            case "Medio":
            console.log(`Tank ${this.NomeTank} Tem Blindagem ${this.BlindagemMax}mm`);
            break;
            case "Leve":
            console.log(`Tank ${this.NomeTank} Tem Blindagem ${this.BlindagemMax}mm`);
            break;
            default:
            console.log("Informação Não cadastrada");
            break;
            
        }
    }
    VerificarVida(): void {
        if(this.vida>this.VidaMax){
            console.log(`Vida Alta ${this.vida}`);
        }else{
            console.log(`Vida Baixa ${this.vida}`);
        }
    }
}
const tank1 = new Tank("Tiger I",88,44,200,0,"APCBC",0,"Maybach HL 230 P30",700,"Pesado",1000,250);
tank1.VerificaTipoMunicao();
tank1.VerificarTipoMotor();
tank1.VerificarTipodeTank();
tank1.VerificarVida();
const tank2 = new Tank("Centurium",105,44,130,0,"APDS",0,"Rolls-Royce Meteor",200,"Medio",750,150);
tank2.VerificaTipoMunicao();
tank2.VerificarTipoMotor();
tank2.VerificarTipodeTank();
tank2.VerificarVida();
