import express from "express";
import TasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.set("port", process.env.PORT || 4000);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/tasks", TasksRoutes);

export default app;
