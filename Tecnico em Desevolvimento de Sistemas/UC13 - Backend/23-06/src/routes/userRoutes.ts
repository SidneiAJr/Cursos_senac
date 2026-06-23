import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const router = Router();

router.post("/usuarios", UsuarioController.register);       
router.get("/usuarios", UsuarioController.findAll);         
router.get("/usuarios/:id", UsuarioController.findById);    
router.put("/usuarios/:id", UsuarioController.update);      
router.delete("/usuarios/:id", UsuarioController.delete);   

export default router;