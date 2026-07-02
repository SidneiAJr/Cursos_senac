import { z } from 'zod';
export const createPostScheme = z.object({
    title: z.string().min(1, "Título precisa conter mínimo 1 caractere"),
    userId: z.number().int().positive("ID do usuário é obrigatório")
});
export const updatePostScheme = createPostScheme.partial();
export type CreatePostInput = z.infer<typeof createPostScheme>;
export type UpdatePostInput = z.infer<typeof updatePostScheme>;