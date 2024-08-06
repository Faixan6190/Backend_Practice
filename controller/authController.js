import bcrypt from "bcrypt";
import UserModal from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const signupUser = async (request, response) => {
  try {
    const password = bcrypt.hashSync(request.body.password, 10);
    const user = await UserModal.create({ ...request.body, password });
    const data = user.toObject();
    delete data.password;
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    response.status(201).send({ status: 201, user: data, token });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};

export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await UserModal.findOne({ email });
    if (user) {
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (checkPassword) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        response.status(200).send({ status: 200, user, message: "Login successfully", token });
      } else {
        response.status(401).send({ status: 401, message: "Incorrect password" });
      }
    } else {
      response.status(404).send({ status: 404, message: "User not found" });
    }
  } catch (error) {
    response.status(500).send({ status: 500, error });
    console.log(error.message || error.code);
  }
};
