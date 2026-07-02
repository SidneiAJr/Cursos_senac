// ============================================
// 📦 IMPORTAÇÃO DOS TIPOS DO EXPRESS
// ============================================

// Request → representa a requisição HTTP (contém body, params, query, headers, etc.)
// Response → representa a resposta HTTP (contém métodos como json(), status(), send(), etc.)
// NextFunction → função que passa o controle para o próximo middleware
// RequestHandler → tipo que define uma função que manipula requisições: (req, res, next) => void
import { Request, Response, NextFunction, RequestHandler } from 'express';

// ============================================
// 📦 ASYNC HANDLER — CAPTURA ERROS DE FUNÇÕES ASSÍNCRONAS
// ============================================

// O problema: funções assíncronas no Express não capturam erros automaticamente.
// Se você usar `async` e não colocar `try/catch`, o erro vai quebrar o servidor.
// 
// O asyncHandler resolve isso: ele "envolve" sua função e captura qualquer erro.
// Se a função lançar um erro, o asyncHandler passa o erro para o `next()`.
// 
// Isso permite que você escreva controllers SEM `try/catch`!
// 
// Exemplo de uso:
// routes.get('/users', asyncHandler(userController.list));
// 
// Se userController.list lançar um erro, o asyncHandler captura e chama next(error).
// O Express então envia o erro para o errorHandler (middleware de erro).
export function asyncHandler(fn: RequestHandler) {
    // ============================================
    // 🔄 RETORNA UMA FUNÇÃO QUE ENVOLVE A ORIGINAL
    // ============================================
    // O Express espera uma função (req, res, next) => void.
    // Então retornamos uma função que recebe req, res, next.
    return (req: Request, res: Response, next: NextFunction) => {
        // ============================================
        // ⚡ EXECUTA A FUNÇÃO ORIGINAL E CAPTURA ERROS
        // ============================================
        // Promise.resolve(fn(req, res, next)) → executa a função assíncrona
        // .catch(next) → se der erro, chama next(error) automaticamente
        // 
        // Como funciona:
        // 1. fn(req, res, next) é executada
        // 2. Se retornar uma Promise e ela for rejeitada → .catch(next) captura
        // 3. O erro vai direto pro errorHandler (middleware de erro)
        // 4. Você NÃO precisa de try/catch no controller!
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}