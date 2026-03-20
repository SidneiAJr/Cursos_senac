let string = "Desenvolvimento"
let contador = 0
for(const ver of string){
    if("aeiou".includes(ver)){
        contador ++
    }
}
console.log(`Quantidade de Vogais ${contador}`)
