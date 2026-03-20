let n1 = Number(prompt("Informe um Primeira Nota1 : "))
let n2 = Number(prompt("Informe um Primeira Nota1 : "))
let n3 = Number(prompt("Informe um Primeira Nota1 : "))
let soma = (n1+n2+n3)/3
if(soma<=7){ // Condição que diz se a nota do aluno for maior ou igual que 7 ele esta aprovado!!
    alert(`Aluno Aprovado  Nota:${soma}`)
}else{ 
    alert(`Aluno Reprovado Nota: ${soma}`)
}
