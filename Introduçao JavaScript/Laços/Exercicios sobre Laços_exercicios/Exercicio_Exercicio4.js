let bixo = Number(prompt("Quantos bixos de estimação voce tem?"))
let array = []

if(bixo===0){
console.log("Que pena! Você pode adotar um pet!")
} else{
for(let i =0; i<bixo; i++){
     nome = prompt("Qual o nome do pet: ")
     array.push(nome)
}
}
for (let i = 0; i < array.length; i++){
console.log("O Nome são",array[i])
}
