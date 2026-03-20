interface SistemaSolar{
    NomePlaneta:string;
    Tamanho:number;
    TemLua:boolean;
    Tipo:string;
    VerificarLua():void;
    VerificarAtsmofera():void;
}

class Planeta1 implements SistemaSolar{
    constructor(public NomePlaneta:string,public Tamanho:number, public TemLua:boolean,public Tipo:string){}
    VerificarLua(): void {
        console.log(`Planeta com Nome ${this.NomePlaneta}`);
        if(this.NomePlaneta==="Jupiter" || this.NomePlaneta === "Saturno"){
        console.log(`Planeta com Luas`);
        }else if(this.NomePlaneta==="Terra"){
            console.log(`Planeta com Uma Lua`);
        }else{
            console.log(`Planeta Sem Lua`);
        }
    }
    VerificarAtsmofera(): void {
        if(this.Tipo === "Planeta"){
            console.log(`Tem Atmosfera`);
        }else{
            console.log(`Não tem atmosfera`);
        }
    }
}
class Lua implements SistemaSolar{
    constructor(public NomePlaneta:string,public Tamanho:number, public TemLua:boolean,public Tipo:string){}
    VerificarAtsmofera(): void {
        console.log(`Lua com Nome ${this.NomePlaneta}`);
       if(this.NomePlaneta==="Titan"||this.NomePlaneta==="Tritão"){
        console.log(`Tem Atmosfera`);
       }else{
        console.log(`Não tem Atmosfera!`);
       }
    }
    VerificarLua(): void {
        console.log(`Luas Não tem Luas!`);
        console.log(`Lua com Nome ${this.NomePlaneta}`);
    }
    
}

const planeta1 = new Planeta1("Jupiter",20000,true,"Planeta");
const planeta2 = new Planeta1("Saturno",20000,true,"Planeta");
const planeta3 = new Planeta1("Terra",20000,true,"Planeta");
const planeta4 = new Planeta1("Marte",20000,true,"Planeta");
const planeta5 = new Planeta1("Mercurio",20000,true,"Planeta");
const planeta6 = new Planeta1("Venus",20000,true,"Planeta");

const lua1 = new Lua("Titan",2000,false,"Lua");
const lua2 = new Lua("Europa",2000,false,"Lua");
const lua3 = new Lua("Enceladus",2000,false,"Lua");
const lua4 = new Lua("IO",2000,false,"Lua");


planeta1.VerificarAtsmofera();
planeta2.VerificarAtsmofera();
planeta3.VerificarAtsmofera();
planeta4.VerificarAtsmofera();
planeta5.VerificarAtsmofera();
planeta6.VerificarAtsmofera();

planeta1.VerificarLua();
planeta2.VerificarLua();
planeta3.VerificarLua();
planeta4.VerificarLua();
planeta5.VerificarLua();
