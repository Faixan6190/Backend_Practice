// // import express from "express";

// // const app = express();
// // const PORT = 5000;

// // app.get("/", (request, response) => {
// //   response.send("Hello World , Hello Faizan");
// // });

// // app.listen(PORT, () =>
// //   console.log(`server running on http://localhost:${PORT}`)
// // );

// // import express from "express";

// // const app = express();
// // const PORT = 5000;

// // app.get("/", (request, response) => {
// //   response.send("Hello Thursday , Hello Friday");
// // });
// // app.get("/contact", (request, response) => {
// //   response.send("Hello Contact");
// // });
// // app.get("/about", (request, response) => {
// //   response.send("Hello About");
// // });
// // app.get("/overview", (request, response) => {
// //   response.send("Hello Overview");
// // });

// // app.listen(PORT, () =>
// //   console.log(`server running on http://localhost:${PORT}`)
// // );

// // import express from "express";
// // import { product } from "./product.js";
// // import { user } from "./user.js";
// // import { temp } from "./temp.js";

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // app.get("/", (request, response) => {
// //   response.send("Hello Index");
// // });

// // app.get("/product", (request, response) => {
// //   response.send(product);
// // });

// // app.use("/user", (request, response) => {
// //   response.send(user);
// // });

// // app.use((request, response, next) => {
// //   console.log("hit every request");
// //   const isAuth = true;
// //   if (!isAuth) {
// //     response.send("UNAUTH USER");
// //   } else {
// //     next();
// //   }
// // });

// // app.use((request, response, next) => {
// //   console.log("Hello I'm Middleware");
// //   // return response.json({
// //   //   message: "Not Sending A Request Some Security Reason",
// //   // });
// //   next();
// // });

// // app.get("/temp", (request, response) => {
// //   response.send(temp);
// // });

// // app.use((req, resp, next) => {
// //   console.log("hit every request");
// //   const isAuth = true;
// //   if (!Auth) {
// //     resp.json({
// //       data: null,
// //       message: "UnAuth User",
// //     });
// //   } else {
// //     next();
// //   }
// // });

// import express from "express";
// import { product } from "./product.js";
// import { user } from "./user.js";
// import { temp } from "./temp.js";

// const app = express();
// const PORT = process.env.PORT || 5000;

// const authMiddleWare = (request, response, next) => {
//   console.log("hit every request");
//   const isAuth = true;
//   if (!isAuth) {
//     response.json({
//       data: null,
//       message: "not valid",
//     });
//   } else {
//     next();
//   }
// };

// // app.use((request, response, next) => {
// //   console.log("hit every request");
// //   const isAuth = true;
// //   if (!isAuth) {
// //     response.send("UNAUTH USER");
// //   } else {
// //     next();
// //   }
// // });

// app.get("/", (request, response) => {
//   response.send("Testing Middleware");
// });

// // app.get("/products", authMiddleWare, (request, response, next) => {
// //   console.log("request.query", request.query);
// //   // const query = request.query;
// // });

// app.get("/products", authMiddleWare, (request, response) => {
//   console.log("request.query", request);
//   // const query = request.query;
//   // if (query?.limit) {
//   //   response.send(product.slice(0, query?.limit));
//   // } else {
//   //   response.send(product);
//   // }
// });

// app.listen(PORT, () => {
//   console.log(`server running on http://localhost:${PORT}`);
// });

// // var arr = [1, 2, 3, 4, 5, 6];

// // arr.forEach((index) => {
// //   console.log(index + " Hello");
// // });

// // let newArr = arr.map((value) => {
// //   return value + 2;
// // });

// // console.log("newArr", newArr);

// // function abcd() {}

// // console.dir(abcd);

// app.put("/updateuser/:id", (request, response) => {
//   console.log("param", request.params);
//   console.log("body", request.body);
//   response.json({
//     message: "USER UPDATED!",
//   });
// });

