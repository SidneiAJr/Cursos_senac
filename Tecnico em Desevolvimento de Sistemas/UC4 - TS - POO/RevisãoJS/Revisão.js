/*
Função -> que pede nome do usuario e idade e um numero soma, divide, e multiplica, e subtrai
*/

//import readline from 'readline';

function infouser(){
    let nome = String(prompt("Insira seu nome: "))
    let idade = Number(prompt("Insira sua Idade: "))
    let n1 = Number(prompt("Insira um numero: "))
    let n2 = Number(prompt("Insira um numero: "))
    let nota1 = Number(prompt("Insira sua nota: "))
    let nota2 = Number(prompt("Insira sua nota: "))
    let nota3 = Number(prompt("Insira sua nota: "))
    let notatotal = (nota1+nota2+nota3)/3
    let divisao = n1/n2
    let soma = n1+n2
    let subtracao = n1+n2
    let multiplicao = n1+n2
    console.log(`Seu nome é ${nome}, Sua idade é ${idade} e divisão dos numeros escolhidos é ${divisao} e a soma será ${soma} a subtracao será ${subtracao } e Multiplicação ${multiplicao}`)
    if(notatotal>=6){
        console.log(`Aluno é ${nome} Aprovado! Nota Total ${notatotal.toFixed(2)}`)
    }else if(notatotal>=5){
        console.log(`Aluno é ${nome} Aprovado parcialmente! Nota Total ${notatotal.toFixed(2)}`)
    }else{
        console.log(`Aluno é ${nome} Reprovado! Nota Total ${notatotal.toFixed(2)}`)
    }
    //Obejeto solicitado
     const pessoa ={
        cidade : String(prompt("Informe a cidade: ")),
        telefone : Number(prompt("Informe o Telefone: ")),
        nome_pessoa : String(prompt("Informe o Nome: "))
    }
    console.log(`O Nome da Pessoa é ${pessoa.nome_pessoa} Telefone ${pessoa.telefone}e a cidade ${pessoa.cidade}`)
    
}
// Função de Menu -> Menu principal
function menu(){
    let opcao = Number(prompt("1-Informação do usuario \n  2-Cardapio \n 3-Selecionar Mes \n 4 - Soma de Array \n 5- Contador com While \n 6- Par & Impar \n 7-Contador de 20 \n 8-flecha \n 9- Saudação"))
    switch(opcao){
        case 1:
            infouser()
        break;
        case 2:
            mes()
        break;
        case 3:
            cardapio()
            break;
        case 4:
            array_soma()
            break;
        case 5:
            teste_loop()
            break;
        case 6:
            par_impar()
            break;
        case 7:
            conta_20()
            break;
        case 8:
            flecha()
            break;
        case 9:
            saudacao()
            break;
     default:
     console.log("Opção invalida")
     break;
    }
}

// Função Mes -> Função do mes
function mes(){
      let opcao = prompt ("Selecione o Mes desejado: \n 1-Janeiro \n 2-Fevereiro \n 3-Março \n 4-Abril \n 5-Maio")
      switch(opcao){
        case 1:
          console.log("Você selecionou Janeiro")
          break;
        case 2:
          console.log("Você selecionou Fevereiro")
          break;
        case 3:
          console.log("Você selecionou Março")
          break;
        case 4:
          console.log("Você selecionou Abril")
          break;
        case 5:
          console.log("Você selecionou Maio")
          break;
        default:
          console.log("Opção inválida")
          break;
      }
}
// Função do cardapio -> Função cardapio
function cardapio(){
    let opcao = prompt ("Selecione o prato desejado: \n 1-Bife de frango \n 2-Bife de Carne 2 \n 3-Bife de carne II")
    switch(opcao){
        case 1:
          console.log("Você selecionou Bife de frango")
          break;
        case 2:
          console.log("Você selecionou o Bife de Carne")
          break;
        case 3:
          console.log("Você selecionou o Bife de carne II")
          break;
        default:
          console.log("Opção inválida")
          break;
    }
}
// Função de Soma de Array
function array_soma(){
     let array = [1, 2, 3, 4, 5]
     let soma = 0
     for(let i = 0; i < array.length; i++){
         soma += array[i]
     }
     console.log("A soma dos elementos do array é: " + soma)
     let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango']
     for (let fruta of frutas) {
    console.log(fruta)
}
    let cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo']
cores.forEach(function(cor) {
    console.log(cor)
})
}
//Função do Teste de Loop
function teste_loop(){
    let i = 0
    while(i<11){
        console.log(`Contando ${i}`)
        i++
    }
}
//Função de par Impar
function par_impar(){
    let numero = Number(prompt("Digite um Numero:"))
    let n2 = 0
    if(numero % 2 === 0){
        console.log("O número é par.")
    }else{
        console.log("O número é ímpar.")
    }
}
// Função contagem ate 20
function conta_20(){
    for(let i=0; i<=21; i++){
        if(i % 2 === 0){
            console.log(`O número ${i} é par.`)
        }else{
            console.log(`O número ${i} é ímpar.`)
        }
    }
}
// Função flecha
function flecha() {
    const somaArray = (array) => {
        let soma = 0
        for (let numero of array) {
            soma += numero
        }
        return soma
    }

    // Chamando a função e imprimindo
    const resultado = somaArray([5, 10, 15])
    console.log(`A soma do array é: ${resultado}`)
}
const readline = require('readline')

// Criar interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function saudacao() {
    rl.question("Qual é o seu nome? ", function(nome) {
        rl.question("Qual é a sua idade? ", function(idade) {
            console.log(`Olá, ${nome}! Você tem ${idade} anos. Seja bem-vindo(a)!`)
            rl.close()
        })
    })
}

menu()
