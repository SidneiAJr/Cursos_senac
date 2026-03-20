function escolherroupa(){
    let tempAtual = Number(prompt("Informe a Temperatura atual em C°: "));
    if(tempAtual > 30){
        alert(`Vista Roupa Leves. Está Muito quente.`);
    } else if(tempAtual >= 20 && tempAtual <= 30){
        alert(`Use Algo Confortável como camiseta e calça.`);
    } else if(tempAtual >= 10 && tempAtual < 20){
        alert(`Coloque um casaco. Está fresquinho.`);
    } else {
        alert(`Vista um casaco bem quente. Está frio.`);
    }
}
escolherroupa()
// Função para escolher roupa
/*
Pontos de Observação o if aqui não foi passado else if ainda na aula, espaços de comparação no if e acima de 30 graus C°, entre 20 e 30, entre 10 a 19 graus e abaixo de 10
*/
