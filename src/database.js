import mongoose from "mongoose";
import config from "./config.js";

(async () => {
  const db = await mongoose.connect(config.mongodbURL);

  console.log("database is connected to:", db.connection.name);
})();
