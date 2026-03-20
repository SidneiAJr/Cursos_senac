const escola = {
    turmaA: {
        alunos: ["Joao", "Maria", "Pedro"],
        materia: ["Matematica","Geografia","Fisica"],
        nota:[5,5,5],
        idade:[15, 16, 17]
    },
    turmaB: {
        alunos: ["Ana", "Carlos", "Beatriz"],
         materia: ["Matematica","Geografia","Fisica"],
         nota:[5,5,5],
         idade:[15, 16, 17]
    },
    turmaC: {
        alunos: ["Lucas", "Fernanda", "Rafael"],
         materia: ["Matematica","Geografia","Fisica"],
         nota:[5,5,5],
         idade:[15, 16, 17]
    }
}
console.log(escola.turmaA.alunos[0])
console.log(escola.turmaA.alunos[0])
console.log(`Aluno Nome é: ${escola.turmaA.alunos[0]} e a nota é: ${escola.turmaA.nota[0]}idade é: ${escola.turmaA.idade[0]}`)
console.log(`Aluno Nome é: ${escola.turmaA.alunos[1]} e a nota é: ${escola.turmaA.nota[1]}idade é: ${escola.turmaA.idade[1]}`)
console.log(`Aluno Nome é: ${escola.turmaA.alunos[2]} e a nota é: ${escola.turmaA.nota[2]}idade é: ${escola.turmaA.idade[2]}`)
