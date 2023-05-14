import express, { json } from "express";
import TasksRoutes from "./routes/tasks.routes.js";

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

app.use(json());

//routes
app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/tasks", TasksRoutes);

export default app;
