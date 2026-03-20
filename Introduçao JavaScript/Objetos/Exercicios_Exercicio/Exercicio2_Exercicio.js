const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
// O codigo vai imprir a informação do objeto cachorro no console em forma de array.
// O console gato vai imprir cachorro, pois no parentes esta sendo passado informações do cachorro.
// Na variavel tartaruga esta sendo passado as informações do objeto cachorro e removido a e o pois o comando replace remove o a , o.
// O que vai ser impresso no console? No console será impresso 3 vezes o objeto cachorro, {nome: "Juca", idade: 3, raca: "SRD"...}.
//O que faz a sintaxe dos três pontos antes do nome de um objeto? E um sintaxe de espelhamento. 
