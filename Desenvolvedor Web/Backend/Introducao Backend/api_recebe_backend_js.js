/*
===========================================
CONFIGURAÇÃO DA API
===========================================
Aqui fica o endereço do back-end
Tudo que o front pedir vai passar por isso
*/
const api_url = "http://localhost:3000";

/*
===========================================
CRIAR USUÁRIO
===========================================
Função chamada quando você clica em "Adicionar"
Ela pega os dados do formulário e manda pro back
*/
async function adicionarUsuario() {

    // Pega o valor digitado no input de nome
    const nome = document.getElementById('nome').value;

    // Pega o valor digitado no input de email
    const email = document.getElementById('email').value;

    // Pega o valor digitado no input de senha
    const senha = document.getElementById('senha').value;

    try {
        /*
        Envia os dados para o back-end usando fetch
        - POST → criar dados
        - headers → dizendo que é JSON
        - body → os dados convertidos pra JSON
        */
        const response = await fetch(`${api_url}/criar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        });

        // Lê a resposta do servidor como texto
        const data = await response.text();

        // Mostra a mensagem que veio do back
        alert(data);

    } catch (error) {
        // Se der ruim, mostra o erro no console
        console.error('Erro', error);
    }
}

/*
===========================================
LISTAR USUÁRIOS
===========================================
Busca todos os usuários no banco
e mostra na tela
*/
async function obterUsuarios() {
    try {
        // Faz uma requisição GET pro back-end
        const response = await fetch(`${api_url}/ler`);

        // Converte a resposta para JSON
        const data = await response.json();

        // Pega a <ul> ou <ol> onde os usuários vão aparecer
        const listaUsuarios = document.getElementById('usuarios');

        // Limpa a lista antes de preencher novamente
        listaUsuarios.innerHTML = '';

        /*
        Para cada usuário vindo do banco:
        - cria um <li>
        - mostra nome e email
        - cria botão de deletar
        */
        data.forEach(usuario => {
            const li = document.createElement('li');

            li.innerHTML = `
                ${usuario.nome} - ${usuario.email}
                <button onclick="deletarUsuario(${usuario.id})">
                    Deletar
                </button>
            `;

            // Adiciona o <li> na lista
            listaUsuarios.appendChild(li);
        });

    } catch (error) {
        console.error('Erro', error);
    }
}

/*
===========================================
DELETAR USUÁRIO
===========================================
Recebe o ID e manda pro back deletar
*/
async function deletarUsuario(id) {
    try {
        // Envia uma requisição DELETE pro back-end
        const response = await fetch(`${api_url}/deletar/${id}`, {
            method: 'DELETE'
        });

        // Lê a resposta como texto
        const data = await response.text();

        // Mostra a mensagem do servidor
        alert(data);

        // Atualiza a lista depois de deletar
        obterUsuarios();

    } catch (error) {
        console.error('Erro:', error);
    }
}
