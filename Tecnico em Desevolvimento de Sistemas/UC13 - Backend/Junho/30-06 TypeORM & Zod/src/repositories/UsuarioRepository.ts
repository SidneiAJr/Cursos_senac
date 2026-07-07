// ============================================
// 📦 IMPORTAÇÃO DA ENTIDADE USER
// ============================================

// Importa a classe User, que representa a tabela "Usuario" no banco.
// O TypeORM usa essa classe para saber a estrutura da tabela.
import { User } from "../models/Usuario";

// ============================================
// 📦 IMPORTAÇÃO DO DATASOURCE
// ============================================

// AppDataSource é a conexão principal com o banco de dados.
// É através dela que obtemos o repositório de cada entidade.
import { AppDataSource } from "../config/database";

// ============================================
// 🗄️ OBTENDO O REPOSITÓRIO DO USER
// ============================================

// AppDataSource.getRepository(User) cria um repositório para a entidade User.
// O repositório é um objeto que contém métodos para fazer operações no banco:
// - find() → SELECT * FROM usuarios
// - findOne() → SELECT * FROM usuarios WHERE id = ?
// - create() → cria uma instância da entidade
// - save() → INSERT ou UPDATE
// - delete() → DELETE FROM usuarios WHERE id = ?
// 
// O repositório é a "ponte" entre o código TypeScript e o banco de dados.
const repository = AppDataSource.getRepository(User);

// ============================================
// 📤 EXPORTAÇÃO DO REPOSITÓRIO
// ============================================

// Exportamos um objeto com métodos personalizados.
// Isso permite adicionar lógica extra antes de chamar o repositório.
export const UserRepository = {

    // ============================================
    // 📋 FINDALL — LISTAR TODOS OS USUÁRIOS
    // ============================================
    // Busca todos os usuários no banco.
    // relations: ['posts'] → carrega também os posts de cada usuário.
    // Isso faz um JOIN entre as tabelas Usuario e Post.
    // 
    // Equivalente SQL:
    // SELECT * FROM Usuario u LEFT JOIN posts p ON u.id = p.userId
    async findAll() {
        return repository.find({ relations: ['posts'] });
    },

    // ============================================
    // 🔍 FINDBYID — BUSCAR USUÁRIO POR ID
    // ============================================
    // Busca um usuário específico pelo ID.
    // where: { id } → filtra pelo campo id
    // relations: ['posts'] → carrega os posts do usuário junto
    // 
    // Equivalente SQL:
    // SELECT * FROM Usuario u LEFT JOIN posts p ON u.id = p.userId WHERE u.id = ?
    async findById(id: number) {
        return repository.findOne({ where: { id }, relations: ['posts'] });
    },

    // ============================================
    // 🔑 FINDBYEMAILWITHPASSWORD — BUSCAR POR EMAIL (COM SENHA)
    // ============================================
    // Busca um usuário pelo email e inclui a senha no resultado.
    // 
    // Por que isso é necessário?
    // Na entidade User, o campo password tem `select: false`.
    // Isso significa que em queries normais (find, findOne), a senha NÃO é retornada.
    // 
    // Mas no login, precisamos da senha para comparar com a senha digitada.
    // Então usamos createQueryBuilder para "forçar" a inclusão da senha.
    // 
    // .createQueryBuilder('user') → cria uma query personalizada
    // .addSelect('user.password') → adiciona o campo password na seleção
    // .where('user.email = :email', { email }) → filtra pelo email
    // .getOne() → executa a query e retorna um único resultado
    // 
    // Equivalente SQL:
    // SELECT user.id, user.nome, user.email, user.password FROM Usuario user WHERE user.email = ?
    async findByEmailWithPassword(email: string) {
        return repository.createQueryBuilder('user')
            .addSelect('user.password')
            .where('user.email = :email', { email })
            .getOne();
    },

    // ============================================
    // 🏗️ CREATE — CRIAR UMA INSTÂNCIA DA ENTIDADE
    // ============================================
    // Cria uma instância da entidade User com os dados fornecidos.
    // IMPORTANTE: Isso NÃO salva no banco! Apenas cria o objeto.
    // 
    // É como fazer: new User(); user.nome = data.nome; user.email = data.email;
    // 
    // data: Partial<User> → significa que você pode passar apenas alguns campos.
    // O Partial<T> torna todas as propriedades opcionais.
    // 
    // Exemplo: create({ nome: "João", email: "joao@email.com" })
    async create(data: Partial<User>) {
        return repository.create(data);
    },


    async create2(data:User){
       const user = repository.create(data)
       return repository.save(user)
    },

    // ============================================
    // 💾 SAVE — SALVAR (INSERT OU UPDATE)
    // ============================================
    // Salva um usuário no banco.
    // Se o usuário não tem id → faz INSERT
    // Se o usuário tem id → faz UPDATE
    // 
    // Equivalente SQL:
    // INSERT INTO Usuario (nome, email, password) VALUES (?, ?, ?)
    // OU
    // UPDATE Usuario SET nome = ?, email = ?, password = ? WHERE id = ?
    // 
    // Retorna o usuário salvo (com o id gerado, se for INSERT)
    async save(user: User) {
        return repository.save(user);
    },

    // ============================================
    // 🗑️ DELETE — REMOVER USUÁRIO
    // ============================================
    // Remove um usuário pelo ID.
    // 
    // Equivalente SQL:
    // DELETE FROM Usuario WHERE id = ?
    // 
    // Retorna um objeto com a propriedade affected.
    // affected > 0 → deletou algo
    // affected === 0 → não encontrou o usuário
    async delete(id: number) {
        return repository.delete(id);
    },
};
