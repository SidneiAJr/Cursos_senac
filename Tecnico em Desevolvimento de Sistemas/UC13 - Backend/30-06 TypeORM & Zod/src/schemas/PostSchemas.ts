import {z} from 'zod';

export const createPostScheme = z.object({
    title: z.string().min(1,"Titulo Precisa conter minimo 1 Caracter"),
    user: z.string().min(4,"Minimo 4 Caracteres | para O usuario")
})