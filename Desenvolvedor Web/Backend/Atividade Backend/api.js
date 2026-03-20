// URL base da API (backend rodando localmente na porta 3000)
const api_url = "http://localhost:3000";


// ===============================
// FUNÇÃO: INSERIR POKÉMON
// ===============================
async function addpok() {

    // Captura o valor do input com id "nome_pokemon"
    const nome_pokemon = document.getElementById('nome_pokemon').value;

    // Captura o valor do input com id "tipo_pokemon"
    const tipo_pokemon = document.getElementById('tipo_pokemon').value;

    // Captura o valor do input com id "tem_evolucao"
    const tem_evolucao = document.getElementById('tem_evolucao').value;

    const id = document.getElementById('id').value;

    try {
        // Envia uma requisição POST para a rota /Inserir
        const response = await fetch(`${api_url}/Inserir`, {

            // Define o método HTTP como POST
            method: 'POST',

            // Define os headers da requisição
            headers: {
                'Content-Type': 'application/json'
            },

            // Converte os dados JS em JSON e envia no corpo da requisição
            body: JSON.stringify({ 
                id,
                nome_pokemon, 
                tipo_pokemon, 
                tem_evolucao
            })
        });

        // Recebe a resposta do servidor como texto
        const data = await response.text();

        // Mostra a resposta do servidor para o usuário
        alert(data);

    } catch (error) {
        // Exibe erros no console (ex: servidor offline)
        console.error('Erro', error);
    }
}


// ===============================
// FUNÇÃO: LISTAR TODOS OS POKÉMONS
// ===============================
async function obterUsuarios() {
    try {
        // Faz requisição GET para a rota /Listar
        const response = await fetch(`${api_url}/Listar`);

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


// ===============================
// FUNÇÃO: BUSCAR POKÉMON POR ID
// ===============================
async function procurarPorId() {

    // Captura o valor digitado no input de ID
    const id = document.getElementById('id').value;

    // Validação simples: se não tiver ID, avisa o usuário
    if (!id) {
        alert("Por favor, insira um ID válido!");
        return;
    }

    try {
        // Faz requisição GET passando o ID na URL
        const response = await fetch(`${api_url}/Listar/${id}`, {
            method: 'GET'
        });

        // Se a resposta não for OK (ex: 404)
        if (!response.ok) {
            // Captura a mensagem de erro do backend
            const errorMessage = await response.text();

            // Lança o erro com a mensagem recebida
            throw new Error(errorMessage);
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Verifica se veio algum Pokémon
        if (data.length > 0) {

            // Pega o primeiro Pokémon da lista
            const pokemon = data[0];

            // Seleciona o elemento onde será exibido o resultado
            const saida = document.getElementById('saida');

            // Monta o HTML com os dados do Pokémon
            saida.innerHTML = `
                <h3>Pokémon Encontrado:</h3>
                <p><strong>ID:</strong> ${pokemon.id}</p><br>
                <p><strong>Nome:</strong> ${pokemon.nome_pokemon}</p><br>
                <p><strong>Tipo:</strong> ${pokemon.tipo_pokemon}</p><br>
                <p><strong>Tem Evolução?</strong> ${pokemon.tem_evolucao}</p><br>
            `;

        } else {
            // Caso não encontre nenhum Pokémon
            alert('Pokémon não encontrado!');
        }

    } catch (error) {
        // Exibe o erro no console
        console.error('Erro:', error);

        // Mostra a mensagem de erro para o usuário
        alert(error.message);
    }
}


// ===============================
// FUNÇÃO: DELETAR POKÉMON
// ===============================
async function deletarPokemon() {

    // Captura o ID digitado no input
    const id = document.getElementById('id').value;

    try {
        // Envia uma requisição DELETE para a rota /Deletar/:id
        const response = await fetch(`${api_url}/deletar/${id}`, {
            method: 'DELETE'
        });

        // Lê a resposta do servidor como texto
        const data = await response.text();

        // Exibe a mensagem retornada pelo backend
        alert(data);

    } catch (error) {
        // Exibe erros no console
        console.error('Erro:', error);
    }
}

async function atualizar() {
    // Captura os valores dos inputs
    const id = document.getElementById('id').value;
    const nome_pokemon = document.getElementById('nome_pokemon').value;
    const tipo_pokemon = document.getElementById('tipo_pokemon').value;
    const tem_evolucao = document.getElementById('tem_evolucao').value;

    // Cria um objeto com os dados a serem enviados no corpo da requisição
    const dadosAtualizacao = {
        nome_pokemon,
        tipo_pokemon,
        tem_evolucao
    };

    try {
        // Envia uma requisição PUT para a rota /atualizar/:id
        const response = await fetch(`${api_url}/atualizar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Indica que estamos enviando JSON
            },
            body: JSON.stringify(dadosAtualizacao) // Envia os dados no corpo da requisição
        });

        // Lê a resposta do servidor como texto
        const data = await response.text();

        // Exibe a mensagem retornada pelo backend
        alert(data);

    } catch (error) {
        // Exibe erros no console
        console.error('Erro:', error);
    }
}
