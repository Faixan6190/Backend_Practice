// import express from "express";

// const app = express();
// const PORT = 5000;

// app.get("/", (request, response) => {
//   response.send("Hello World , Hello Faizan");
// });

// app.listen(PORT, () =>
//   console.log(`server running on http://localhost:${PORT}`)
// );

// import express from "express";

// const app = express();
// const PORT = 5000;

// app.get("/", (request, response) => {
//   response.send("Hello Thursday , Hello Friday");
// });
// app.get("/contact", (request, response) => {
//   response.send("Hello Contact");
// });
// app.get("/about", (request, response) => {
//   response.send("Hello About");
// });
// app.get("/overview", (request, response) => {
//   response.send("Hello Overview");
// });

// app.listen(PORT, () =>
//   console.log(`server running on http://localhost:${PORT}`)
// );

// import express from "express";
// import { product } from "./product.js";
// import { user } from "./user.js";
// import { temp } from "./temp.js";

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.get("/", (request, response) => {
//   response.send("Hello Index");
// });

// app.get("/product", (request, response) => {
//   response.send(product);
// });

// app.use("/user", (request, response) => {
//   response.send(user);
// });

// app.use((request, response, next) => {
//   console.log("hit every request");
//   const isAuth = true;
//   if (!isAuth) {
//     response.send("UNAUTH USER");
//   } else {
//     next();
//   }
// });

// app.use((request, response, next) => {
//   console.log("Hello I'm Middleware");
//   // return response.json({
//   //   message: "Not Sending A Request Some Security Reason",
//   // });
//   next();
// });

// app.get("/temp", (request, response) => {
//   response.send(temp);
// });

// app.use((req, resp, next) => {
//   console.log("hit every request");
//   const isAuth = true;
//   if (!Auth) {
//     resp.json({
//       data: null,
//       message: "UnAuth User",
//     });
//   } else {
//     next();
//   }
// });

import express from "express";
import { product } from "./product.js";
import { user } from "./user.js";
import { temp } from "./temp.js";

const app = express();
const PORT = process.env.PORT || 5000;

const authMiddleWare = (request, response, next) => {
  console.log("hit every request");
  const isAuth = true;
  if (!isAuth) {
    response.json({
      data: null,
      message: "not valid",
    });
  } else {
    next();
  }
};

// app.use((request, response, next) => {
//   console.log("hit every request");
//   const isAuth = true;
//   if (!isAuth) {
//     response.send("UNAUTH USER");
//   } else {
//     next();
//   }
// });

app.get("/", (request, response) => {
  response.send("TEsting Middleware");
});

app.get("/products", authMiddleWare, (request, response, next) => {
  console.log("request.query", request.query);
  // const query = request.query;
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

satisfies;
debugger;
