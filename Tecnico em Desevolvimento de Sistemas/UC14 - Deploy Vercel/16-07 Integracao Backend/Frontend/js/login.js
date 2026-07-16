// config.js
const API_URL = "http://localhost:3000";

// Elementos do DOM
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

// Função de Login
async function login() {
    try {
        const email = document.getElementById('emailLogin')?.value || emailInput?.value;
        const senha = document.getElementById('senhaLogin')?.value || senhaInput?.value;
        
        if (!email || !senha) {
            alert('Preencha todos os campos!');
            return;
        }

        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: senha
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao fazer login');
        }

        // Salva o token no localStorage
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            alert('Login realizado com sucesso!');
            // Redirecionar para página principal
            window.location.href = './dashboard.html';
        } else {
            throw new Error('Token não recebido');
        }

    } catch (error) {
        console.error('Erro no login:', error);
        alert(error.message || 'Erro ao fazer login');
    }
}

// Função de Cadastro
async function cadastro() {
    try {
        const nome = nomeInput?.value;
        const email = emailInput?.value;
        const senha = senhaInput?.value;

        // Validações
        if (!nome || !email || !senha) {
            alert('Preencha todos os campos!');
            return;
        }

        if (senha.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres!');
            return;
        }

        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                password: senha
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao cadastrar usuário');
        }

        alert('Cadastro realizado com sucesso!');
        // Limpa os campos
        nomeInput.value = '';
        emailInput.value = '';
        senhaInput.value = '';
        
        // Redirecionar para login
        window.location.href = './login.html';

    } catch (error) {
        console.error('Erro no cadastro:', error);
        alert(error.message || 'Erro ao fazer cadastro');
    }
}

// Função para fazer requisições autenticadas
async function authenticatedFetch(url, options = {}) {
    const token = localStorage.getItem('token');
    
    if (!token) {
        throw new Error('Usuário não autenticado');
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers
    };

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers
    });

    if (response.status === 401) {
        // Token expirado ou inválido
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login.html';
        throw new Error('Sessão expirada, faça login novamente');
    }

    return response;
}

// Exemplo de uso: buscar posts (autenticado)
async function listarPosts() {
    try {
        const response = await authenticatedFetch('/posts');
        const posts = await response.json();
        console.log('Posts:', posts);
        return posts;
    } catch (error) {
        console.error('Erro ao listar posts:', error);
        throw error;
    }
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login.html';
}

// Verifica se o usuário está autenticado
function isAuthenticated() {
    return !!localStorage.getItem('token');
}

// Para uso direto no HTML (script tag)
if (typeof window !== 'undefined') {
    window.login = login;
    window.cadastro = cadastro;
    window.logout = logout;
    window.isAuthenticated = isAuthenticated;
}