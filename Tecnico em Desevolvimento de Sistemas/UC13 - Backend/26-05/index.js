const btn = document.getElementById("btn");
let saida = document.getElementById("saida");
let saida2 = document.getElementById("saida2");
let saida3 = document.getElementById("saida3");
let saida4 = document.getElementById("saida4");

async function VerificarPrevicao() {
    try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-29.7603&longitude=-51.1471&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&hourly=temperature_2m,precipitation_probability,precipitation,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"
    const resposta = await fetch(`${url}`);
    const dados = await resposta.json();
    console.log(dados)
    saida.innerHTML = 
    `=============================<br>
    Temperatura ${dados.current.temperature_2m}°C<br>
    Velocidade do Vento ${dados.current.wind_speed_10m} Km/h<br>
    Horario ${dados.current.time}<br>
    Precipitação ${dados.current.precipitation}mm<br>
    Humidade ${dados.current.relative_humidity_2m}%<br>
    =============================
    `
    } catch (error) {
        console.log("Erro dados fora da lista")
    }
}

async function letJson() {
    const resposta = await fetch("a.json");
    const dados = await resposta.json();
    saida2.innerHTML = 
    `
    =============================<br>
    Segunda Saida<br>
    Nome: ${dados.Nome}<br>
    Idade: ${dados.Idade}<br>
    Cidade:${dados.cidade}<br>
    =============================
    `
}

async function letJson2() {
    const resposta = await fetch("b.json");
    const dados = await resposta.json();
    saida3.innerHTML = 
    `
    =============================<br>
    Terceira Saida<br>
    Cor: ${dados.outros.cor}<br>
    =============================
    `
}

async function VerificarCEP() {
    const cep = document.getElementById("cep").value;
    try {
    if(!cep){
        alert("Digita o CEP!")
    }
    const url = "https://viacep.com.br/ws";
    const resposta = await fetch(`${url}/${cep}/json/`);
    const dados = await resposta.json();

    const Rua = document.getElementById("Rua").value=dados.logradouro;
    const Cidade = document.getElementById("Cidade").value=dados.localidade;
    const Bairro = document.getElementById("Bairro").value=dados.bairro


    saida4.innerHTML = 
    `
    =============================<br>
    Quarta Saida<br>
    Rua: ${dados.logradouro}<br>
    Bairro: ${dados.bairro}<br>
    Cidade: ${dados.localidade}<br>
    Rua: ${dados.uf}<br>
    =============================
    `
    console.log(dados)
    } catch (error) {
        alert("Cidade Não encontrado!")
        console.error(error)
    }
    console.log(dados)
}



btn.addEventListener('click' ,()=>{
    VerificarPrevicao()
    letJson()
    VerificarCEP()
    letJson2()
})
