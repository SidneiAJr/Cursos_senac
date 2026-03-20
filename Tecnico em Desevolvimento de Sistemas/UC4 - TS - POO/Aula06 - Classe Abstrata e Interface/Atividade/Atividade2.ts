// Atividade 2:

interface Veiculo {
  NomeVeiculo: string;
  Anoveiculo: number;
  PotenciaMotor:number;
  Marca:string;
  ligar(): void;
  TrocarMotor():void;
  Acelerar():void;
}


class Carro implements Veiculo{
      public NomeVeiculo:string;
      public Anoveiculo:number;
      public PotenciaMotor:number;
      public Marca:string;
      constructor(NomeVeiculo:string,Anoveiculo:number,PotenciaMotor:number,Marca:string){
       this.NomeVeiculo = NomeVeiculo;
       this.Anoveiculo = Anoveiculo;
       this.PotenciaMotor = PotenciaMotor;
       this.Marca = Marca;
      }
      ligar(): void{
        console.log(`Carro ${this.NomeVeiculo} Ano ${this.Anoveiculo} Potencia do Motor ${this.PotenciaMotor} HP Marca ${this.Marca}`);
      }
      TrocarMotor(): void {
           console.log(`Motor Trocado para Novo!`);
      }
      Acelerar(): void {
          console.log(`Carro Esta Acelerando ${this.NomeVeiculo}`)
      }
}

class Moto implements Veiculo{
     public NomeVeiculo:string;
      public Anoveiculo:number;
      public PotenciaMotor:number;
      public Marca:string;
      constructor(NomeVeiculo:string,Anoveiculo:number,PotenciaMotor:number,Marca:string){
      this.NomeVeiculo = NomeVeiculo;
       this.Anoveiculo = Anoveiculo;
       this.PotenciaMotor = PotenciaMotor;
       this.Marca = Marca;
      }
      ligar(): void{
       console.log(`Carro ${this.NomeVeiculo} Ano ${this.Anoveiculo} Potencia do Motor ${this.PotenciaMotor} HP`);
      }
      TrocarMotor(): void {
           console.log(`Motor Trocado para Novo!`);
      }
      Acelerar(): void {
         console.log(`Carro Esta Acelerando ${this.NomeVeiculo}`)
      }
}

const Carro1 = new Carro("Vectra",1998,99,"CH");
const Carro2 = new Carro("Gol",1998,65,"VW");
const Carro3 = new Carro("Doge Viper",1998,100,"DG");

Carro1.ligar();
Carro2.ligar();
Carro3.ligar();
Carro1.Acelerar();
Carro2.Acelerar();
Carro3.Acelerar();
Carro1.TrocarMotor();
Carro2.TrocarMotor();
Carro3.TrocarMotor();

const Moto1 = new Moto("CB500",1990,90,"Honda");
const Moto2 = new Moto("CB700",1997,90,"Honda");

Moto1.ligar();
Moto1.ligar();
Moto1.Acelerar();
Moto2.Acelerar();


