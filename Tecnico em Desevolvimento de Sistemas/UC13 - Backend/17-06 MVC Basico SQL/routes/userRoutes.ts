import { Router } from "express";
import { UsuarioController } from "../controllers/UserController";

const router = Router();
const controller = new UsuarioController();

// Criar usuário
router.post("/usuarios", controller.createUsuario.bind(controller));

router.get("/usuarios/:id", controller.buscarPorId.bind(controller));

// Listar todos
router.get("/usuarios", controller.listarUsuarios.bind(controller));

// Atualizar completo
router.put("/usuarios/:id", controller.updateUsuario.bind(controller));

// Atualizar parcial (só email)
router.patch("/usuarios/:id", controller.updateParcialUsuario.bind(controller));

// Deletar
router.delete("/usuarios/:id", controller.deletarUsuario.bind(controller));

export default router;
