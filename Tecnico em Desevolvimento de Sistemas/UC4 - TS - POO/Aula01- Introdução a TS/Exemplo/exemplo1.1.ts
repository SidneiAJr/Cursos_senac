class Teste {
    n1: number = Number(prompt("Insira um numero: "));
    n2: number = Number(prompt("Insira um numero: "));
    n3: number = Number(prompt("Insira um numero: "));

    somar(): void {
        const soma = this.n1 + this.n2 + this.n3;
        console.log(`Soma ${soma}`);
    }
}

// Criar objeto da classe com o nome correto
const teste = new Teste();
teste.somar();  // Imprime: Soma 15
