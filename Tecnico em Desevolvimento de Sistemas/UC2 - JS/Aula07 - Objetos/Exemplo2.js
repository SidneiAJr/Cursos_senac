//Objeto Pai
const professor ={
    nome:"Vitor",
    idade: 27,
    email : "vitor@gmail.com"
}
console.log(professor.nome);
//Objeto filho que recebe o objeto filho
const recebinfo={
    nome:professor.nome,
}
console.log(recebinfo);
