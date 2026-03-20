const prompt = require('prompt-sync')() // Importa o promp-sync para converter para prompt
let idadeUser = Number(prompt("Insira A idade do Meliante: "))
let Senha = Number(prompt("Qual a senha? "))
let maiorIdade = 18
let comparaidade =  idadeUser>maiorIdade
let usuarioSenha = 1234
let senhaverdade = Senha===usuarioSenha
let comparatotal = comparaidade&&senhaverdade
console.log(`O Usuario e Maior de idade ${comparaidade}`)
console.log(`Entra Permitida? ${comparatotal}`)
