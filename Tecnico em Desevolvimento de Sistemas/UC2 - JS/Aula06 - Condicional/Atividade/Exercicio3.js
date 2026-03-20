function idadePermitida(){
    let idadeMeliante = Number(prompt("Informe a Idade da Pessoa: "))
    if(idadeMeliante>=16){
        alert(`A idade do meliante é ${idadeMeliante}, Entrada Permitida!`)
    }else{
        alert(`A idade do meliante é ${idadeMeliante} Entrada  Não Permitida!`)
    }
}
idadePermitida()
// Função de idade permitida
