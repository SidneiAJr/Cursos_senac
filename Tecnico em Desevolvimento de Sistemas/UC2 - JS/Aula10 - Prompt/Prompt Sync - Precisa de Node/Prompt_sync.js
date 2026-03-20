const prompt = require('prompt-sync')() // Importa o promp-sync para converter para prompt
let nome = prompt('Insira seu Nome : ') // Prompt solicita a informação
let idade = prompt('Insira Sua idade: ') // Prompt solicita a informação
let n1 = Number(prompt("Insira o Numero: "))
let n2 = Number(prompt("Insira o Numero: "))
let soma = n1+n2
console.log(`Seu Nome é ${nome} e sua idade ${idade}`)
console.log(`Soma :${soma}`)
