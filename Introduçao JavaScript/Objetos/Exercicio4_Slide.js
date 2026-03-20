const pessoa = {
    nome : "Pedro",
    idade : 20,
    generomus : "Rock",
}
function pessoas2(comidas){

}
const pessoa2 = {
    ...pessoa,
   comidas:["X","pizza"],
amigo:{
       nome:'joao',
       idade:20,
   }
}


console.log("O nome da pessoa é",pessoa2.nome,"e suas comidas preferidas são",pessoa2.comidas[0],"e",pessoa2.comidas[1],".","Seu melhor amigo se chama",pessoa2.amigo.nome,"e tem",pessoa2.amigo.idade ,"anos")
