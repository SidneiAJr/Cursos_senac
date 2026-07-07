// ============================================
// 📦 IMPORTAÇÃO DA ENTIDADE POST
// ============================================

// Importa a classe Post, que representa a tabela "posts" no banco.
// O TypeORM usa essa classe para saber a estrutura da tabela.
import { Post } from "../models/Post";

// ============================================
// 📦 IMPORTAÇÃO DO DATASOURCE
// ============================================

// AppDataSource é a conexão principal com o banco de dados.
import { AppDataSource } from "../config/database";

// ============================================
// 🗄️ OBTENDO O REPOSITÓRIO DO POST
// ============================================

// AppDataSource.getRepository(Post) cria um repositório para a entidade Post.
// O repositório é um objeto com métodos para operações no banco.
const repository = AppDataSource.getRepository(Post);

// ============================================
// 📤 EXPORTAÇÃO DO REPOSITÓRIO
// ============================================

// Exportamos um objeto com métodos personalizados.
export const PostRepository = {

    // ============================================
    // 📋 FINDALL — LISTAR TODOS OS POSTS
    // ============================================
    // Busca todos os posts no banco.
    // relations: ['user'] → carrega também o usuário dono de cada post.
    // Isso faz um JOIN entre as tabelas posts e Usuario.
    // 
    // Equivalente SQL:
    // SELECT * FROM posts p LEFT JOIN Usuario u ON p.userId = u.id
    async findAll() {
        return repository.find({ relations: ['user'] });
    },

    // ============================================
    // 🔍 FINDBYID — BUSCAR POST POR ID
    // ============================================
    // Busca um post específico pelo ID.
    // where: { id } → filtra pelo campo id
    // relations: ['user'] → carrega o usuário dono do post junto
    // 
    // Equivalente SQL:
    // SELECT * FROM posts p LEFT JOIN Usuario u ON p.userId = u.id WHERE p.id = ?
    async findById(id: number) {
        return repository.findOne({
            where: { id },
            relations: ['user']
        });
    },

    // ============================================
    // 🏗️ CREATE — CRIAR UMA INSTÂNCIA DA ENTIDADE
    // ============================================
    // Cria uma instância da entidade Post com os dados fornecidos.
    // IMPORTANTE: Isso NÃO salva no banco! Apenas cria o objeto.
    // 
    // data: Partial<Post> → você pode passar apenas alguns campos.
    // 
    // Exemplo: create({ title: "Meu post", user: usuario })
    // 
    // O campo 'user' é a entidade User (não o ID).
    // O TypeORM entende que você está associando o post a um usuário.
    create(data: Partial<Post>) {
        return repository.create(data);
    },

    // ============================================
    // 💾 SAVE — SALVAR (INSERT OU UPDATE)
    // ============================================
    // Salva um post no banco.
    // Se o post não tem id → faz INSERT
    // Se o post tem id → faz UPDATE
    // 
    // Equivalente SQL:
    // INSERT INTO posts (title, userId) VALUES (?, ?)
    // OU
    // UPDATE posts SET title = ?, userId = ? WHERE id = ?
    // 
    // Retorna o post salvo (com o id gerado, se for INSERT)
    async save(post: Post) {
        return repository.save(post);
    },

    // ============================================
    // 🗑️ DELETE — REMOVER POST
    // ============================================
    // Remove um post pelo ID.
    // 
    // Equivalente SQL:
    // DELETE FROM posts WHERE id = ?
    // 
    // Retorna um objeto com a propriedade affected.
    // affected > 0 → deletou algo
    // affected === 0 → não encontrou o post
    async delete(id: number) {
        return repository.delete(id);
    }
};