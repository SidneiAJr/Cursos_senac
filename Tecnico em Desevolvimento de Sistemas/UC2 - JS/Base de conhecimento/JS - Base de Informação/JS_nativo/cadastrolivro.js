function cadastrolivros(){
    let nomelivro = prompt("Insira o Nome do livro : ")
    const idlivro = Number(prompt("Insira O ID do Livro: "))
    const autorlivro = prompt("Insira o Autor do Livro: ")
    let cadastrototal = `Nome do Livro ${nomelivro} com ID ${idlivro} Autor${autorlivro}`
    console.log("Livro Cadastro com sucesso !",cadastrototal)
}
cadastrolivros()
