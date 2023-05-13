import mongoose from "mongoose";

(async () => {
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/tasksapi");

  console.log("database is connected to:", db.connection.name);
})();
