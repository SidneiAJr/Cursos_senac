// config.js
const API_URL = "http://localhost:3000";

// Elementos do DOM
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

// Função de Login - CORRIGIDA
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

        // SALVAR DADOS NO LOCALSTORAGE - PARTE IMPORTANTE!
        if (data.token) {
            localStorage.setItem('token', data.token);
            
            // Salvar dados do usuário
            if (data.user) {
                localStorage.setItem('user', JSON.stringify(data.user));
                // SALVAR SEPARADAMENTE PARA ACESSO FÁCIL
                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('userName', data.user.name);
                localStorage.setItem('userEmail', data.user.email);
            } else {
                // Se o backend não retornar user, tentar decodificar do token
                try {
                    const tokenParts = data.token.split('.');
                    const payload = JSON.parse(atob(tokenParts[1]));
                    localStorage.setItem('userId', payload.id);
                    localStorage.setItem('userName', payload.name || 'Usuário');
                    localStorage.setItem('userEmail', payload.email || email);
                } catch (e) {
                    console.error('Erro ao decodificar token:', e);
                }
            }
            
            alert('Login realizado com sucesso!');
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
        nomeInput.value = '';
        emailInput.value = '';
        senhaInput.value = '';
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
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        window.location.href = '/login.html';
        throw new Error('Sessão expirada, faça login novamente');
    }

    return response;
}

// Função para listar posts (usando a função autenticada)
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

// Função para fazer logout - CORRIGIDA
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    window.location.href = '/login.html';
}

// Verifica se o usuário está autenticado
function isAuthenticated() {
    return !!localStorage.getItem('token');
}

// Função para obter o userId
function getUserId() {
    return localStorage.getItem('userId');
}

// Função para obter o nome do usuário
function getUserName() {
    return localStorage.getItem('userName') || 'Usuário';
}

// Para uso direto no HTML (script tag)
if (typeof window !== 'undefined') {
    window.login = login;
    window.cadastro = cadastro;
    window.logout = logout;
    window.isAuthenticated = isAuthenticated;
    window.getUserId = getUserId;
    window.getUserName = getUserName;
    window.listarPosts = listarPosts;
}