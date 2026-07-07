// ============================================
// 📦 IMPORTAÇÃO DOS REPOSITÓRIOS
// ============================================

// PostRepository é responsável pelas operações de banco relacionadas a posts.
// UserRepository é responsável pelas operações de banco relacionadas a usuários.
import { PostRepository } from '../repositories/PostRepository';
import { UserRepository } from '../repositories/UsuarioRepository';  // 👈 CORRIGIDO

// ============================================
// 📦 IMPORTAÇÃO DO NOTFOUNDERROR
// ============================================

// NotFoundError é um erro personalizado que indica que um recurso não foi encontrado.
// Usamos ele para lançar erros 404 de forma consistente.
import { NotFoundError } from '../services/UserService';

// ============================================
// 📤 EXPORTAÇÃO DO POSTSERVICE
// ============================================

// PostService é um objeto que contém todas as regras de negócio relacionadas a posts.
// 
// O Service fica entre o Controller e o Repository.
// - Controller → recebe a requisição e chama o Service
// - Service → aplica as regras de negócio e chama o Repository
// - Repository → faz as operações no banco de dados
export const PostService = {
    // ============================================
    // 📋 LISTAR TODOS OS POSTS
    // ============================================
    // Chama o repositório para buscar todos os posts.
    // Não tem regra de negócio específica aqui.
    async listAll() {
        return PostRepository.findAll();
    },

    // ============================================
    // 🔍 BUSCAR POST POR ID
    // ============================================
    // Busca um post pelo ID.
    // 
    // Regra de negócio: Se o post não existir, lança um NotFoundError.
    // O controller vai capturar esse erro e retornar 404.
    async getById(id: number) {
        const post = await PostRepository.findById(id);

        if (!post) {
            throw new NotFoundError('Post não encontrado.');
        }

        return post;
    },

    // ============================================
    // 📝 CRIAR UM NOVO POST
    // ============================================
    // Cria um post associado a um usuário existente.
    // 
    // Regras de negócio:
    // 1. O usuário precisa existir
    // 2. O post precisa ter um título
    // 3. O post precisa ter um usuário dono
    async create(data: { title: string; userId: number }) {
        // ============================================
        // 🔍 VERIFICAR SE O USUÁRIO EXISTE
        // ============================================
        // Busca o usuário pelo ID para associar ao post.
        // Se não existir, lança NotFoundError.
        const user = await UserRepository.findById(data.userId);

        if (!user) {
            throw new NotFoundError('Usuário não encontrado.');
        }

        // ============================================
        // 🏗️ CRIAR O POST
        // ============================================
        // O TypeORM aceita a entidade User diretamente no campo 'user'.
        // Não é necessário passar apenas o ID, você pode passar o objeto inteiro.
        // O TypeORM entende que você está associando o post a esse usuário.
        const post = PostRepository.create({
            title: data.title,
            user: user  // 👈 Passa a entidade User, não o ID
        });

        // ============================================
        // 💾 SALVAR O POST
        // ============================================
        // Salva o post no banco de dados.
        // O TypeORM vai fazer um INSERT e retornar o post com o ID gerado.
        return PostRepository.save(post);
    },

    // ============================================
    // ✏️ ATUALIZAR UM POST
    // ============================================
    // Atualiza o título e/ou o dono de um post.
    // 
    // Regras de negócio:
    // 1. O post precisa existir
    // 2. Se mudar o dono, o novo usuário precisa existir
    // 3. Só atualiza os campos enviados
    async update(id: number, data: { title?: string; userId?: number }) {
        // ============================================
        // 🔍 VERIFICAR SE O POST EXISTE
        // ============================================
        const post = await PostRepository.findById(id);

        if (!post) {
            throw new NotFoundError('Post não encontrado.');
        }

        // ============================================
        // ✏️ ATUALIZAR O TÍTULO (SE FOR ENVIADO)
        // ============================================
        if (data.title) post.title = data.title;

        // ============================================
        // 👤 ATUALIZAR O DONO (SE FOR ENVIADO)
        // ============================================
        if (data.userId) {
            // Verifica se o novo usuário existe
            const user = await UserRepository.findById(data.userId);
            if (!user) {
                throw new NotFoundError('Usuário não encontrado.');
            }
            // Atribui o novo usuário ao post
            post.user = user;
        }

        // ============================================
        // 💾 SALVAR AS ALTERAÇÕES
        // ============================================
        // TypeORM vai fazer um UPDATE no banco.
        return PostRepository.save(post);
    },

    // ============================================
    // 🗑️ DELETAR UM POST
    // ============================================
    // Remove um post pelo ID.
    // 
    // Regras de negócio:
    // 1. Se o post não existir, lança NotFoundError
    // 2. Se o post existir, deleta
    async delete(id: number) {
        // ============================================
        // 🗑️ TENTA DELETAR O POST
        // ============================================
        // O repository.delete() retorna um objeto com a propriedade affected.
        // affected > 0 → deletou algo
        // affected === 0 → não encontrou o post
        const result = await PostRepository.delete(id);

        // ============================================
        // ❌ VERIFICAR SE ALGO FOI DELETADO
        // ============================================
        // Se affected === 0, o post não foi encontrado.
        if (result.affected === 0) {
            throw new NotFoundError('Post não encontrado.');
        }
    },
};