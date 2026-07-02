import { Router } from "express";
import { UserController } from "../controllers/UsuarioController";
import { validateUser } from "../middlewares/validateUser";

const routes = Router()

const userController = new UserController();

routes.get('/user',userController.list.bind(userController))
routes.get('/users/id',userController.getById.bind(userController))
routes.post('/users',validateUser,userController.create.bind(userController))
