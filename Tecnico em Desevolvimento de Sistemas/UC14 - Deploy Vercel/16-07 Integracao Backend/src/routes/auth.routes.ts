import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const authUser = Router()
const authController = new AuthController()

authUser.post("/login",authController.login.bind(authController))

export default authUser