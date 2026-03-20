import { VerificaPersonagem } from "./Interface";

export class Personagem implements VerificaPersonagem{
    constructor(public NomeItem:string,public QuantidadeItens:number,public DanoItem:number,public HabilidadeOculta:string,public VidaPersonagem:number,public nomePersonagem:string,public habilidade:string){}
    VerificarStatusPersonagem(): void {
        if(this.VidaPersonagem<=20){
            const habilidade = "Mão Nuclear - Mobs ao Redor são Varidos!";
            console.log(`Vida do Personagem baixa ${this.VidaPersonagem} Passiva Oculta Ativa ${habilidade}`);
        }else if(this.VidaPersonagem<=10){
            console.log(`Vida do Personagem baixa ${this.VidaPersonagem} Corre To sem Mana`);
        }
    }
    VerificarItens(){
         if(this.NomeItem==="Cajado"){
            console.log(`Personagem ${this.nomePersonagem} Usa Chuva de Meteoro`);
         }else if(this.NomeItem==="Espada"){
            console.log(`Personagem ${this.nomePersonagem} Correeeeeee!!!`);
         }else{
            console.log(`Personagem ${this.nomePersonagem} Rapaiz da Certo isso?`);
         }
    }
}