// app.get("/products/:id", authMiddleware, (req, res) => {
//   res.send(`<h1>Welcome, ${req.params.id}</h1>`);
// });

// app.get("/author/:username/:age", authMiddleware, (req, res) => {
//   res.send(
//     `<h1>Welcome, ${req.params.username} of his age is ${req.params.age}</h1>`
//   );
//   res.send("chal raha hai");
// });

// app.get("/products", authMiddleware, (request, response) => {
//   console.log("request.query", request.query);
//   const query = request.query;
//   if (query?.limit) {
//     response.send(product.slice(0, query?.limit));
//   } else {
//     response.send(product);
//   }
// });

// app.get("/products/:id", (request, response) => {
//   const singleProduct = product.find(
//     (product) => product.id === +request.params.id
//   );
//   console.log("singleProduct", singleProduct);
//   response.send(singleProduct);
// });

// app.use((req, res, next) => {
//   console.log("middleware chala");
//   next();
// });

// const authMiddleware = (request, response, next) => {
//   console.log("hit every request");
//   const isAuth = true;
//   if (!isAuth) {
//     response.json({
//       data: null,
//       message: "UnAUTH USER",
//     });
//   } else {
//     next();
//   }
// };

// import express from "express";
// import mongoose from "mongoose";
// import userModal from "./models/userSchema.js";
// import { products } from "./product.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const uri = "mongodb+srv://admin:admin@cluster0.uxxmpv3.mongodb.net/";
// mongoose
//   .connect(uri)
//   .then((res) => {
//     console.log("mongoDb connected");
//   })
//   .catch((err) => {
//     console.log("mongoDB error", err.message);
//   });

// app.get("/", (req, res) => {
//   res.json({
//     messsage: "Hello World",
//   });
// });

// app.post("/createuser", async (request, response) => {
//   try {
//     console.log("request body", request.body);
//     const userResponse = await userModal.create(request.body);
//     console.log(userResponse);
//     response.json({
//       data: userResponse,
//       status: true,
//       message: "User Created",
//     });
//   } catch (error) {
//     response.json({
//       data: [],
//       status: false,
//       message: error.message,
//     });
//   }
// });

// app.post("/createuser2", async (request, response) => {
//   try {
//     console.log("request body", request.body);
//     const userResponse = await userModal.create(request.body);
//     console.log(userResponse);
//     response.json({
//       data: userResponse,
//       status: true,
//       message: "User Created",
//     });
//   } catch (error) {
//     response.json({
//       data: [],
//       status: false,
//       message: error.message,
//     });
//   }
// });

// app.get("/products/:id", (req, res) => {
//   res.send(`<h1>Welcome, ${req.params.id}</h1>`);
// });

// app.get("/author/:username/:age", (req, res) => {
//   res.send(
//     `<h1>Welcome, ${req.params.username} of his age is ${req.params.age}</h1>`
//   );
// });
// app.post("/products", (req, res) => {
//   const { city, street, number, zipcode } = req.body;

//   if (!city || !street || !number || !zipcode) {
//     res.send("fields are required").status(400);
//   }
//   const newProduct = [...products];
//   newProduct.push({
//     ...products[0],
//     address: {
//       ...products[0].address,
//       city,
//       street,
//       number,
//       zipcode,
//     },
//   });

//   res.send(JSON.stringify(newProduct)).status(200);
// });

// app.delete("/products/:id", (req, res) => {
//   const prods = [...products];
//   const { id } = req.params;

//   res
//     .send(JSON.stringify(prods.filter((prod) => prod.id !== parseInt(id))))
//     .status(200);
// });

// app.listen(PORT, () => {
//   console.log(`server running on http://localhost:${PORT}`);
// });

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [];

app.get("/", (request, respone) => {
  respone.send({
    message: "Server Up is",
  });
});

app.post("/user", (request, response) => {
  users.push(request.body);
  response.send({ user: request.body, message: "User added successfully" });
});

app.listen(PORT, () => console.log(`Server is running up at ${PORT}`));
