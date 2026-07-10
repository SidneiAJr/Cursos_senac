import { Router } from "express";
import { validatePost } from "../middlewares/validatePost";
import { PostController } from "../controllers/PostController";
import { authMiddleware } from "../middlewares/auth-middleware";

const postRouter = Router()

const postController = new PostController();

postRouter.get("/posts", authMiddleware,postController.list.bind(postController));
postRouter.get("/posts/:id", authMiddleware,postController.getById.bind(postController));
postRouter.post("/posts",authMiddleware,validatePost,postController.create.bind(postController));
postRouter.delete("/posts/:id",authMiddleware,postController.delete.bind(postController))
postRouter.patch("/posts/:id",authMiddleware,postController.Update.bind(postController))

export default postRouter