interface StatusBase{
    VidaMaxima:number;
    Vida:number; 
    Level:number;
    Armadura:number;
    Dano:number;
    VelocidadeAtaque:number;
    RouboDevida:number;
    Cura:number;
}
interface ClasseNome extends StatusBase{
    Nomeclasse:string;
    InfoClasse:string;

    TemPassiva():void;
    NãoTemPassiva():void;
}


class Guerreiro implements StatusBase, ClasseNome{
    constructor(public Vida:number,public Level:number,public Dano:number,public VelocidadeAtaque:number,public RouboDevida:number, public Cura:number,public Nomeclasse:string,public InfoClasse:string,public VidaMaxima:number, public Armadura:number){}

    TemPassiva(): void {
         console.log(`Classe ${this.Nomeclasse} Vida Maxima ${this.VidaMaxima} Vida ${this.Vida} Velocidade de Ataque ${this.VelocidadeAtaque}`);
        const vidaPerdida = this.VidaMaxima - this.Vida;
        const porcentagemPerdida = vidaPerdida / this.VidaMaxima;

        console.log(`Passiva de Guerreiro Supremo`);

        // Exemplo: para cada 10% de vida perdida, ganha +5 de dano e +10 de vida
        const bonusDano = Math.floor(porcentagemPerdida * 1) * 5; // Para cada 1% de vida Perdida O dano e aumentado
        const bonusVida = Math.floor(porcentagemPerdida * 1) * 10; 

        this.Dano += bonusDano;
        this.Vida += bonusVida;
    }

    NãoTemPassiva(): void {
   if(this.Nomeclasse==="Guerreiro"||this.Nomeclasse==="Mago"||this.Nomeclasse==="Berserk"){
     console.log(`Tem Passiva`);
   }else{
    console.log(`Não Tem Passiva`);
   }
    }
}

class Berserk implements StatusBase, ClasseNome{
    constructor(public Vida:number,public Level:number,public Dano:number,public VelocidadeAtaque:number,public RouboDevida:number, public Cura:number,public Nomeclasse:string,public InfoClasse:string,public VidaMaxima:number, public Armadura:number){}

    TemPassiva(): void {
        console.log(`Classe ${this.Nomeclasse} Vida Maxima ${this.VidaMaxima} Vida ${this.Vida} Velocidade de Ataque ${this.VelocidadeAtaque}`);
        const vidaPerdida = this.VidaMaxima - this.Vida;
        const porcentagemPerdida = vidaPerdida / this.VidaMaxima;

        console.log(`Passiva de Berserk Supremo Ativo`);

        // Exemplo: para cada 10% de vida perdida, ganha +5 de dano e +10 de vida
        const bonusDano = Math.floor(porcentagemPerdida * 1) * 15; // Para cada 1% de vida Perdida O dano e aumentado
        const bonusVida = Math.floor(porcentagemPerdida * 1) * 100; 
        const buff1 = Math.floor(porcentagemPerdida * this.VelocidadeAtaque* 1)*5; // exemplo: +5 de velocidade de ataque por 100% de vida perdida
        const buff3 = Math.floor(porcentagemPerdida * this.RouboDevida* 1)*5; // exemplo: +10% roubo de vida se com 100% vida perdida

        this.Dano += bonusDano;
        this.Vida += bonusVida;
        this.VelocidadeAtaque += buff1;
        this.RouboDevida += buff3;

    }

    NãoTemPassiva(): void {
   if(this.Nomeclasse==="Guerreiro"||this.Nomeclasse==="Mago"||this.Nomeclasse==="Berserk"){
     console.log(`Tem Passiva`);
   }else{
    console.log(`Não Tem Passiva`);
   }
    }
}


class Tank implements StatusBase, ClasseNome{
    constructor(public Vida:number,public Level:number,public Dano:number,public VelocidadeAtaque:number,public RouboDevida:number, public Cura:number,public Nomeclasse:string,public InfoClasse:string,public VidaMaxima:number, public Armadura:number){}

