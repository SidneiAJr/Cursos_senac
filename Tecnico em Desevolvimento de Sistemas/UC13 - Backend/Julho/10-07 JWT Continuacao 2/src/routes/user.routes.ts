import { Router } from "express";
import { UserController } from "../controllers/UsuarioController";
import { validateUser } from "../middlewares/validateUser";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/auth-middleware";

const userRoutes = Router()

const userController = new UserController();
const authController = new AuthController();

userRoutes.get('/users',authMiddleware,userController.list.bind(userController))
userRoutes.get('/users/:id',authMiddleware,userController.getById.bind(userController))
userRoutes.post('/users',validateUser,userController.create.bind(userController))
userRoutes.delete("/users/:id",authMiddleware,userController.delete.bind(userController))
userRoutes.patch("/users/:id",authMiddleware,userController.Update.bind(userController))
userRoutes.post("/login",authController.login.bind(authController))

export default userRoutes