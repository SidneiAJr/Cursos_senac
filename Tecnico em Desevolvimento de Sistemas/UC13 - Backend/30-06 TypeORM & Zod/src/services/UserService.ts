// ============================================
// 📦 IMPORTAÇÃO DO BCRYPT
// ============================================

// bcrypt é uma biblioteca para hashing de senhas.
// Ela transforma uma senha em um hash seguro que pode ser armazenado no banco.
// Nunca armazene senhas em texto puro!
import bcrypt from 'bcrypt';

// ============================================
// 📦 IMPORTAÇÃO DO REPOSITÓRIO E MODELO
// ============================================

// UserRepository → operações de banco relacionadas a usuários.
// User → modelo/entidade que representa a tabela "Usuario".
import { UserRepository } from '../repositories/UsuarioRepository';  // 👈 CORRIGIDO
import { User } from '../models/Usuario';  // 👈 CORRIGIDO

// ============================================
// 📦 CLASSE DE ERRO PERSONALIZADO
// ============================================

// NotFoundError é um erro que indica que um recurso não foi encontrado.
// Estendemos a classe Error para criar um erro específico.
export class NotFoundError extends Error {}

// ============================================
// 📤 EXPORTAÇÃO DO USERSERVICE
// ============================================

// UserService contém todas as regras de negócio relacionadas a usuários.
export const UserService = {
    // ============================================
    // 📋 LISTAR TODOS OS USUÁRIOS
    // ============================================
    async listAll() {
        return UserRepository.findAll();
    },

    // ============================================
    // 🔍 BUSCAR USUÁRIO POR ID
    // ============================================
    // Busca um usuário pelo ID.
    // 
    // Regra de negócio: Se o usuário não existir, lança NotFoundError.
    // A senha é removida antes de retornar (omitPassword).
    async getById(id: number) {
        const user = await UserRepository.findById(id);

        if (!user) {
            throw new NotFoundError('Usuário não encontrado.');
        }

        return omitPassword(user);
    },

    // ============================================
    // 📝 CRIAR UM NOVO USUÁRIO
    // ============================================
    // Cria um novo usuário com nome, email e senha.
    // 
    // Regras de negócio:
    // 1. A senha precisa ser hasheada antes de salvar
    // 2. O hash usa bcrypt com 10 salt rounds (custo computacional)
    // 3. A senha NUNCA é retornada nas respostas
    async create(data: { nome: string; email: string; password: string }) {
        // ============================================
        // 🔒 HASH DA SENHA
        // ============================================
        // bcrypt.hash(senha, saltRounds) gera um hash seguro.
        // saltRounds = 10 → número de iterações do algoritmo.
        // Quanto maior, mais seguro, mas mais lento.
        // 10 é um bom equilíbrio entre segurança e performance.
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // ============================================
        // 🏗️ CRIAR O USUÁRIO
        // ============================================
        // Cria uma instância do usuário com os dados fornecidos.
        // A senha já está hasheada, pronta para ser salva.
        const user = UserRepository.create({
            nome: data.nome,       // 👈 'name' → 'nome'
            email: data.email,
            password: hashedPassword,
        });

        // ============================================
        // 💾 SALVAR O USUÁRIO
        // ============================================
        // Salva no banco de dados.
        // O TypeORM faz um INSERT e retorna o usuário com o ID gerado.
        const savedUser = await UserRepository.save(user);

        // ============================================
        // 🔒 REMOVER A SENHA ANTES DE RETORNAR
        // ============================================
        // Nunca retorne a senha em respostas da API.
        return omitPassword(savedUser);
    },

    // ============================================
    // ✏️ ATUALIZAR UM USUÁRIO
    // ============================================
    // Atualiza nome, email e/ou senha de um usuário.
    // 
    // Regras de negócio:
    // 1. O usuário precisa existir
    // 2. Se a senha for enviada, ela é hasheada novamente
    // 3. Só atualiza os campos enviados
    async update(
        id: number,
        data: { nome?: string; email?: string; password?: string }
    ) {
        // ============================================
        // 🔍 VERIFICAR SE O USUÁRIO EXISTE
        // ============================================
        const user = await UserRepository.findById(id);

        if (!user) {
            throw new NotFoundError('Usuário não encontrado.');
        }

        // ============================================
        // ✏️ ATUALIZAR CAMPOS (SE FOR ENVIADO)
        // ============================================
        if (data.nome) user.nome = data.nome;   // 👈 'name' → 'nome'
        if (data.email) user.email = data.email;

        // ============================================
        // 🔒 ATUALIZAR SENHA (SE FOR ENVIADO)
        // ============================================
        if (data.password) {
            // Gera um novo hash para a nova senha
            user.password = await bcrypt.hash(data.password, 10);
        }

        // ============================================
        // 💾 SALVAR AS ALTERAÇÕES
        // ============================================
        const updatedUser = await UserRepository.save(user);

        // ============================================
        // 🔒 REMOVER A SENHA ANTES DE RETORNAR
        // ============================================
        return omitPassword(updatedUser);
    },

    // ============================================
    // 🗑️ DELETAR UM USUÁRIO
    // ============================================
    // Remove um usuário pelo ID.
    // 
    // Regras de negócio:
    // 1. Se o usuário não existir, lança NotFoundError
    async delete(id: number) {
        const result = await UserRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundError('Usuário não encontrado.');
        }
    },
};

// ============================================
// 🔒 FUNÇÃO AUXILIAR: REMOVER SENHA
// ============================================

// Esta função recebe um objeto User e retorna o mesmo objeto sem o campo password.
// 
// Como funciona:
// 1. Extrai a propriedade password do objeto
// 2. O operador ...rest pega todas as outras propriedades
// 3. Retorna o objeto rest (sem a senha)
// 
// Exemplo:
// user = { id: 1, nome: "João", email: "joao@email.com", password: "123456" }
// omitPassword(user) → { id: 1, nome: "João", email: "joao@email.com" }
function omitPassword(user: User) {
    const { password, ...rest } = user;
    return rest;
}