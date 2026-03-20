// Atividade 1 -> Criar um sistema para um cliente leigo sem Jargão tecnico(Sistema Hospital)
// Nome do grupo(Sidtopia)
// Explicar para Poofigherts

class JogoLuta{
    private Nomepersonagem:string;
    ataque:number;
    tipoArma:string;
    danoArma:number;
    private vida:number;

    constructor(Nomepersonagem:string,ataque:number,tipoArma:string,danoArma:number){
        this.Nomepersonagem = Nomepersonagem;
        this.ataque = ataque;
        this.danoArma = danoArma;
        this.tipoArma = tipoArma;
        this.vida = 100;
    }
    atacar( dano: number):void{
        dano = dano*0.5;
        this.ataque += dano; 
        console.log(`Dano Total: ${dano} Personagem: ${this.Nomepersonagem}`)
    }
    defender(armadura:number):void{
       this.vida =- armadura;
    }
    ver_vida():void{
        console.log(`Vida Atual: ${this.vida} Nome: ${this.Nomepersonagem}`)
    }
    dano_recebido(dano_inimigo:number):void{
        this.vida -= dano_inimigo;
        console.log(`Vida Atual personagem do Personagem: ${this.vida} Nome: ${this.Nomepersonagem}`)
    }
}

const classe1 = new JogoLuta ("Scorpion",2,"Corrente",1);
const classe2 = new JogoLuta ("SubZero",2,"Gelo",5);
const classe5 = new JogoLuta ("Kitana",2,"Lekes",2);
const classe6 = new JogoLuta ("Baraka",2,"Osso",7);


classe1.atacar(20);
classe2.atacar(20);
classe5.atacar(30);
classe6.atacar(15);

classe1.dano_recebido(1);
classe2.dano_recebido(1);
classe5.dano_recebido(1);
classe6.dano_recebido(1);

classe1.ver_vida();
classe2.ver_vida();
classe5.ver_vida();
classe6.ver_vida();

classe1.dano_recebido(1);
classe2.dano_recebido(1);
classe5.dano_recebido(1);
classe6.dano_recebido(1);


classe1.ver_vida();
classe2.ver_vida();
classe5.ver_vida();
classe6.ver_vida();


classe1.dano_recebido(1);
classe2.dano_recebido(1);
classe5.dano_recebido(1);
classe6.dano_recebido(1);


classe1.ver_vida();
classe2.ver_vida();
classe5.ver_vida();
classe6.ver_vida();

classe1.dano_recebido(1);
classe2.dano_recebido(1);
classe5.dano_recebido(1);
classe6.dano_recebido(1);


classe1.ver_vida();
classe2.ver_vida();
classe5.ver_vida();
classe6.ver_vida();

classe1.dano_recebido(1);
classe2.dano_recebido(1);
classe5.dano_recebido(1);
classe6.dano_recebido(1);

classe1.ver_vida();
classe2.ver_vida();
classe5.ver_vida();
classe6.ver_vida();

classe1.dano_recebido(1);
classe2.dano_recebido(1);
classe5.dano_recebido(1);
classe6.dano_recebido(1);

classe1.ver_vida();
classe2.ver_vida();
classe5.ver_vida();
classe6.ver_vida();

classe1.dano_recebido(1);
classe2.dano_recebido(1);
classe5.dano_recebido(1);
classe6.dano_recebido(1);

classe1.ver_vida();
classe2.ver_vida();
classe5.ver_vida();
classe6.ver_vida();

