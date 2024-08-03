import express from "express";
import { products } from "./tempdata/product.js";
import { authMiddleWare } from "./middleware/index.js";

const app = express();
const PORT = 5000;

app.use(express());

app.get("/", (request, response) => {
  response.send(new Date().toString());
});

app.get("/product", (request, response) => {
  response.send(products);
});

app.get("/products", authMiddleWare, (request, response) => {
  console.log("request.query", request.query);
  //   response.send(user);
});

app.post("/createpost", (request, response) => {
  console.log("request", request.body);
  response.send("Wait kro...");
});

app.listen(PORT, () => console.log(`Server is Running on http://localhost:${PORT}`));
