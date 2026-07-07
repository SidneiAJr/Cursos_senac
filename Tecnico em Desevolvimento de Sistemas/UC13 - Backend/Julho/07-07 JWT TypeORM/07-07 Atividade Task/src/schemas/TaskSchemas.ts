import { z } from 'zod';

export const createTaskScheme = z.object({
    title: z.string().min(4, "O titulo Precisa ter no minimo 4 Letras"),
    descricao: z.string().min(4, "Descricao Muito Curta"),
    usuarioId: z.number().int().positive("usuarioId precisa ser um número positivo")
});

export const updateTaskScheme = createTaskScheme.partial();

export type CreateTaskInput = z.infer<typeof createTaskScheme>;
export type UpdateTaskInput = z.infer<typeof updateTaskScheme>;