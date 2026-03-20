let numeroInicial = 5
let multiplicador = 5
let divisor = 5
let pedido1 = numeroInicial*multiplicador
let pedido2 = pedido1/divisor
let pedido3 = pedido2%7
let pedido4 = pedido3+10
let pedido5 = ((numeroInicial)*3)-3
let pedido6 = numeroInicial-(3*numeroInicial)
console.log(`Pedido 1: ${pedido1}`)
console.log(`Pedido 2: ${pedido2}`)
console.log(`Pedido 3: ${pedido3}`)
console.log(`Pedido 4: ${pedido4}`)
console.log(`Pedido 5: ${pedido5}`)
console.log(`Pedido 6: ${pedido6}`)
let numeroInicial = 50
let multiplicador = 500
let divisor = 5000
let pedido1 = numeroInicial*multiplicador
let pedido2 = pedido1/divisor
let pedido3 = pedido2%7
let pedido4 = pedido3+10
let pedido5 = pedido4 - (3*numeroInicial)
console.log(`Pedido 1: ${pedido1}`)
console.log(`Pedido 2: ${pedido2}`)
console.log(`Pedido 3: ${pedido3}`)
console.log(`Pedido 4: ${pedido4}`)
console.log(`Pedido 5: ${pedido5}`)
let nota1 = 5
let nota2 = 5
let nota3 = 5
let media = (nota1+nota2+nota3)/3
if(media>=5){
    console.log(`Media do Aluno do ${media} esta aprovado!`)
}else{
    console.log(`Media do Aluno do ${media}, esta reprovado!!`)
}

let idadehumano = 1
let idadedog = 7
let idadetotal = idadedog*idadehumano
console.log(`A idade do Dog será ${idadetotal}`)
// Sem prompt, resultado vai depender da idade do humano
let idadehumano = Number(prompt("Quantos anos o humano tem?"))
let idadedog = 7
let idadetotal = idadedog*idadehumano
console.log(`A idade do Dog será ${idadetotal}`)
// Aqui com promp, será o resultado
