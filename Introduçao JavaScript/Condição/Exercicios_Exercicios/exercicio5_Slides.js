let pessoa = prompt("Voce concluiu o ensino medio: ")
let pessoa2 = prompt("Quantos anos voce tem?: ")
let pessoa3 = prompt("Voce cursa outra faculdade?:")

function ensino(pessoa,pessoa2,pessoa3){
if(pessoa==="sim"&&pessoa2>=18&&pessoa3==="nao"){
    console.log("Voce Pode estudar!")
}else{
console.log("Voce não pode estudar na faculdade ainda!")
}
}
ensino(pessoa,pessoa2,pessoa3)



