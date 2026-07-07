import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const userroutes = Router()

const userController = new UsuarioController();

userroutes.get('/users', userController.listall.bind(userController))
userroutes.get('/users/:id', userController.listId.bind(userController))
userroutes.post('/users',userController.create.bind(userController))
userroutes.delete("/users/:id", userController.delete.bind(userController))
userroutes.patch("/users/:id", userController.update.bind(userController))
userroutes.put("/users/:id", userController.update.bind(userController))


export default userroutes