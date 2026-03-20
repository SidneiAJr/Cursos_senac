//Atividade 2:
interface Instrumento{
    VerificarInstrumento():void;
}
interface TipoInstrumento{
    VerificarTipoInstrumento():void;
}

abstract class InstrumentoDefinicao implements Instrumento , TipoInstrumento{
    constructor(public NomeIntrument:string, public QuantidaInstrumento:number, public TipoInstrumento:string){}
    VerificarInstrumento(): void {
        
    }
    VerificarTipoInstrumento(): void {
        
    }
}
class Instrumento extends InstrumentoDefinicao implements Instrumento, TipoInstrumento{
    VerificarInstrumento(): void {
        if(this.TipoInstrumento==="Guitarra"){
          console.log(`Instrumento ${this.TipoInstrumento}  Tocando!`);
        }else if(this.TipoInstrumento==="Bateria"){
            console.log(`Instrumento ${this.TipoInstrumento} Tocando!`);
        }else if(this.TipoInstrumento==="Flauta"){
            console.log(`Instrumento ${this.TipoInstrumento} Tocando! `);
        }else{
            console.log(`Instrumento Não Existe!`);
        }
    }
    VerificarTipoInstrumento(): void {
        if(this.TipoInstrumento==="Guitarra"){
          console.log(`Instrumento ${this.TipoInstrumento}`);
        }else if(this.TipoInstrumento==="Bateria"){
            console.log(`Instrumento ${this.TipoInstrumento}`);
        }else if(this.TipoInstrumento==="Flauta"){
            console.log(`Instrumento ${this.TipoInstrumento}`);
        }else{
            console.log(`Instrumento Não Existe!`);
        }
    }
}

const Instrumento1 = new Instrumento("Guitarra",1,"Guitarra");
const Instrumento2 = new Instrumento("Flauta",1,"Flauta");
const Instrumento3 = new Instrumento("Bateria",1,"Bateria");

Instrumento1.VerificarInstrumento();
Instrumento1.VerificarTipoInstrumento();
Instrumento2.VerificarInstrumento();
Instrumento2.VerificarTipoInstrumento();
Instrumento3.VerificarInstrumento();
Instrumento3.VerificarTipoInstrumento();
