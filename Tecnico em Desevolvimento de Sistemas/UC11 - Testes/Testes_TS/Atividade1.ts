// Função de soma
// Recebe dois números e retorna a soma deles
export function teste(n1: number, n2: number): number {
    // Calcula a soma
    let soma = n1 + n2;
    
    // Mostra no console (útil pra debug, mas não necessário)
    console.log(`Soma : ${soma}`);
    
    // Retorna o resultado
    return soma;
}

// Função de subtração
// Recebe dois números e retorna a subtração (n1 - n2)
export function diminuir(n1: number, n2: number) {
    // Calcula a subtração
    let sub = n1 - n2;
    
    // Mostra no console (com texto errado – deveria ser "Subtração")
    console.log(`Soma : ${sub}`);
    
    // Retorna o resultado
    return sub;
}

// Função de multiplicação
// Recebe dois números e retorna a multiplicação
export function mult(n1: number, n2: number) {
    // Calcula o produto
    let mult = n1 * n2;
    
    // Mostra no console (com texto errado – deveria ser "Multiplicação")
    console.log(`Soma : ${mult}`);
    
    // Retorna o resultado
    return mult;
}

// Função de divisão
// Recebe dois números e retorna a divisão (n1 / n2)
export function div(n1: number, n2: number) {
    // Calcula a divisão
    let div = n1 / n2;
    
    // Mostra no console (com texto errado – deveria ser "Divisão")
    console.log(`Soma : ${div}`);
    
    // Retorna o resultado
    return div;
}
