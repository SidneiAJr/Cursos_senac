const aluno={
    nome:"Jian o brabo",
    idade: 18,
    escola: "hogwarts",
    estuda:function(){
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos e sou da escola ${this.escola}`);
    }
}
aluno.estuda()
console.log(aluno)
delete aluno.idade
console.log(aluno)
