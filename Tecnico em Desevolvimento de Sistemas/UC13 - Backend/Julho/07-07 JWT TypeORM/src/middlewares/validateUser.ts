import { Request, Response, NextFunction } from 'express';

export function validateUser(req: Request, res: Response, next: NextFunction) {
    const { nome, email, password } = req.body;
    if (!nome || !email || !password) {
        return res.status(400).json({
            message: 'Os campos nome, email e password são obrigatórios.',
        });
    }
    if (password.length < 8) {
        return res.status(400).json({
            message: 'A senha deve ter pelo menos 8 caracteres.',
        });
    }
    next();
}