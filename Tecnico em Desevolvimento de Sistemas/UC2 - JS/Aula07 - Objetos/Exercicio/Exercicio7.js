const robo={
    nome: "Kalestanium",
    modelo: "Prime-2000",
    anodefabricacao: 2150,
    anda: function(){
        console.log(`Eu sei voar!`)
    },
    inteligente: function(){
        console.log("Eu sou muito inteligente!")
    }
}
console.log(`Nome do Robo é ${robo.nome} fabricado em ${robo.anodefabricacao} e modelo ${robo.modelo}`);
robo.anda();
robo.inteligente();
