function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//No exemplo tem uma função e um objeto.
//Função Minha Função e Objeto pessoa.
//O que vai ser impresso no console? No console será impresso, backender com valor false, e tambem será impresso indefinido pois não foi definido nenhum valor para altura.

