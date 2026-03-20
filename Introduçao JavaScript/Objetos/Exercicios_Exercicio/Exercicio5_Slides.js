const pessoa={
    nome:"Pedro",
    idade: 20,
    profissão: "Minerador"
}
const pessoa2={
    nome:"Alan",
    idade: 25,
    profissão: "Vendedor"
}
function infopessoa(pessoa, pessoa2){
    const res = [pessoa.nome,pessoa.nome.length,pessoa.idade]
    return res
    const res2 = [pessoa2.nome,pessoa2.nome.length,pessoa2.idade]
    return res2
     
}

console.log(infopessoa(pessoa))
console.log(infopessoa(pessoa2))
