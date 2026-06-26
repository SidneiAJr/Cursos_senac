import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const router = Router();
const controller = new UsuarioController();

// Criar usuário
router.post("/", controller.create.bind(controller));

// Listar todos
router.get("/", controller.findAll.bind(controller));

// Buscar por ID
router.get("/:id", controller.findById.bind(controller));

// Atualizar
router.put("/:id", controller.update.bind(controller));

// Deletar
router.delete("/:id", controller.delete.bind(controller));

export default router;