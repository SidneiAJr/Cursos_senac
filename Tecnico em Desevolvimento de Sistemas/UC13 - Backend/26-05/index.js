const btn = document.getElementById("btn");
const saida = document.getElementById("saida");

async function VerificarPrevicao() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&hourly=temperature_2m,precipitation_probability,precipitation,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset&timezone=auto"
    const resposta = await fetch(`${url}`);
    const dados = await resposta.json();
    console.log(dados)
    saida.innerHTML = 
    `Temperatura ${dados.current.temperature_2m}°C<br>
    Velocidade do Vento ${dados.current.wind_speed_10m} Km/h<br>
    Horario ${dados.current.time}<br>
    Precipitação ${dados.current.precipitation}
    Humidade ${dados.current.relative_humidity_2m}
    `
}

btn.addEventListener('click' ,()=>{
    VerificarPrevicao()
})
