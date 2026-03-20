// Atividade 3:
class Tank{
    public Nome:string;
    public Calibre:number;
    public MotorPotencia:number;
    public Blindagem:number;


    constructor(Nome:string,Calibre:number,MotorPotencia:number,Blindagem:number){
     this.Nome = Nome;
     this.Calibre = Calibre;
     this.MotorPotencia = MotorPotencia;
     this.Blindagem = Blindagem;
    }

    MostrarInformacoes(){
      console.log(`Tank ${this.Nome} Calibre ${this.Calibre}MM Blindagem ${this.Blindagem}MM Potencia do Motor ${this.MotorPotencia} HP`);
    }
}
class TrocarMotor extends Tank{
        public novoMotor:string;
        public potenciaNova:number;

        constructor(Nome: string, Calibre: number, MotorPotencia: number, Blindagem: number, novoMotor: string, potenciaNova: number){
         super(Nome, Calibre, MotorPotencia, Blindagem);
         this.novoMotor = novoMotor;
         this.potenciaNova = potenciaNova;
        }
        
        SubstituirMotor(){
         console.log(`Novo Motor instalado ${this.novoMotor} e Potencia será ${this.potenciaNova}`);
        }
}

const tank1 = new Tank(`Tiger I`,88,300,150);
const tank2 = new Tank(`Tiger II`,88,300,150);
const tank3 = new Tank(`Centurium MKIII`,84,300,150);
const tank4 = new Tank(`Centurium MK X`,105,300,150);
const tank5 = new Tank(`T55`,105,300,150);

tank1.MostrarInformacoes();
tank2.MostrarInformacoes();
tank3.MostrarInformacoes();
tank4.MostrarInformacoes();

const tank6 = new TrocarMotor(tank1.Nome, tank1.Calibre, tank1.MotorPotencia, tank1.Blindagem, "VW 600P", 400);
const tank7 = new TrocarMotor(tank2.Nome, tank2.Calibre, tank2.MotorPotencia, tank2.Blindagem, "VW 600P", 400);
const tank8 = new TrocarMotor(tank2.Nome, tank2.Calibre, tank2.MotorPotencia, tank2.Blindagem, "VW 600P", 400);
const tank9 = new TrocarMotor(tank2.Nome, tank2.Calibre, tank2.MotorPotencia, tank2.Blindagem, "VW 600P", 400);
tank6.SubstituirMotor();
tank7.SubstituirMotor();
tank8.SubstituirMotor();
tank9.SubstituirMotor();
