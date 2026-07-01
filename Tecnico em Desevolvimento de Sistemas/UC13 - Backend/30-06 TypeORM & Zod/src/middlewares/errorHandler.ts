// ============================================
// 📦 IMPORTAÇÃO DOS TIPOS DO EXPRESS
// ============================================

import { Request, Response, NextFunction } from 'express';

// ============================================
// 📦 IMPORTAÇÃO DO NOTFOUNDERROR
// ============================================

// NotFoundError é um erro personalizado que lançamos quando um recurso não é encontrado.
// Ele é usado em services como UserService e PostService.
// 
// Exemplo: if (!user) throw new NotFoundError('Usuário não encontrado.');
import { NotFoundError } from '../services/UserService';

// ============================================
// 🛡️ ERROR HANDLER — TRATAMENTO CENTRALIZADO DE ERROS
// ============================================

// Este middleware captura TODOS os erros que acontecem na aplicação.
// Ele é o último da cadeia: se algo der erro, ele é chamado.
// 
// Para funcionar, ele deve ser registrado DEPOIS de todas as rotas:
// app.use(errorHandler); // ← no final do server.ts
// 
// O Express reconhece um middleware de erro por ter 4 parâmetros: (err, req, res, next)
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    // ============================================
    // 📝 LOG DO ERRO NO CONSOLE
    // ============================================
    // Mostra o erro no console para debug.
    // Em produção, você usaria um logger (winston, pino, etc.)
    console.error('Erro capturado pelo errorHandler:', err);

    // ============================================
    // 🔍 TRATAMENTO DE ERROS ESPECÍFICOS
    // ============================================

    // ============================================
    // ❌ NOT FOUND ERROR (404)
    // ============================================
    // Verifica se o erro é uma instância de NotFoundError.
    // NotFoundError é lançado quando um recurso não é encontrado.
    // 
    // Exemplo: Usuário não encontrado, Post não encontrado.
    if (err instanceof NotFoundError) {
        return res.status(404).json({ message: err.message });
    }

    // ============================================
    // 🔴 ERRO DE DUPLICIDADE (409)
    // ============================================
    // 'ER_DUP_ENTRY' é o código de erro do MySQL quando você tenta inserir
    // um valor duplicado em uma coluna UNIQUE.
    // 
    // Exemplo: tentar cadastrar um email que já existe no banco.
    if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Registro duplicado (email já existente).' });
    }

    // ============================================
    // 🔥 ERRO GENÉRICO (500)
    // ============================================
    // Se nenhum dos casos acima for atendido, retorna um erro 500.
    // Em produção, você NÃO deve mostrar detalhes do erro para o usuário.
    // Mostrar apenas "Erro interno no servidor" por segurança.
    return res.status(500).json({ message: 'Erro interno no servidor.' });
}