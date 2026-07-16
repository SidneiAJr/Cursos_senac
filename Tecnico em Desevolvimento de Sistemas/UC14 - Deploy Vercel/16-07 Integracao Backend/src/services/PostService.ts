import { PostRepository } from "../repositories/PostRepository";
import { UserRepository } from "../repositories/UsuarioRepository";

export class NotFoundError extends Error { }

export const PostService = {
    async ListAll() {
        return PostRepository.findAll();
    },

    async getByID(id: number) {
        const post = await PostRepository.findById(id);
        if (!post) {
            throw new NotFoundError("Post Não encontrado")
        }
        return post;
    },

    async create(data: { title: string, userId: number }) {
        const user = await UserRepository.findById(data.userId);

        if (!data.title || !data.userId) {
            throw new Error("Usuario e obrigatorio & id do usuario e obrigatorio")
        }

        if (!user) {
            throw new NotFoundError("Usuario não encontrado")
        }

        const post = await PostRepository.create({ title: data.title, user } as any)
        return post;
    },

    async delete(id: number) {
        const post = await PostRepository.findById(id);
        if (!post) {
            throw new NotFoundError("Post não encontrado")
        }
        const deletar = await PostRepository.delete(id)
        return deletar
    },

    async update(id: number, data: { title?: string; userId?: number }) {
        const post = await PostRepository.findById(id);

        if (!post) {
            throw new NotFoundError("Post não encontrado");
        }

        if (data.title) {
            post.title = data.title;
        }

        if (data.userId) {
            const user = await UserRepository.findById(data.userId);

            if (!user) {
                throw new NotFoundError("Usuário não encontrado");
            }

            post.user = user;
        }

        await PostRepository.save(post);

        return post;
    },

    async ListMyposts(userId: number){
      return PostRepository.findById(userId)
  }


    
}