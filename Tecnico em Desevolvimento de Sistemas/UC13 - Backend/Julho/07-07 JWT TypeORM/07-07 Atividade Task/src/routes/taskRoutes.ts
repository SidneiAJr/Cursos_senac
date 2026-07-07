import { TaskController } from "../controllers/TaskController";
import { Router } from "express";

const Taskroutes = Router()

const taskController = new TaskController();

Taskroutes.get("/tasks", taskController.listall.bind(taskController))
Taskroutes.get("/tasks/:id", taskController.listId.bind(taskController))
Taskroutes.post("/tasks", taskController.create.bind(taskController))
Taskroutes.delete("/tasks/:id", taskController.delete.bind(taskController))
Taskroutes.patch("/tasks/:id", taskController.update.bind(taskController))
Taskroutes.put("/tasks/:id", taskController.update.bind(taskController))

export default Taskroutes