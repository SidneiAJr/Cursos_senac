function pessoa2 (pessoa){
    const infopessoa = pessoa
    console.log("Eu sou", pessoa.nome, "mas pode me chamar de:",pessoa.apelidos[0],pessoa.apelidos[1],pessoa.apelidos[2])
}


const pessoa = {
   nome: "Sid", 
   apelidos: ["Sidão", "Albertão", "Sidoso"],
}
pessoa2(pessoa)

const pessoa4={
    ...pessoa,
    apelidos:["teste3","teste","teste4"],
}
function pessoa3(pessoa4){
}
pessoa3()
