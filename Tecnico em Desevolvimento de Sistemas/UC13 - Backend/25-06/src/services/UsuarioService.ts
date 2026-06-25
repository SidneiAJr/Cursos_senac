import { UserRepository } from "../repositories/UsuarioRepository";
import { AppError } from "../errors/error-handles";
import { User } from "../models/Usuario";

export class UserService{
    private repo = new UserRepository()

    async getAllUser(){
        try {
            const users = await this.repo.findAll()
            if(users&& users == null)  throw new AppError("Nenhum Usuario Cadastrado",404)
            return users
        } catch (error) {
            throw new AppError('Erro ao buscar usuarios',500)

        }
    }

    async registerUser(nome:string,email:string,senha:string){
         try {
            const UserAlreadyExist = this.repo.findByEmail(email)
            if(!UserAlreadyExist!=null) throw new AppError("Email ja registrado",409) 
            const user = new User(0,nome,email,senha)
             const newUser = await this.repo.create(user)
             if(newUser == null) return new AppError("Erro ao inserir",500)
            return newUser
         } catch (error) {
            throw new AppError("Algo de Errado não deu certo",500)
         }
    }

   async updateUser(id: number, dados: { nome?: string; email?: string; senha?: string }) {
        try {
            // 1️⃣ VERIFICAR SE USUÁRIO EXISTE
            const userExistente = await this.repo.findById(id);
            if (!userExistente) {
                throw new AppError("Usuário não encontrado", 404);
            }

            // 2️⃣ VALIDAR DADOS
            if (dados.nome && dados.nome.length < 3) {
                throw new AppError("Nome deve ter pelo menos 3 caracteres", 400);
            }
            if (dados.email && !dados.email.includes('@')) {
                throw new AppError("Email inválido", 400);
            }
            if (dados.senha && dados.senha.length < 6) {
                throw new AppError("Senha deve ter pelo menos 6 caracteres", 400);
            }

            // 3️⃣ VERIFICAR SE EMAIL JÁ ESTÁ EM USO (SE TIVER MUDANDO)
            if (dados.email && dados.email !== userExistente.getEmail()) {
                const emailExistente = await this.repo.findByEmail(dados.email);
                if (emailExistente) {
                    throw new AppError("Email já cadastrado", 409);
                }
            }

            // 4️⃣ MONTAR USUÁRIO ATUALIZADO
            const nome = dados.nome || userExistente.getNome();
            const email = dados.email || userExistente.getEmail();
            const senha = dados.senha || userExistente.getSenha();

            const userAtualizado = new User(id, nome, email, senha);

            // 5️⃣ SALVAR NO BANCO
            const resultado = await this.repo.update(userAtualizado);
            if (!resultado) {
                throw new AppError("Erro ao atualizar usuário", 500);
            }

            return resultado;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError('Erro ao atualizar usuário', 500);
        }
    }

    // ============================================
    // 🗑️ DELETAR USUÁRIO
    // ============================================
    async deleteUser(id: number) {
        try {
            // 1️⃣ VERIFICAR SE USUÁRIO EXISTE
            const userExistente = await this.repo.findById(id);
            if (!userExistente) {
                throw new AppError("Usuário não encontrado", 404);
            }

            // 2️⃣ DELETAR
            const deleted = await this.repo.delete(id);
            if (!deleted) {
                throw new AppError("Erro ao deletar usuário", 500);
            }

            return { message: "Usuário deletado com sucesso" };
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError('Erro ao deletar usuário', 500);
        }
    }

    // ============================================
    // 🔐 LOGIN (AUTENTICAÇÃO)
    // ============================================
    async login(email: string, senha: string) {
        try {
            // 1️⃣ BUSCAR USUÁRIO
            const user = await this.repo.findByEmail(email);
            if (!user) {
                throw new AppError("Email ou senha inválidos", 401);
            }

            // 2️⃣ VERIFICAR SENHA (COMPARAÇÃO DIRETA)
            if (senha !== user.getSenha()) {
                throw new AppError("Email ou senha inválidos", 401);
            }

            // 3️⃣ RETORNAR USUÁRIO (SEM SENHA)
            return {
                id: user.getId(),
                nome: user.getNome(),
                email: user.getEmail(),
                // SENHA NÃO VEM!
            };
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError('Erro ao fazer login', 500);
        }
    }
}