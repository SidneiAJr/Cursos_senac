//Com Incremento
for (let contagem = 0; contagem < 10; contagem++) {
    if (contagem % 2 === 0) {
        console.log("Tic");
    } else {
        console.log("Tac");
    }
}
console.log("ATOMIC BOMBBBBBBBBBBBB")
// Sem incremento
for (let contagem = 10; contagem > 0; contagem--) {
    if (contagem % 2 === 0) {
        console.log("Tic");
    } else {
        console.log("Tac");
    }
}
console.log("ATOMIC BOMBBBBBBBBBBBB");
// Com incremento professor
for (let contagem = 10; contagem >= 0; contagem--) {
    if (contagem === 0) {
        console.log("Booooooom");
    } else if(contagem % 2 === 0) {
        console.log("Tic");
    }else{
       console.log("Tac");
    }
}
//Com Indice 
// Com incremento professor
for (let contagem = 10; contagem >= 0; contagem--) {
    if (contagem === 0) {
        console.log("Booooooom");
    } else if(contagem % 2 === 0) {
        console.log(`Contagem: ${contagem} Tic`);
    }else{
       console.log(`Contagem: ${contagem} Tac`);
    }
}
