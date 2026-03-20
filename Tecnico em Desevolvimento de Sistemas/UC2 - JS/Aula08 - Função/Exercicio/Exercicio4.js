function moedas(){
    let quantidademoedas = Number(prompt("Quantidade de moedas: "))
    let moedaspequenas = (quantidademoedas*1)
    let moedaspgrnade = (quantidademoedas*5)
    let pontuaçãototal = moedaspequenas+moedaspgrnade
    alert(`Quantidade de Pontos em Moedas Pequenas : ${moedaspequenas} Quantidade de Pontos em moedas Grande: ${moedaspgrnade} e a Pontuação Total será ${pontuaçãototal}`)
    return moedaspequenas, moedaspgrnade
}
moedas()
function somamoedas(pequena,grandes){
    return(Number(pequena)*1)+(Number(grandes)*5)
}
let pequena = prompt("Insira a quantidade de moedas grandes")
let grandes = prompt("Insira a quantidade de moedas grandes")
let total = somamoedas(pequena,grandes)
alert(`voce fez um total de ${total}`)
somamoedas()
