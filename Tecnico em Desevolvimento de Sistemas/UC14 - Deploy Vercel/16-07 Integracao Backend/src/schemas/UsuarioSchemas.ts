import { z } from 'zod';

export const createUserScheme = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
    password: z.string().min(8, "Senha precisa ter no mínimo 8 caracteres")
});

export const updateUserScheme = createUserScheme.partial();

export type CreateUserInput = z.infer<typeof createUserScheme>;
export type UpdateUserInput = z.infer<typeof updateUserScheme>;