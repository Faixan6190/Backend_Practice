import express from "express";
import { products } from "./tempdata/product.js";
import { authMiddleWare } from "./middleware/index.js";

const app = express();
const PORT = 5000;

app.use(express.json());

const users = [];

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

app.post("/createpost", (request, response) => {
  users.push(request.body);
  response.send({ users: request.body, message: "User added successfully" });
});

app.listen(PORT, () => console.log(`Server is Running on http://localhost:${PORT}`));
