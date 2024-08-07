import express from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controller/postController.js";
import { loginUser, signupUser } from "../controller/authController.js";
import tokenVerificaton from "../config/tokenVerification.js";

const route = express.Router();

//auth api's//
route.post("/signupuser", signupUser);
route.post("/loginuser", loginUser);

//post api's//
route.post("/createuser", createUser);
route.get("/getuser", tokenVerificaton, getUser);
route.delete("/deleteuser/:id", deleteUser);
route.put("/updateuser/:id", updateUser);

export default route;
