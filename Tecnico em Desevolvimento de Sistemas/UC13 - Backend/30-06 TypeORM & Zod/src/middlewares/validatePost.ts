// ============================================
// 📦 IMPORTAÇÃO DOS TIPOS DO EXPRESS
// ============================================

import { Request, Response, NextFunction } from 'express';

// ============================================
// ✅ VALIDATE POST — VALIDA OS DADOS DE CRIAÇÃO DE POST
// ============================================

// Este middleware é executado ANTES do controller.
// Ele verifica se os dados necessários foram enviados no corpo da requisição.
// 
// Se os dados forem inválidos → retorna 400 (Bad Request)
// Se os dados forem válidos → chama next() e passa pro controller
// 
// Exemplo de uso nas rotas:
// routes.post('/posts', validatePost, postController.create);
// 
// O fluxo é: requisição → validatePost → postController.create
export function validatePost(req: Request, res: Response, next: NextFunction) {
    // ============================================
    // 📋 EXTRAI OS CAMPOS DO BODY
    // ============================================
    // req.body contém os dados enviados pelo cliente no corpo da requisição.
    // Exemplo: { "title": "Meu post", "userId": 1 }
    const { title, userId } = req.body;

    // ============================================
    // ❌ VALIDAÇÃO: TÍTULO E USERID SÃO OBRIGATÓRIOS
    // ============================================
    // Se title ou userId estiverem faltando, retorna 400.
    if (!title || !userId) {
        return res.status(400).json({
            message: 'Os campos title e userId são obrigatórios.',
        });
    }

    // ============================================
    // ✅ DADOS VÁLIDOS — PROSSEGUE
    // ============================================
    // Se passou pela validação, chama next() para continuar para o controller.
    next();
}