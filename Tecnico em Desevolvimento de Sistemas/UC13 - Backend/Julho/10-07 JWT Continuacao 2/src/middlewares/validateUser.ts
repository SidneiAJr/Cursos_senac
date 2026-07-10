import { Request, Response, NextFunction } from 'express';
import {createUserScheme} from "../schemas/UsuarioSchemas"

export function validateUser(req: Request, res: Response, next: NextFunction) {
   
    const result = createUserScheme.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({errors: result.error.flatten().fieldErrors})
    }
    req.body = result.data;
    next();
}