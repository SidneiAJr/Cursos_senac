import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { createUserScheme } from "../schemas/user.schema";
import { validate } from "../middlewares/validate";

const router = Router();

router.post("/usuarios", validate(createUserScheme),UsuarioController.register);       
router.get("/usuarios", UsuarioController.findAll);         
router.get("/usuarios/:id", UsuarioController.findById);    
router.put("/usuarios/:id", UsuarioController.update);      
router.delete("/usuarios/:id", UsuarioController.delete);   

export default router;