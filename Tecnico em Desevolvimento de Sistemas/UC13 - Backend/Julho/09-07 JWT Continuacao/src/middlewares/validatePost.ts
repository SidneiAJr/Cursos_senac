import { Request, Response, NextFunction } from 'express';
import{ createPostScheme} from "../schemas/PostSchemas"

export function validatePost(req: Request, res: Response, next: NextFunction) {
   const result =  createPostScheme.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.flatten().fieldErrors
        });
    }

    req.body = result.data;
    next();
}