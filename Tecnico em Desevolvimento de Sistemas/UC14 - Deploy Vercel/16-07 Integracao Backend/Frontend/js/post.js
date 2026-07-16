const API_URL = "http://localhost:3000";

// ========== FUNÇÕES DE AUTENTICAÇÃO ==========

function getToken() {
    return localStorage.getItem('token');
}

function getUserId() {
    return localStorage.getItem('userId');
}

function getUserName() {
    return localStorage.getItem('userName') || 'Usuário';
}

function getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    };
}

function checkAuth() {
    const token = getToken();
    const userId = getUserId();
    
    if (!token || !userId) {
        alert('Você precisa estar logado!');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// ========== FUNÇÕES DE POSTS ==========

// LISTAR todos os posts
async function Listarposts() {
    try {
        if (!checkAuth()) return;
        
        const response = await fetch(`${API_URL}/posts`, {
            method: 'GET',
            headers: getHeaders()
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert('Sessão expirada! Faça login novamente.');
                window.location.href = 'login.html';
                return;
            }
            throw new Error('Erro ao buscar posts');
        }

        const posts = await response.json();
        
        const container = document.getElementById('postsList');
        if (!posts || posts.length === 0) {
            container.innerHTML = '<p>Nenhum post encontrado</p>';
            return;
        }

        const userId = getUserId();
        
        container.innerHTML = posts.map(post => `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content || 'Sem conteúdo'}</p>
                <small>Por: ${post.user?.name || 'Usuário'} | ${new Date(post.createdAt).toLocaleDateString()}</small>
                ${post.user?.id == userId ? `
                    <div class="post-actions">
                        <button class="edit-btn" onclick="editarPost(${post.id})">✏️ Editar</button>
                        <button class="delete-btn" onclick="Apagarposts(${post.id})">🗑️ Apagar</button>
                    </div>
                ` : ''}
            </div>
        `).join('');

    } catch (error) {
        console.error('Erro ao listar posts:', error);
        document.getElementById('postsList').innerHTML = '<p style="color:red;">❌ Erro ao carregar posts</p>';
    }
}

// CRIAR um novo post
async function Criarposts() {
    try {
        if (!checkAuth()) return;
        
        const title = document.getElementById('postTitle').value;
        
        if (!title || !title.trim()) {
            alert('Por favor, digite um título!');
            return;
        }

        const userId = getUserId();
        
        if (!userId) {
            alert('Erro: ID do usuário não encontrado. Faça login novamente.');
            window.location.href = 'login.html';
            return;
        }

        console.log('Enviando requisição:', {
            title: title.trim(),
            userId: parseInt(userId)
        });

        const response = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({
                title: title.trim(),
                userId: parseInt(userId)
            })
        });

        if (!response.ok) {
            let errorMessage = 'Erro ao criar post';
            try {
                const errorData = await response.json();
                console.log('Erro do backend:', errorData);
                errorMessage = errorData.message || errorMessage;
            } catch (e) {
                console.error('Erro ao parsear resposta de erro:', e);
            }
            throw new Error(errorMessage);
        }

        const result = await response.json();
        console.log('Post criado com sucesso:', result);
        
        alert('✅ Post criado com sucesso!');
        document.getElementById('postTitle').value = '';
        document.getElementById('createPostMessage').innerHTML = '<p style="color:green;">✅ Post criado com sucesso!</p>';
        
        Listarposts();
        carregarMeusPosts();

    } catch (error) {
        console.error('Erro ao criar post:', error);
        document.getElementById('createPostMessage').innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
        alert(`❌ Erro ao criar post: ${error.message}`);
    }
}

// ATUALIZAR um post (PATCH)
async function Atualizarposts() {
    try {
        if (!checkAuth()) return;
        
        const postId = prompt('Digite o ID do post que deseja editar:');
        if (!postId) return;

        const novoTitulo = prompt('Digite o novo título do post:');
        if (!novoTitulo || !novoTitulo.trim()) {
            alert('Título não pode ficar vazio!');
            return;
        }

        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify({
                title: novoTitulo.trim()
            })
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert('Sessão expirada! Faça login novamente.');
                window.location.href = 'login.html';
                return;
            }
            if (response.status === 404) {
                alert('Post não encontrado!');
                return;
            }
            throw new Error('Erro ao atualizar post');
        }

        alert('✅ Post atualizado com sucesso!');
        Listarposts();
        carregarMeusPosts();

    } catch (error) {
        console.error('Erro ao atualizar post:', error);
        alert('❌ Erro ao atualizar post');
    }
}

