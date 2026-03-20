const filme = {
    nome_filme: "Interestelar",
    data_lançamento: 2014,
    assistido: true,
    preferido_filme: true,
    elenco_filme: [" ", "", ""]
};

console.log(`Nome do Filme é: ${filme.nome_filme}`);  // Usando notação de ponto
console.log(`Data de Lançamento do Filme é: ${filme.data_lançamento}`);
console.log(`Assistido: ${filme.assistido}`);
console.log(`Elenco: ${filme.elenco_filme}`);  // Exibindo elenco de forma legível
filme.elenco_filme[0]= "Xuxa"
console.log(`Elenco atualizado: ${filme.elenco_filme}`);  // Exibindo elenco atualizado
console.log(filme)
