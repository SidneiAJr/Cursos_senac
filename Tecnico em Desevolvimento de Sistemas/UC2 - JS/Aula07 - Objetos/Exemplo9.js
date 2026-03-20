const usuario={
    nome:"professor",
    idade:25,
    email:"não há",
    cidade: "SP",
    endereco:"Rua dos Baloso",
    CPF:"Não há"
    
}
const novoUser={
    ...usuario,
    nome:"professor 2",
    idade:30
}
const novoUser1={
    ...usuario,
    nome:"professor 3",
    idade:15,
    cpf:30
}
console.log(usuario)
console.log(novoUser)
console.log(novoUser1)
