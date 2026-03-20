function dancarAluno() {
    let dancaTipo = prompt("Informe o tipo de Dança que deseja:");
    alert(`A dança selecionada é: ${dancaTipo}`);
}

function soma() {
    let n1 = Number(prompt("Informe o 1º número:"));
    let n2 = Number(prompt("Informe o 2º número:"));
    let n3 = Number(prompt("Informe o 3º número:"));
    let n4 = Number(prompt("Informe o 4º número:"));
    let resultado = n1 + n2 + n3 + n4;
    alert(`A soma total é: ${resultado}`);
}

function heroi() {
    let nomeHeroi = prompt("Informe o nome do herói:");
    alert(`Nome do herói: ${nomeHeroi}`);
}

function promo() {
    let valorBlusa = Number(prompt("Insira o Valor do Produto:"));
    let desconto = Number(prompt("Insira o desconto: "));
    let valordesc = desconto/100
    let valorDescontado = valorBlusa - (valorBlusa * valordesc);
    alert(`Valor com desconto: R$ ${valorDescontado.toFixed(2)}`);
}

function codinome() {
    let nomeSecreto = prompt("Diga o codinome secreto:");
    let numeroSorte = Number(prompt("Digite o número da sorte:"));
    alert(`O Codinome é: ${nomeSecreto} ${numeroSorte}`);
}

function moedas() {
    let quantidade = Number(prompt("Quantidade de moedas:"));
    let moedasPequenas = quantidade * 1;
    let moedasGrandes = quantidade * 5;
    let total = moedasPequenas + moedasGrandes;

    alert(
        `Moedas Pequenas: ${moedasPequenas}\nMoedas Grandes: ${moedasGrandes}\nPontuação Total: ${total}`
    );
}
function calcularArea() {
    let base = Number(prompt("Insira a base do retângulo:"));
    let altura = Number(prompt("Insira a altura do retângulo:"));
    let area = base * altura;
    alert(`A área total é: ${area}`);
}
const calcularChocolate = (quantidadeChcolate,custo)=>{
    quantidadeChcolate = Number(prompt("Quantidade de custo em reais"))
    custo = 2.50
    let divideQuantidade = quantidadeChcolate/custo
    alert(`Quantidade será : ${divideQuantidade}`)
    return divideQuantidade
}
