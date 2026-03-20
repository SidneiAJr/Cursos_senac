function adicionarDetalhesPessoa(){
    const pessoa ={
        nome: "Joao",
        idade: 20,
        cidade: "SL",
        profissao: "Programador",
        hobbies: ["programar", "jogar", "ler"],
        comida:["pizza", "Milho", "churrasco"],
        amigos:{
            amigo1:"Dalvana",
            amigo2:"Kalleo",
            amigo3:"Jian de Kripto",
            idade: 20,
            idade2:21,
            idade3:23,
        }
    }
    console.log(`Nome da pessoa ${pessoa.nome} sua comida preferida é ${pessoa.comida[0]},${pessoa.comida[1]},${pessoa.comida[2]} e você gosta de ${pessoa.hobbies[0]} e seus amigos são ${pessoa.amigos.amigo1}, ${pessoa.amigos.amigo2} e ${pessoa.amigos.amigo2}`)
    const pessoa2={
        ...pessoa,
        nome:"Kalleo",
        idade: 21,
        cidade: "SC",
        hobbies:["Jogar Bola", "Programar", "Ler","SuperHeroi"],
    }
    console.log(`Nome da pessoa ${pessoa2.nome} sua comida preferida é ${pessoa.comida[0]} e você gosta de ${pessoa2.hobbies[0]} e seus hobbies são ${pessoa2.hobbies[1]} ,  ${pessoa2.hobbies[2]} e ${pessoa2.hobbies[3]} e seus amigos são ${pessoa2.amigos[0]}, ${pessoa2.amigos[1]} e ${pessoa2.amigos[2]}`)
}
adicionarDetalhesPessoa()
