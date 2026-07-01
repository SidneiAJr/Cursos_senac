// ============================================
// 📦 IMPORTAÇÃO DO ZOD
// ============================================

// Zod é uma biblioteca de validação de dados para TypeScript.
// Ela permite definir schemas que validam a estrutura e os tipos dos dados.
// É muito usada em APIs para garantir que os dados recebidos estão corretos.
// 
// Exemplo: validar o body de uma requisição POST antes de processá-lo.
import { z } from 'zod';

// ============================================
// 📝 SCHEMA DE CRIAÇÃO DE POST
// ============================================

// z.object({ ... }) define um objeto com campos e suas validações.
// Cada campo tem regras que os dados precisam seguir.
export const createPostScheme = z.object({
    // ============================================
    // 📝 CAMPO: title
    // ============================================
    // z.string() → deve ser uma string
    // .min(1, "mensagem") → deve ter pelo menos 1 caractere
    // Se falhar, retorna a mensagem de erro personalizada
    title: z.string().min(1, "Título precisa conter mínimo 1 caractere"),

    // ============================================
    // 👤 CAMPO: userId
    // ============================================
    // z.number() → deve ser um número
    // .int() → deve ser um número inteiro (não pode ser 1.5, 2.3, etc.)
    // .positive() → deve ser maior que 0
    // 
    // Aqui validamos que o userId é um número inteiro positivo.
    // Isso é importante porque o ID do usuário no banco é um número.
    userId: z.number().int().positive("ID do usuário é obrigatório")
});

// ============================================
// 📝 SCHEMA DE ATUALIZAÇÃO DE POST
// ============================================

// .partial() transforma TODOS os campos do schema em opcionais.
// Ou seja, no update você pode enviar só o título, só o userId, ou ambos.
// 
// Exemplo de uso:
// PUT /posts/1 → { "title": "Novo título" } (só título)
// PUT /posts/1 → { "userId": 2 } (só userId)
// PUT /posts/1 → { "title": "Novo título", "userId": 2 } (ambos)
export const updatePostScheme = createPostScheme.partial();

// ============================================
// 📊 TIPOS INFERIDOS PELO ZOD
// ============================================

// z.infer<typeof createPostScheme> pega o schema e extrai o tipo TypeScript dele.
// 
// Isso é equivalente a:
// type CreatePostInput = {
//     title: string;
//     userId: number;
// }
// 
// Vantagem: você mantém a validação e os tipos sincronizados.
// Se mudar o schema, o tipo muda automaticamente.
export type CreatePostInput = z.infer<typeof createPostScheme>;

// Mesma coisa, mas para o schema de atualização.
// type UpdatePostInput = {
//     title?: string;
//     userId?: number;
// }
export type UpdatePostInput = z.infer<typeof updatePostScheme>;