//Atividade 2:
class Funcionario{
    public nome:string;
    public salario:number;
    public setor:string;
    public InformacaoSetor:string;

    constructor(nome:string,setor:string,InformacaoSetor:string){
     this.nome = nome;
     this.setor = setor;
     this.InformacaoSetor = InformacaoSetor;
     this.salario = 1518;
    }

    MostrarSalario(){
        console.log(`Salario R$ ${this.salario}`);
    }

}

class Gerente extends Funcionario{
    MostrarSalarioGerencia(): void {
        console.log(`Gerente Nome ${this.nome} Salario R$ Base ${this.salario}`);
    }
    aumentarSalario(){
        let bonusSalario = this.salario*0.05;
        let SalarioReajustado = this.salario+bonusSalario;
        console.log(`Gerente Nome ${this.nome} Salario R$ com Reajuste de ${SalarioReajustado}`);
    }
}

class Estagiario extends Funcionario{
    MostrarSalarioEstagiario(): void {
        console.log(`Estagiario Nome ${this.nome} Salario R$ ${this.salario}`);
    }
    receberAjudaDeCusto(){
        let Ajuda = this.salario+100;
        console.log(`Salario de Estragiario é  R$ ${Ajuda}+ 100 R$ de Ajuda`);
    }
}

// Criar Instancia da Gerencia:
const gerente1 = new Gerente("Jian L Pallini","Administração","Gerente de Setor");
const gerente2 = new Gerente("Kalleo Prime","Administração II","Gerente de Setor");
gerente1.MostrarSalarioGerencia();
gerente2.MostrarSalarioGerencia();
gerente1.aumentarSalario();
gerente2.aumentarSalario();

// Criar Instancia de Estagiario:
const estagiario = new Estagiario("Erika S Lima","Administração","Estagiario de ADM");
const estagiario2 = new Estagiario("Gabriela L Pereira","Administração II","Estagiario de ADM");
estagiario.MostrarSalarioEstagiario();
estagiario2.MostrarSalarioEstagiario();
estagiario.receberAjudaDeCusto();
estagiario2.receberAjudaDeCusto();
