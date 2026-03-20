const filme = {
    nome: 'Interestelar',
    direcao: 'Nolan',
    lancamento : 2014,
    elenco : ['Matthew','Anne','Matt'],
    visto : 'Assistido',

    
}
console.log(filme.nome)
console.log(filme.direcao)
console.log(filme["lancamento"])
console.log(filme["elenco"])
console.log(filme["visto"])
filme.personagem = ["Morphi","Kooper"]
console.log(filme.elenco[0],"Interpreta",filme.personagem[0])
console.log(filme.elenco[1],"Interpreta",filme.personagem[1])
filme.elenco[0]="xuxa"
console.log(filme)
