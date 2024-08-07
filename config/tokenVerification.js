import jwt from "jsonwebtoken";

const tokenVerificaton = (request, response, next) => {
  if (request.headers?.authorization) {
    const token = request.headers.authorization.split(" ")[1];
    console.log("token", token);
    next();
  } else {
    response.status(402).send({ status: 402, message: "Token not provided" });
  }
};

export default tokenVerificaton;
