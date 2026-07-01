// ============================================
// 📦 IMPORTAÇÃO DOS TIPOS DO EXPRESS
// ============================================

import { Request, Response, NextFunction } from 'express';

// ============================================
// ✅ VALIDATE USER — VALIDA OS DADOS DE CRIAÇÃO DE USUÁRIO
// ============================================

// Este middleware é executado ANTES do controller de criação de usuário.
// Ele verifica se os dados necessários foram enviados e se estão no formato correto.
// 
// Se os dados forem inválidos → retorna 400 (Bad Request)
// Se os dados forem válidos → chama next() e passa pro controller
// 
// Exemplo de uso nas rotas:
// routes.post('/users', validateUser, userController.create);
// 
// O fluxo é: requisição → validateUser → userController.create
export function validateUser(req: Request, res: Response, next: NextFunction) {
    // ============================================
    // 📋 EXTRAI OS CAMPOS DO BODY
    // ============================================
    // req.body contém os dados enviados pelo cliente.
    // Exemplo: { "name": "João", "email": "joao@email.com", "password": "123456" }
    // 
    // ⚠️ ATENÇÃO: Aqui está usando 'name', mas seu schema usa 'nome'!
    // Isso pode causar erro. Recomendo padronizar para 'nome'.
    const { name, email, password } = req.body;

    // ============================================
    // ❌ VALIDAÇÃO: NAME, EMAIL E PASSWORD SÃO OBRIGATÓRIOS
    // ============================================
    // Se algum campo estiver faltando, retorna 400.
    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'Os campos name, email e password são obrigatórios.',
        });
    }

    // ============================================
    // ❌ VALIDAÇÃO: TAMANHO MÍNIMO DA SENHA
    // ============================================
    // A senha deve ter pelo menos 6 caracteres por segurança.
    // Em projetos reais, você pode exigir mais: 8 caracteres + letras + números + especiais.
    if (password.length < 6) {
        return res.status(400).json({
            message: 'A senha deve ter pelo menos 6 caracteres.',
        });
    }

    // ============================================
    // ✅ DADOS VÁLIDOS — PROSSEGUE
    // ============================================
    // Se passou pela validação, chama next() para continuar para o controller.
    next();
}