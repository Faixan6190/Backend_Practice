import jwt from "jsonwebtoken";
import "dotenv/config";

const tokenVerificaton = (request, response, next) => {
  try {
    if (request.headers?.authorization) {
      const token = request.headers.authorization.split(" ")[1];
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        next();
      } else {
        response.status(402).send({ status: 402, message: "Token unauthorized" });
      }
    } else {
      response.status(402).send({ status: 402, message: "Token not provided" });
    }
  } catch (error) {
    response.status(402).send({ status: 402, message: "Token unauthorized" });
  }
};

export default tokenVerificaton;
