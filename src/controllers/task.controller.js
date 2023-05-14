import Task from "../models/Task.js";

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const findAllDoneTask = async (req, res) => {
  const doneTasks = await Task.find({ done: true });
  res.json(doneTasks);
};

export const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done,
  });
  const taskSaved = await newTask.save();
  res.json(taskSaved);
};

export const findOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  res.json(`${deletedTask.title} ha sido borrada completamente`);
};

export const updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);

  res.json("task updated");
};
