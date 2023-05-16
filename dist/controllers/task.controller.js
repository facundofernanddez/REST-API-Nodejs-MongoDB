import Task from "../models/Task.js";
import { getPagination } from "../libs/getPagination.js";
export const findAllTasks = async (req, res) => {
  try {
    const {
      size,
      page,
      title
    } = req.query;
    const condition = title ? {
      title: {
        $regex: new RegExp(title),
        $options: "i"
      }
    } : {};
    const {
      limit,
      offset
    } = getPagination(page, size);
    const data = await Task.paginate(condition, {
      offset,
      limit
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message || "algo salio mal"
    });
  }
};
export const findAllDoneTask = async (req, res) => {
  const doneTasks = await Task.find({
    done: true
  });
  res.json(doneTasks);
};
export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      message: "content cannot be empty"
    });
  }
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "algo salio mal"
    });
  }
};
export const findOneTask = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({
      message: "task not found"
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || "algo salio mal"
    });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.json(`${deletedTask.title} ha sido borrada completamente`);
  } catch (error) {
    res.status(500).json({
      message: error.message || "algo salio mal"
    });
  }
};
export const updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json("task updated");
};