    TemPassiva(): void {
        console.log(`Classe ${this.Nomeclasse} Vida Maxima ${this.VidaMaxima} Vida ${this.Vida} Velocidade de Ataque ${this.VelocidadeAtaque}`);
        const vidaPerdida = this.VidaMaxima - this.Vida;
        const porcentagemPerdida = vidaPerdida / this.VidaMaxima;

        const bonusVida = Math.floor(porcentagemPerdida * 1)*500; 
        const AumentoArmor = Math.floor(porcentagemPerdida* this.Armadura * 1)*100; 
        const buff1 = Math.floor(porcentagemPerdida * 1)*5; // exemplo: +5 de velocidade de ataque por 100% de vida perdida
        const buff3 = Math.floor(porcentagemPerdida * 1)*5; // exemplo: +10% roubo de vida se com 100% vida perdida
    
        this.Vida += bonusVida;
        this.Armadura += AumentoArmor;
        this.VelocidadeAtaque += buff1;
        this.RouboDevida += buff3;

        console.log(`Passiva de Super Tank Ativa`);
      
    }

    NãoTemPassiva(): void {
   if(this.Nomeclasse==="Guerreiro"||this.Nomeclasse==="Mago"||this.Nomeclasse==="Berserk"){
     console.log(`Tem Passiva`);
   }else{
    console.log(`Não Tem Passiva`);
   }
    }
}


class Aura implements StatusBase, ClasseNome{
    constructor(public Vida:number,public Level:number,public Dano:number,public VelocidadeAtaque:number,public RouboDevida:number, public Cura:number,public Nomeclasse:string,public InfoClasse:string,public VidaMaxima:number, public Armadura:number){}

    TemPassiva(): void {
        console.log(`Classe ${this.Nomeclasse} Vida Maxima ${this.VidaMaxima} Vida ${this.Vida} Velocidade de Ataque ${this.VelocidadeAtaque}`);
        const vidaPerdida = this.VidaMaxima - this.Vida;
        const porcentagemPerdida = vidaPerdida / this.VidaMaxima;

        const bonusVida = Math.floor(porcentagemPerdida * 1)*500; 
        const AumentoArmor = Math.floor(porcentagemPerdida* this.Armadura * 1)*100; 
        const buff1 = Math.floor(porcentagemPerdida * this.RouboDevida* 1)*5; // exemplo: +5 de velocidade de ataque por 100% de vida perdida
        const buff3 = Math.floor(porcentagemPerdida * this.VelocidadeAtaque*1)*5; // exemplo: +10% roubo de vida se com 100% vida perdida
        const buff4 = Math.floor(porcentagemPerdida * this.Cura*1)*7;
    
        this.Vida += bonusVida;
        this.Armadura += AumentoArmor;
        this.VelocidadeAtaque += buff1;
        this.RouboDevida += buff3;
        this.Cura += buff4;

        console.log(`Aura Prime - Sentinela Sombria`);
      
    }

    NãoTemPassiva(): void {
   if(this.Nomeclasse==="Guerreiro"||this.Nomeclasse==="Mago"||this.Nomeclasse==="Berserk"||this.Nomeclasse==="Aura"){
     console.log(`Tem Passiva`);
   }else{
    console.log(`Não Tem Passiva`);
   }
    }
}

class Evolucao implements StatusBase,ClasseNome{
    constructor(public Vida:number,public Level:number,public Dano:number,public VelocidadeAtaque:number,public RouboDevida:number, public Cura:number,public Nomeclasse:string,public InfoClasse:string,public VidaMaxima:number, public Armadura:number){}

    TemPassiva(): void {
        if(this.Level>=20){
            console.log(`Parabens Sua Classe Evoluiu Level ${this.Level}`);
        }else{
             console.log(`Ainda Não evoluiu ${this.Level}`);
        }
    }

    NãoTemPassiva(): void {
        
    }
}


const classe1 = new Guerreiro(100,0,20,0.5,0.5,0,"Guerreiro","Guerreiro Normal",100,2);
const classe2 = new Tank(100,0,1,0.5,0.5,0,"Tank","Classe pra quem gosta de Aventura",100,2);
const classe3 = new Berserk (100,0,1,0.5,0.5,0,"Tank","Berserk",100,2);
const classe4 = new Aura (100,0,1,0.5,0.5,0,"Tank","Sentinela Sombria",100,2);
const classe6 = new Evolucao(100,21,1,0.5,0.5,0,"Tank","Sentinela Sombria",100,2);


classe1.TemPassiva();
classe2.TemPassiva();
classe3.TemPassiva();
classe4.TemPassiva();
classe6.TemPassiva();
