import { Router } from "express";
import { UserController } from "../controllers/UsuarioController";
import { validateUser } from "../middlewares/validateUser";
import { PostController } from "../controllers/PostController";

const routes = Router()

const userController = new UserController();
const postController = new PostController();

// Rotas dos Usuarios
routes.get('/users',userController.list.bind(userController))
routes.get('/users/:id',userController.getById.bind(userController))
routes.post('/users',validateUser,userController.create.bind(userController))

// Rotas dos Post
routes.get("/posts", postController.list.bind(postController));
routes.get("/posts/:id", postController.getById.bind(postController));
routes.post("/posts", postController.create.bind(postController));




export default routes