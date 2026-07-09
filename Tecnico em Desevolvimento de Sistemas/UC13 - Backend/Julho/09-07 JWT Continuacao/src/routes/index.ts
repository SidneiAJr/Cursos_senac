import { Router } from "express";
import { UserController } from "../controllers/UsuarioController";
import { validateUser } from "../middlewares/validateUser";
import { PostController } from "../controllers/PostController";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/auth-middleware";

const routes = Router()

const userController = new UserController();
const postController = new PostController();
const authController = new AuthController()

// Rotas dos Usuarios
routes.get('/users',authMiddleware,userController.list.bind(userController))
routes.get('/users/:id',authMiddleware,userController.getById.bind(userController))
routes.post('/users',validateUser,userController.create.bind(userController))
routes.delete("/users/:id",authMiddleware,userController.delete.bind(userController))
routes.patch("/users/:id",authMiddleware,userController.Update.bind(userController))
routes.post("/login",authController.login.bind(authController))

// Rotas dos Post
routes.get("/posts", authMiddleware,postController.list.bind(postController));
routes.get("/posts/:id", authMiddleware,postController.getById.bind(postController));
routes.post("/posts", authMiddleware,postController.create.bind(postController));
routes.delete("/posts/:id",authMiddleware,postController.delete.bind(postController))
routes.patch("/posts/:id",authMiddleware,postController.Update.bind(postController))

export default routes