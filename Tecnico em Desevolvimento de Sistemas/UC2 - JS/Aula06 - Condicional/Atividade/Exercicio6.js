function chapelSeletor(){
    let qualidade = (prompt("Informe o que mais define voce Coragem Amizade Ambição Sabedoria: ")).toLowerCase()
    if(qualidade==="coragem"){
        alert(`Voce foi escolhido para a Grifinoria!`)
    }else if(qualidade==="amizade"){
        alert(`Voce foi escolido para a Lufa Lufa`)
    }else if(qualidade==="ambição"){
        alert(`Voce foi Escolhido para Sonserina`)
    }else if(qualidade==="sabedoria"){
        alert(`Voce foi escolhido para Corvinal`)
    }else{
        alert(`Pode ir embora, ninguem te quer aqui meu!!!!!!`)
    }
}
chapelSeletor()
