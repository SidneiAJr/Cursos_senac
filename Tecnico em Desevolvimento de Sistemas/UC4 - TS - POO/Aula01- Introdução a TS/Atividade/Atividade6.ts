// 6 - Crie um objeto pessoa com propriedades tipadas (nome, idade, email).
let pessoa :{
    nome: String
    idade: Number
    email: String
    telefone: String
} ={
    nome: String(prompt("Insira o Nome: ")),
    idade: Number(prompt("Insira a idade ")),
    email: String(prompt("Insira o Email ")),
    telefone: String(prompt("Insira o Numero do telefone "))
}
console.log(`Nome: ${pessoa.nome} Idade: ${pessoa.idade} Email: ${pessoa.email} Telefone: ${pessoa.telefone}`);
