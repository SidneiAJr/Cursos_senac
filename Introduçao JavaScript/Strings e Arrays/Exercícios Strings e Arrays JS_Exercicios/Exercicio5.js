let listaDeTarefas = []
let tarefas = prompt("Por favor digite Tarefas:")
let tarefas2 = prompt("Por favor digite Tarefas:")
let tarefas3 = prompt("Por favor digite Tarefas:")
let excluir = prompt("Por favor Digite o numero da  Tarefa para deletar: ")

let recebetarefa = listaDeTarefas.push(tarefas)
let rectaf = listaDeTarefas.push(tarefas2)
let rectaf2 = listaDeTarefas.push(tarefas3)
let excluir2 = listaDeTarefas.splice(excluir,1)

console.log("Essas são suas Tarefas: ",listaDeTarefas)
console.log("A tarefa selecionada é: " + listaDeTarefas)
console.log("A Nova lista: "+listaDeTarefas)
