function personagemGamer() {
    let tipoheroi = prompt("Informe a classe do Herói: ").toLowerCase()
    let nivel = Number(prompt("Informe o nível do personagem:"))

    if (tipoheroi === "guerreiro") {
        if (nivel >= 50) {
            alert(`Você é um Guerreiro Lendário! Classe: ${tipoheroi}`);
        } else {
            alert(`Continue treinando, Guerreiro iniciante.`);
        }
    } else if (tipoheroi === "mago") {
        if (nivel >= 50) {
            alert(`Você domina a Magia Suprema! Classe: ${tipoheroi}`);
        } else {
            alert(`Continue treinando, Mago iniciante.`);
        }
    } else if (tipoheroi === "arqueiro") {
        if (nivel >= 50) {
            alert(`Você é um Mestre das Flechas! Classe: ${tipoheroi}`);
        } else {
            alert(`Continue treinando, Arqueiro iniciante.`);
        }
    } else {
        alert(`Classe desconhecida. Tente novamente.`);
    }
     if(tipoheroi==="hunter"){
        if(nivel>=25){
            alert(`Voce agora é um ${tipoheroi}`)
        }else{
            alert(`Voce é não mais um ${tipoheroi}`)
        }
     }else if(tipoheroi==="bardo"){
        if(nivel>=150){
            alert(`Voce agora é um ${tipoheroi}`)
        }else{
            alert(`Voce é não mais um ${tipoheroi}`)
        }
     }else if(tipoheroi==="espachim"){
        if(nivel>=15){
            alert(`Voce agora é um ${tipoheroi}`)
        }else{
            alert(`Voce é não mais um ${tipoheroi}`)
        }
     }
}
