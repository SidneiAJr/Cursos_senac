function tipoEvento() {
    let opcaoTransporte = Number(prompt("Escolha o meio de transporte: 1-Aniversario\n 2-Formatura\n 3-Casamento\n 4-Festa Surpresa\n 5-Churrasco\n"))
    switch (opcaoTransporte) {
        case 1:
            alert("Salao de festas ou espaço kids");
            break;
        case 2:
            alert("Buffet com piesa de dança")
            break
        case 3:
            alert("jardim ou igreja charmosa")
            break
        case 4:
            alert("casa de amigos ou rooftop")
            break
        case 5:
            alert("Area externa ou parque")
            break
        default:
            alert(`Não vai ter nada!!!`)
            break
    }
}
tipoEvento()
