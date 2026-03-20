const carrinho =[{},{},{}]
const sacolao={
    nome:"banana",
    disponibilidade:true,
    
}
const sacolao2={
    nome:"batana",
    disponibilidade:true,
    
}
const sacolao3={
    nome:"milho",
    disponibilidade:true,
    
}
function receb(sacolao,sacolao2,sacolao3){
   carrinho.push(sacolao)
   carrinho.push(sacolao2)
   carrinho.push(sacolao3)
   console.log(carrinho)
   return carrinho

}
receb(sacolao,sacolao2,sacolao3)


