import { Router } from 'express';
import { UserController } from '../controllers/UsuarioController';

const router = Router();

router.get('/', UserController.getAll);       // GET /api/users
router.get('/:id', UserController.getById);   // GET /api/users/1
router.post('/', UserController.register);    // POST /api/users
router.put('/:id', UserController.update);    // PUT /api/users/1
router.delete('/:id', UserController.delete); // DELETE /api/users/1
router.post('/login', UserController.login);  // POST /api/users/login

export default router;