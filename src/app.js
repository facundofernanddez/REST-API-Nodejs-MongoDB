import express, { json } from "express";
import cors from "cors";

import TasksRoutes from "./routes/tasks.routes.js";

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/tasks", TasksRoutes);

export default app;
