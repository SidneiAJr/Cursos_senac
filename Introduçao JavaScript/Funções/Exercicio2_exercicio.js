let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//A opção tolowercase deixa o texto em caixabaixa("Minusculo").
//Será solicitado ao usuario que digite um texto, pois a um promt.
//O Texto será impresso.
//A o comando return, que retorna, o texto.
//será uma comparação, se o usuario digitar cenoura retorna true se não retorna falso.
// Ao inserir a frase Eu gosto de cenoura, o valor retorna true pois a cenoura no texto,CENOURA é bom pra vista tambem retorna true,Cenouras crescem na terra tambem retorna true. 
