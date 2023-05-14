import { Router } from "express";
import * as taskController from "../controllers/task.controller.js";

const router = Router();

router.post("/", taskController.createTask);

router.get("/", taskController.findAllTasks);

router.get("/:id", taskController.findOneTask);

export default router;
