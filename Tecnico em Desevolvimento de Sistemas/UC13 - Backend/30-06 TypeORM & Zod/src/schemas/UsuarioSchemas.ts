import {z} from 'zod';

export const createUserScheme = z.object({
    nome: z.string().min(1,"O nome é Obrigatorio"),
    email: z.string().email("Email Valido"),
    Password: z.string().min(8,"Minimo 8 Caracteres")
})