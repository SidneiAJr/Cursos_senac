function transporte(){
    let opcaoTransporte = Number(prompt("Escolha o meio de transporte: 1-Carro\n 2-Onibus\n 3-Bicleta\n 4-Metro\n 5-Metro\n 6-Andara pe\n 7-Sair"))
    switch(opcaoTransporte) {
        case 1:
            alert("Não esqueça de revisar o combustivel");
            break;
        case 2:
            alert ("Fique de olho no ponto e na carteira")
            break
        case 3:
            alert("Use capacete e respeite as regras de transito")
            break
        case 4:
            alert("Evite Horarios de pico para viajar tranquilo")
            break
        case 5:
            alert("Aproveite para esutar muscia e relaxar")
            break
        default:
            break
    }
}
transporte()
