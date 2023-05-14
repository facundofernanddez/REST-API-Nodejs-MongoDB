import { Router } from "express";
import * as taskController from "../controllers/task.controller.js";

const router = Router();

router.post("/", taskController.createTask);

router.get("/", taskController.findAllTasks);

router.get("/done", taskController.findAllDoneTask);

router.get("/:id", taskController.findOneTask);

router.delete("/:id", taskController.deleteTask);

router.put("/:id", taskController.updateTask);

export default router;
