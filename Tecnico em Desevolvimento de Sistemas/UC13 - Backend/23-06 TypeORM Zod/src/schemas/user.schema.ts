import {z} from 'zod';

export const createUserScheme = z.object({
    nome_usuario: z.string().min(1,"O nome é Obrigatorio"),
    idade_usuario: z.number().min(1,"Idade Deve ter no minimo 1 caracter"),
    email: z.string().email("Email Valido"),
    info: z.string().min(4, "Deve conter no minimo 4 caracteres ")
})