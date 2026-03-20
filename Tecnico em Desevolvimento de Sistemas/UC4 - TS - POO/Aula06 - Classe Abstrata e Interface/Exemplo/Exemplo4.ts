interface ClassePersonagem{
    Vida:number;
    Level:number;
    Dano:number;
    VelocidadeAtaque:number;
    VidaMaxima: number;
}
interface buffLevel extends ClassePersonagem{
    BonusVida:number;
    BonusLevel:number;
    BonusDano:number;
    BonusVelocidade:number;
    AumentoStatus():void;
    Passiva():void;
    PassivaOculta():void;
}

class Guerreiro implements ClassePersonagem,buffLevel{
    constructor(public Vida:number, public Level:number,public Dano:number,public VelocidadeAtaque:number,public BonusVida:number, public BonusLevel:number,public BonusDano:number,public BonusVelocidade:number,public VidaMaxima: number){}
    AumentoStatus(): void {
        this.Vida += 10;
        this.Dano += 1;
        this.Level += 1;
        this.VelocidadeAtaque +=0.05;
        console.log(`Parabens Upou de Nivel para Nivel ${this.Level} Vida Aumentada ${this.Vida} Dano Aumentado ${this.Dano} Velocidade Ataque ${this.VelocidadeAtaque}`);
    }
    Passiva(): void {
        const buff1 = this.BonusDano + this.Dano;
        console.log(`Dano Aumentado com Buff ${buff1}`);
        const buff2 = this.BonusVida + this.Vida;
        console.log(`Vida Com Buff ${buff2}`);
    }
    PassivaOculta(): void {
        if(this.Vida / this.VidaMaxima < 0.5){
            this.Dano+=0.5;
            console.log(`Dano Aumentado ${this.Dano}`);
        }else if(this.Vida / this.VidaMaxima < 0.5){
            console.log(`Dano Aumentado ${this.Dano}`);
        }else{
            console.log(`Voce Morreu !!`);
        }
    }
}

class Tank implements ClassePersonagem,buffLevel{
    constructor(public Vida:number, public Level:number,public Dano:number,public VelocidadeAtaque:number,public BonusVida:number, public BonusLevel:number,public BonusDano:number,public BonusVelocidade:number,public VidaMaxima: number){}
    AumentoStatus(): void {
        this.Vida += 100;
        this.Dano += 0.5;
        this.Level += 1;
        this.VelocidadeAtaque +=0.075;
        console.log(`Parabens Upou de Nivel para Nivel ${this.Level} Vida Aumentada ${this.Vida} Dano Aumentado ${this.Dano} Velocidade Ataque ${this.VelocidadeAtaque}`);
    }
    Passiva(): void {
        const buff1 = this.BonusDano + this.Dano;
        console.log(`Dano Aumentado com Buff ${buff1}`);
        const buff2 = this.BonusVida + this.Vida;
        console.log(`Vida Com Buff ${buff2}`);
    }
    PassivaOculta(): void {
        if(this.Vida / this.VidaMaxima < 0.5){
            this.Dano+=0.5;
            this.Vida+=15.55;
            console.log(`Dano Aumentado ${this.Dano}`);
        }else if(this.Vida / this.VidaMaxima < 0.5){
            console.log(`Dano Aumentado ${this.Dano}`);
        }else{
            console.log(`Voce Morreu !!`);
        }
    }
}

class MagoAtomico implements ClassePersonagem,buffLevel{
    constructor(public Vida:number, public Level:number,public Dano:number,public VelocidadeAtaque:number,public BonusVida:number, public BonusLevel:number,public BonusDano:number,public BonusVelocidade:number,public VidaMaxima: number){}
    AumentoStatus(): void {
        this.Vida += 5;
        this.Dano += 15;
        this.Level += 1;
        this.VelocidadeAtaque +=0;
        console.log(`Parabens Upou de Nivel para Nivel ${this.Level} Vida Aumentada ${this.Vida} Dano Aumentado ${this.Dano} Velocidade Ataque ${this.VelocidadeAtaque}`);
    }
    Passiva(): void {
        const buff1 = this.BonusDano + this.Dano;
        console.log(`Dano Aumentado com Buff ${buff1}`);
        const buff2 = this.BonusVida + this.Vida;
        console.log(`Vida Com Buff ${buff2}`);
    }
    PassivaOculta(): void {
        if(this.Vida / this.VidaMaxima < 0.5){
            this.Dano+=1500;
            this.Vida+=0;
            console.log(`Dano Aumentado ${this.Dano}`);
        }else if(this.Vida / this.VidaMaxima < 0.5){
            console.log(`Dano Aumentado ${this.Dano} Efeito Mão Suprema e Combustão Atomica!!`);
        }else{
            console.log(`Voce Morreu !!`);
        }
    }
}

class Berseker implements ClassePersonagem,buffLevel{
    constructor(public Vida:number, public Level:number,public Dano:number,public VelocidadeAtaque:number,public BonusVida:number, public BonusLevel:number,public BonusDano:number,public BonusVelocidade:number,public VidaMaxima: number){}
    AumentoStatus(): void {
        this.Vida += 5;
        this.Dano += 15;
        this.Level += 1;
        this.VelocidadeAtaque +=0;
        console.log(`Parabens Upou de Nivel para Nivel ${this.Level} Vida Aumentada ${this.Vida} Dano Aumentado ${this.Dano} Velocidade Ataque ${this.VelocidadeAtaque}`);
    }
    Passiva(): void {
        const buff1 = this.BonusDano + this.Dano;
        console.log(`Dano Aumentado com Buff ${buff1}`);
        const buff2 = this.BonusVida + this.Vida;
        console.log(`Vida Com Buff ${buff2}`);
    }
    PassivaOculta(): void {
        if(this.Vida / this.VidaMaxima < 0.5){
            this.VelocidadeAtaque += 1.75;
            console.log(`Dano Aumentado ${this.Dano}`);
        }else if(this.Vida / this.VidaMaxima < 0.5){
            console.log(`Dano Aumentado ${this.Dano} Efeito Mão Suprema e Combustão Atomica!!`);
        }else{
            console.log(`Voce Morreu !!`);
        }
    }
}


//Classe Guerreiro
console.log("Classe Guerreiro");
const classe1 = new Guerreiro(10,0,1,0.05,1,0,0,0,50);
classe1.Passiva();
classe1.AumentoStatus();
classe1.PassivaOculta();
console.log("=====================================");

//Classe Tank
console.log("Classe Tank");
const classe2 = new Tank(10,0,1,0.05,1,0,0,0,200);
classe2.Passiva();
classe2.AumentoStatus();
classe2.PassivaOculta();
console.log("=====================================");

//Classe MagoAtomico
console.log("Classe Mago Atomico");
const classe3 = new MagoAtomico(10,0,1,0.05,1,0,0,0,75);
classe2.Passiva();
classe2.AumentoStatus();
classe3.PassivaOculta();
console.log("=====================================");

//Classe Berseker
console.log("Classe Berseker");
const classe4 = new Berseker(10,0,1,0.05,1,0,0,0,75);
classe2.Passiva();
classe2.AumentoStatus();
classe3.PassivaOculta();
console.log("=====================================");
