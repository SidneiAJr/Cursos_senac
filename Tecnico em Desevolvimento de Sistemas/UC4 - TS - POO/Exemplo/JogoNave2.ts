interface Classe{
    NaveTipo():void;
    ArmamentoNave():void;
    ClasseNave():void;
    PropulcaoNave():void;
}

interface especie{
    TipoEspecie():void;
}

interface VerificarStatusNave{
    NivelHP():void;
    BlindagemTipo():void;
}

abstract class Nave implements Classe,especie,VerificarStatusNave{
    constructor(public ClasseNaveReal:string, public TipoArma:string,public Dano:number,public danoEscalavel:number,public Movimento:number,public quantidadearmas:number,public efederal:boolean,public armas:number[],public PenetracaoMedia:number,public tamanho:number,public TipoBlindagemReal:string ){}
    NaveTipo():void{};
    ArmamentoNave():void{};
    ClasseNave():void{};
    PropulcaoNave():void{};
    TipoEspecie():void{};
    NivelHP():void{};
    BlindagemTipo():void{};
}

class FederalNave extends Nave{
    NaveTipo(): void {
        switch(this.ClasseNaveReal){
            case "Cruzador Pesado":
            console.log(`Classe ${this.ClasseNaveReal} Arma Principal ${this.armas} Armas ${this.quantidadearmas[0]} Armas2 ${this.quantidadearmas[1]} ${this.quantidadearmas[2]} Tamanho ${this.tamanho}`)
            break;
            case "Cruzador Leve":
            console.log(`Classe ${this.ClasseNaveReal} Tem ${this.armas} Quantidade de armas ${this.quantidadearmas} Tamanho ${this.tamanho}`)
            break;
            case "Cruzador Medio":
            console.log(`Classe ${this.ClasseNaveReal} Tem ${this.armas} Quantidade de armas ${this.quantidadearmas} Tamanho ${this.tamanho}`)
            break;
            case "Couraçado":
            console.log(`Classe ${this.ClasseNaveReal} Tem ${this.armas} Quantidade de armas ${this.quantidadearmas} Tamanho ${this.tamanho}`)
            break;
            case "Couraçado Pesado":
            console.log(`Classe ${this.ClasseNaveReal} Tem ${this.armas} Quantidade de armas ${this.quantidadearmas} Tamanho ${this.tamanho}`)
            break;
            case "Couraçado Supremo":
            console.log(`Classe ${this.ClasseNaveReal} Tem ${this.armas} Quantidade de armas ${this.quantidadearmas} Tamanho ${this.tamanho}`)
            break;
            case "Estrela Suprema":
            console.log(`Classe ${this.ClasseNaveReal} Tem ${this.armas} Quantidade de armas ${this.quantidadearmas} Tamanho ${this.tamanho}`)
            break;
            case "Caçador Orbital Supremo":
            console.log(`Classe ${this.ClasseNaveReal} Tem ${this.armas} Quantidade de armas ${this.quantidadearmas} Tamanho ${this.tamanho}`)
            break;
        }
    }
    ArmamentoNave(): void {
        switch(this.TipoArma){
            case "Cinetico":
            let dano = this.TipoBlindagemReal = "Blindagem";
            console.log(`🛡️Munição Superpesada penetra Blindagem Ineficiente contra escudo ${dano}`)
            break;
            case "Laiser":
            let dano2 = this.TipoBlindagemReal = "Escudo";
            console.log(`🛡️Munição Muito Eficas contra escudo ${dano2}`)
            break;
            case "Torpedo":
            let dano3 = this.TipoBlindagemReal = "Escudo || Blindagem";
            console.log(`🛡️Munição boa contra escudo e Blindagem | Causa Dano Devastador ${dano3}`)
            break;
            case "AA":
            console.log(`Defesa AA`)
            break;
            default:
            console.log(`🛡️Armamento não Selecionado`)
            break;
        }
    }

}













const nave1 = new FederalNave("Couraçado Pesado","Cinetico",200,0.5,300,150,true,[30,30,30],200,2000,"Escudo");
nave1.NaveTipo();
nave1.ArmamentoNave();
