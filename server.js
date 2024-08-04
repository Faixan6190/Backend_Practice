import express from "express";
import { products } from "./tempdata/product.js";
import { authMiddleWare } from "./middleware/index.js";

const app = express();
const PORT = 5000;

app.use(express.json());

let users = [];

// app.get("/", (request, response) => {
//   response.send(new Date().toString());
// });

// app.get("/product", (request, response) => {
//   response.send(products);
// });

// app.get("/products", authMiddleWare, (request, response) => {
//   console.log("request.query", request.query);
//   //   response.send(user);
// });

app.get("/getuser", (request, response) => {
  response.send(users);
});

app.put("/updateuser/:id", (request, response) => {
  const { id } = request.params;
  const index = users.findIndex((obj) => obj.id === id);
  users.splice(index, 1, { ...request.body, id });
  response.send({ id, message: "User update successfully" });
});

app.delete("/deletepost/:id", (request, response) => {
  const { id } = request.params;
  users = users.filter((obj) => obj.id !== id);
  response.send({ message: "User deleted successfully" });
});

app.post("/createpost", (request, response) => {
  users.push({ ...request.body, id: Date.now().toString(36) });
  response.send({ users: request.body, message: "User added successfully" });
});

app.listen(PORT, () => console.log(`Server is Running On http://localhost:${PORT}`));
