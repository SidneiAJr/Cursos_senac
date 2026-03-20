const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//O que a primeira linha está fazendo?Inserção de numero pelo usuario e esta convertendo para numero.
//Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? Vai dar erro, pois mensagem não esta definido, abaixo codigo corrigido, falta um else, se o usuario digitar 10 vai imprimir com erro.
const numero = Number(prompt("Digite o primeiro número"))
const mensagem = "Essa mensagem é secreta!!!"

if(numero > 0) {
  console.log("Esse número passou no teste")
}

console.log(mensagem)
// Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. corrigi o codigo acima, falta um else pois se o condicional não haver else pode haver erro.