// APAGAR um post
async function Apagarposts(postId) {
    try {
        if (!checkAuth()) return;
        
        if (!postId) {
            const id = prompt('Digite o ID do post que deseja apagar:');
            if (!id) return;
            postId = id;
        }
        
        if (!confirm(`⚠️ Tem certeza que deseja apagar o post ${postId}?`)) return;

        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: 'DELETE',
            headers: getHeaders()
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert('Sessão expirada! Faça login novamente.');
                window.location.href = 'login.html';
                return;
            }
            if (response.status === 404) {
                alert('Post não encontrado!');
                return;
            }
            throw new Error('Erro ao apagar post');
        }

        alert('🗑️ Post apagado com sucesso!');
        Listarposts();
        carregarMeusPosts();

    } catch (error) {
        console.error('Erro ao apagar post:', error);
        alert('❌ Erro ao apagar post');
    }
}

// ========== FUNÇÕES AUXILIARES ==========

function editarPost(postId) {
    const novoTitulo = prompt('Digite o novo título do post:');
    if (novoTitulo && novoTitulo.trim()) {
        atualizarPostEspecifico(postId, novoTitulo.trim());
    }
}

async function atualizarPostEspecifico(postId, novoTitulo) {
    try {
        if (!checkAuth()) return;
        
        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify({
                title: novoTitulo
            })
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert('Sessão expirada! Faça login novamente.');
                window.location.href = 'login.html';
                return;
            }
            throw new Error('Erro ao atualizar post');
        }

        alert('✅ Post atualizado com sucesso!');
        Listarposts();
        carregarMeusPosts();

    } catch (error) {
        console.error('Erro ao atualizar post:', error);
        alert('❌ Erro ao atualizar post');
    }
}

// ========== FUNÇÕES DE PERFIL ==========

async function carregarMeusPosts() {
    try {
        if (!checkAuth()) return;
        
        const response = await fetch(`${API_URL}/myposts`, {
            method: 'GET',
            headers: getHeaders()
        });

        if (!response.ok) {
            if (response.status === 401) {
                window.location.href = 'login.html';
                return;
            }
            throw new Error('Erro ao carregar meus posts');
        }

        const posts = await response.json();
        const container = document.getElementById('myPostsList');
        
        if (!posts || posts.length === 0) {
            container.innerHTML = '<p>Você ainda não tem posts</p>';
            return;
        }

        container.innerHTML = posts.map(post => `
            <div class="post" style="background:#f0f8ff;">
                <h3>${post.title}</h3>
                <p>${post.content || 'Sem conteúdo'}</p>
                <small>Criado em: ${new Date(post.createdAt).toLocaleDateString()}</small>
                <div class="post-actions">
                    <button class="edit-btn" onclick="editarPost(${post.id})">✏️ Editar</button>
                    <button class="delete-btn" onclick="Apagarposts(${post.id})">🗑️ Apagar</button>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Erro ao carregar meus posts:', error);
        document.getElementById('myPostsList').innerHTML = '<p style="color:red;">❌ Erro ao carregar seus posts</p>';
    }
}

function carregarPerfil() {
    const userId = getUserId();
    const userName = getUserName();
    const userEmail = localStorage.getItem('userEmail') || 'Email não disponível';
    
    if (userId) document.getElementById('userId').textContent = userId;
    if (userName) {
        document.getElementById('userNome').textContent = userName;
        document.getElementById('updateNome').value = userName;
    }
    if (userEmail) {
        document.getElementById('userEmail').textContent = userEmail;
        document.getElementById('updateEmail').value = userEmail;
    }
}

async function updateProfile(event) {
    event.preventDefault();
    alert('⚠️ Função de atualização de perfil em desenvolvimento!');
}

// ========== FUNÇÕES DE NAVEGAÇÃO ==========

function showSection(section) {
    // Esconder todas as seções
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    
    // Mostrar a seção selecionada
    const sectionMap = {
        'posts': 'postsSection',
        'createPost': 'createPostSection',
        'myPosts': 'myPostsSection',
        'profile': 'profileSection'
    };
    
    const sectionId = sectionMap[section];
    if (sectionId) {
        document.getElementById(sectionId).style.display = 'block';
        
        // Recarregar dados quando mudar de seção
        if (section === 'posts') {
            Listarposts();
        } else if (section === 'myPosts') {
            carregarMeusPosts();
        } else if (section === 'profile') {
            carregarPerfil();
        }
    }
}

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    }
}

// ========== FUNÇÕES DE FORMULÁRIO ==========

function createPost(event) {
    event.preventDefault();
    Criarposts();
}

// ========== INICIALIZAÇÃO ==========

document.addEventListener('DOMContentLoaded', function() {
    if (!checkAuth()) return;
    
    // Carregar nome do usuário
    const userName = getUserName();
    document.getElementById('userName').textContent = userName;
    
    // Carregar dados
    Listarposts();
    carregarPerfil();
});

// ========== EXPORTAÇÃO PARA USO GLOBAL ==========

// Tornar funções disponíveis globalmente para os botões HTML
window.showSection = showSection;
window.logout = logout;
window.createPost = createPost;
window.editarPost = editarPost;
window.Apagarposts = Apagarposts;
window.updateProfile = updateProfile;
window.Listarposts = Listarposts;
window.carregarMeusPosts = carregarMeusPosts;