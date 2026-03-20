const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//Explique o que o código faz. Qual o teste que ele realiza? O codigo faz uma condição para verificar se a reposta do usuario e resto da divisão e se ===0 para verificar se e par.
//Para que tipos de números ele imprime no console "Passou no teste"? resto da divisão por 2 ===0 se for numero par igual ao 20 ele passa, se for 15 ele esta reprovado.
//Para que tipos de números a mensagem é "Não passou no teste"? impar.
