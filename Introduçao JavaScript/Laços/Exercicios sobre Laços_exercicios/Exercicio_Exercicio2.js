const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//1)O que vai ser impresso no console?19,21,23,25,27,30
//2)Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?Não somente o for of não e o suficiente, pois será necessario colocar a posição do array.
