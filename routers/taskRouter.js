import Router from "express";
import TaskController from "../controllers/taskController.js"

const taskRouter = Router();


taskRouter.post("/", TaskController.addTask)
taskRouter.get("/", TaskController.getTasks)
taskRouter.put("/:id", TaskController.updateTask)
taskRouter.delete("/:id", TaskController.deleteTasks)

export default taskRouter;