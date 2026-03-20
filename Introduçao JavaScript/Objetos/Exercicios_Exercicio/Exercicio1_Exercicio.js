const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
//vai ser impresso na posição 0 que o começo do array elenco, será impresso Matheus Nachtergaele.
//No array elenco vai ser diminuido um numero.
//No ultimo será impresso o filme na posição 2 canal: "Globo", horario: "14h".
//O que vai ser impresso no console? No console vai ser impresso o objeto filme .elenco na posição 0,  console.log(filme.transmissoesHoje[2]) será acessado o valor posição 2 do array transmissoesHoje que será canal globo horario 14horas.

