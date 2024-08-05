import express from "express";
import { products } from "./tempdata/product.js";
import { authMiddleWare } from "./middleware/index.js";
import { userSchema } from "./models/userSchema.js";
import route from "./routes/index.js";

const app = express();
const PORT = 5000;

app.use(express.json());

// let users = [];

// app.get("/product", (request, response) => {
//   response.send(products);
// });

// app.get("/products", authMiddleWare, (request, response) => {
//   console.log("request.query", request.query);
//   //   response.send(user);
// });

// app.get("/getuser", (request, response) => {
//   response.send(users);
// });

// app.put("/updateuser/:id", (request, response) => {
//   const { id } = request.params;
//   const index = users.findIndex((obj) => obj.id === id);
//   users.splice(index, 1, { ...request.body, id });
//   response.send({ id, message: "User update successfully" });
// });

// app.delete("/deletepost/:id", (request, response) => {
//   const { id } = request.params;
//   users = users.filter((obj) => obj.id !== id);
//   response.send({ message: "User deleted successfully" });
// });

// app.post("/createpost", async (request, response) => {
//   try {
//     await userSchema.validateAsync(request.body);
//     users.push({ ...request.body, id: Date.now().toString(36) });
//     response.status(201).send({ status: 201, users: request.body, message: "User added successfully" });
//   } catch (error) {
//     response.status(400).send({ error: error.message || "Something went wrong", status: 400 });
//   }
// });

// app.get("/", (request, response) => {
//   response.send(new Date().toString());
// });

app.use("/api", route);

app.listen(PORT, () => console.log(`Server is Running On http://localhost:${PORT}`));
