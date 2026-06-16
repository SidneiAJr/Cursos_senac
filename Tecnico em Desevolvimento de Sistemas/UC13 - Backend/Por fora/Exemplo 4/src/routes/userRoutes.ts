import { Router } from "express";
import { UsuarioController } from "../controllers/UserController";

const router = Router();

// Rotas Públicas
router.post("/register", UsuarioController.register);
router.post("/login", UsuarioController.login);

// Rotas Protegidas (depois você coloca o authMiddleware)
router.get("/", UsuarioController.listar);
router.get("/:id", UsuarioController.buscarPorId);
router.put("/:id", UsuarioController.atualizar);
router.delete("/:id", UsuarioController.deletar);

export default router;