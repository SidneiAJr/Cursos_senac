const server = "http://localhost:3000";

async function login() {
    const email_usuario = document.getElementById('email_usuario').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch(`${server}/loginat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_usuario,
                senha
            })
        });

        const data = await response.text();
        alert(data);

    } catch (error) {
        console.error('Erro', error);
    }
}

async function cadastrar() {
const nome_usuario = document.getElementById('nome_usuario').value;
const senha = document.getElementById('senha').value;
const email_usuario = document.getElementById('email_usuario').value;
const idade_usuario = document.getElementById('idade_usuario').value;  
    try {
        const response = await fetch(`${server}/Registrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome_usuario,
                senha,
                email_usuario,
                idade_usuario
            })
        });
        console.log(nome_usuario, senha, email_usuario, idade_usuario);

        const data = await response.text();
        alert(data);

    } catch (error) {
        // Exibe erros no console (ex: servidor offline)
        console.error('Erro', error);
    }
}

async function ListarUsuarios() {
    try {
        const response = await fetch(`${server}/users`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json(); // 🔥 pode usar direto

        const tabelaUsuarios = document.querySelector('#res tbody');
        tabelaUsuarios.innerHTML = '';

        data.forEach(usuario => {
            const tr = document.createElement('tr');

            const tdNome = document.createElement('td');
            tdNome.innerText = usuario.nome_usuario;

            const tdEmail = document.createElement('td');
            tdEmail.innerText = usuario.email_usuario;

            const tdIdade = document.createElement('td');
            tdIdade.innerText = usuario.idade_usuario;

            tr.appendChild(tdNome);
            tr.appendChild(tdEmail);
            tr.appendChild(tdIdade);

            tabelaUsuarios.appendChild(tr);
        });

    } catch (error) {
        console.error('Erro ao obter dados', error);
    }
}

async function Verificarporid() {
    try {
        // Faz requisição GET para a rota /Listar
        const response = await fetch(`${api_url}/users/:id`);

        // Verifica se a resposta NÃO foi bem-sucedida
        if (!response.ok) {
            // Lança um erro com o status HTTP
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Obtém a resposta como texto (útil para debug)
        const textResponse = await response.text();

        // Mostra a resposta bruta no console
        console.log(textResponse);

        // Converte o texto JSON em objeto JavaScript
        const data = JSON.parse(textResponse);

        // Seleciona o corpo (tbody) da tabela
        const tabelaUsuarios = document.querySelector('#res tbody');

        // Limpa a tabela antes de preencher novamente
        tabelaUsuarios.innerHTML = '';

        // Percorre cada Pokémon retornado pela API
        data.forEach(pokemon => {

            // Cria uma nova linha da tabela
            const tr = document.createElement('tr');

            // Cria a célula do nome
            const tdNome = document.createElement('td');
            tdNome.innerText = pokemon.nome_pokemon;

            // Cria a célula do tipo
            const tdTipo = document.createElement('td');
            tdTipo.innerText = pokemon.tipo_pokemon;

            // Cria a célula informando se tem evolução
            const tdEvolucao = document.createElement('td');
            tdEvolucao.innerText = pokemon.tem_evolucao;

            // Adiciona as células na linha
            tr.appendChild(tdNome);
            tr.appendChild(tdTipo);
            tr.appendChild(tdEvolucao);

            // Adiciona a linha na tabela
            tabelaUsuarios.appendChild(tr);
        });

    } catch (error) {
        // Exibe erro no console
        console.error('Erro ao obter dados', error);
    }

}

async function UpdateID() {
    try {
        // Faz requisição GET para a rota /Listar
        const response = await fetch(`${api_url}/update/:id`);

        // Verifica se a resposta NÃO foi bem-sucedida
        if (!response.ok) {
            // Lança um erro com o status HTTP
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Obtém a resposta como texto (útil para debug)
        const textResponse = await response.text();

        // Mostra a resposta bruta no console
        console.log(textResponse);

        // Converte o texto JSON em objeto JavaScript
        const data = JSON.parse(textResponse);

        // Seleciona o corpo (tbody) da tabela
        const tabelaUsuarios = document.querySelector('#res tbody');

        // Limpa a tabela antes de preencher novamente
        tabelaUsuarios.innerHTML = '';

        // Percorre cada Pokémon retornado pela API
        data.forEach(pokemon => {

            // Cria uma nova linha da tabela
            const tr = document.createElement('tr');

            // Cria a célula do nome
            const tdNome = document.createElement('td');
            tdNome.innerText = pokemon.nome_pokemon;

            // Cria a célula do tipo
            const tdTipo = document.createElement('td');
            tdTipo.innerText = pokemon.tipo_pokemon;

            // Cria a célula informando se tem evolução
            const tdEvolucao = document.createElement('td');
            tdEvolucao.innerText = pokemon.tem_evolucao;

            // Adiciona as células na linha
            tr.appendChild(tdNome);
            tr.appendChild(tdTipo);
            tr.appendChild(tdEvolucao);

            // Adiciona a linha na tabela
            tabelaUsuarios.appendChild(tr);
        });

    } catch (error) {
        // Exibe erro no console
        console.error('Erro ao obter dados', error);
    }
}

async function contador() {
    try {
        const response = await fetch(`${server}/Lista`);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json(); // já converte direto JSON
        console.log(data); // ex: [ { total: 5 } ]

        const contadorDiv = document.getElementById('contador');
        contadorDiv.innerText = `Total de usuários: ${data[0].total}`;

    } catch (error) {
        console.error('Erro ao obter dados', error);
    }
}
