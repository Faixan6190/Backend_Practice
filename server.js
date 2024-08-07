import express from "express";
import route from "./routes/index.js";
import mongoose from "./db/index.js";

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connection.on("open", () => {
  console.log("Database Connected");
});

mongoose.connection.on("error", (error) => {
  console.log("Database Error", error);
});

app.use("/api", route);



app.listen(PORT, () => console.log(`Server is Running On http://localhost:${PORT}`));
