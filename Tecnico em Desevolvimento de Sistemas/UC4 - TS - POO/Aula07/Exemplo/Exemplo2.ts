interface SistemaSolar{
    NomePlaneta:string;
    Tamanho:number;
    TemLuas:boolean;
    VerificarLua():void;
}

class Planetas implements SistemaSolar{
    constructor(public NomePlaneta:string, public Tamanho:number, public TemLuas:boolean ){}

    VerificarLua(): void {
        if(this.TemLuas===true){
            console.log(`Planeta ${this.NomePlaneta} Tem Luas ${this.TemLuas}`);
        }else{
            console.log(`Planeta ${this.NomePlaneta} Não tem Luas ${this.TemLuas}`);
        }
    }
}

class Luas implements SistemaSolar{
    constructor(public NomePlaneta:string, public Tamanho:number, public TemLuas:boolean ){}

    VerificarLua(): void {
        console.log("Luas Não tem Luas em Orbita");
    }
}

class Sonda implements SistemaSolar{
    constructor(public NomePlaneta:string, public Tamanho:number, public TemLuas:boolean,public PlanetaRelacionado: Planetas ){}

    VerificarLua(): void {
        console.log(`Esta na Orbita do Planetas ${this.NomePlaneta}`);
    }
}


const planeta1 = new Planetas("Terra",20000,true);
const planeta2 = new Planetas("Mercurio",200,false);
const planeta3 = new Planetas("Jupiter",200000,true);

const Lua1 = new Luas("Titan",200000,false);
const Lua2 = new Luas("Europa",200000,false);
const Lua3 = new Luas("IO",200000,false);

const Sonda1 = new Sonda("Voyager",200,false,planeta1);

planeta1.VerificarLua();
planeta2.VerificarLua();
planeta3.VerificarLua();

Lua1.VerificarLua();
Lua2.VerificarLua();
Lua3.VerificarLua();

Sonda1.VerificarLua();
