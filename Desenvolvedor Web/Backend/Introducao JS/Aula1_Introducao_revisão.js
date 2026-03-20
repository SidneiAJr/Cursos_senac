// Fução que pede tudo Literalmente
function pedeTudo() {
    let nome = String(prompt("Insira seu Nome: ")); // Variavel 1
    let idade = Number(prompt("Insira Sua Idade")); // Variavel 1
    let nota1 = Number(prompt("Insira nota: ")) // Variavel 1
    let nota2 = Number(prompt("Insira nota: ")) // Variavel 2
    let nota3 = Number(prompt("Insira nota: ")) // Variavel 3
    let soma = (nota1 + nota2 + nota3) / 3; // Somando os numeros
    let numero = Number(prompt("Insira um Numero: ")); // Variavel 1
    let diaSemana = Number(prompt("Insira um dia da semana de 1 a 7 "));// Variavel 1

    if (soma >= 7) {
        console.log(`Aprovado ${soma.toFixed(2)}`)
    } else if (soma >= 5) {
        console.log(`Em Recuperacao ${soma.toFixed(2)}`)
    } else {
        console.log(`Reprovado ${soma.toFixed(2)}`)
    }

    let verificaNumero = numero % 2

    if (verificaNumero === 0) {
        console.log(`E par`);
    } else {
        console.log(`E impar`);
    }

    const frutas = ["Maça", "Banana", "uva"];
    for (const fruta of frutas) {
        console.log(frutas)
    }

    for (let i = 0; i <= 10; i++) {
        console.log(`soma é: ${i + numero}`)
    }

    const s = (a, b) => a + b
    console.log(`Resultado da soma de 3 + 5: ${s(3, 5)}`);

    console.log(`Ola ${nome} Tudo certo? Soma: ${soma.toFixed(2)} o Numero que escolheu ${verificaNumero}`);

    switch (diaSemana) {
        case 1:
            console.log(`Dia selecionado é Segunda :${diaSemana}`)
            break;
        case 2:
            console.log(`Dia selecionado é Terça: ${diaSemana}`)
            break;
        case 3:
            console.log(`Dia selecionado é Quarta: ${diaSemana}`)
            break;
        case 4:
            console.log(`Dia selecionado é Quinta: ${diaSemana}`)
            break;
        case 5:
            console.log(`Dia selecionado é Sexta: ${diaSemana}`)
            break;
        case 6:
            console.log(`Dia selecionado é Sabado: ${diaSemana}`)
            break;
        case 7:
            console.log(`Dia selecionado é Domingo: ${diaSemana}`)
            break;
    }

    const numeros = [1, 2, 3, 4, 5];
    let somaArray = 0;
    for (let i = 0; i < numeros.length; i++) {
        somaArray += numeros[i];
    }

     const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Qual o seu nome? ', (nome) => {
        console.log(`Olá, ${nome}! Bem-vindo!`);
        rl.close();
    });


}

pedeTudo()
