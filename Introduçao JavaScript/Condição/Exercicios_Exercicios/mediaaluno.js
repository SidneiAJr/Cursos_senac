
const nome = prompt("Por Favor Insira seu nome: ")
const idade = prompt("Por Favor Informe sua Idade: ")
const cidade = prompt("Por Favor Insira sua Cidade: ")
let ano_nascimento = prompt("Por Favor Insira seu ano de nascimento: ")
let usuario = prompt("Por Favor informe seu usuario:")
let opcao = prompt("Digite o Numero de opção no menu: ")
let menu = [nome,idade,cidade,ano_nascimento]
let nota1 = Number(prompt("Por favor Digite a nota1:  "))
let nota2 = Number(prompt("Por favor Digite a nota2:  "))
let nota3 = Number(prompt("Por favor Digite a nota3:  "))
let media = (nota1+nota2+nota3)/6
let mediaaluno = [usuario+media]




console.log(`Bem vindo ao sistema  ${usuario}`)
console.log("A Opção Selecionada é:  "+ menu[opcao])
console.log("A sua Media é  " + media)
console.log(`A media final de : ${mediaaluno}`)
if(media>6){
    console.log("Aluno Aprovado  " + usuario)
   }else(media<6)
   console.log("Aluno Reprovado  " + usuario)
   
   
   
