import { Router } from "express";
import Task from "../models/Task.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("tasks");
});

router.post("/", async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done,
  });
  const taskSaved = await newTask.save();
  res.json(taskSaved);
});

export default router;
