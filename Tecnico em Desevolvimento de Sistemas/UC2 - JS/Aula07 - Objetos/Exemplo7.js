const aluno={
    nome: "Jaguara",
    idade: 20,
    curso: "Engenharia de Software",
    matricula: "2023001"    
}
for(let chaves in aluno){
    console.log(`${chaves}: ${aluno[chaves]}`);
}
