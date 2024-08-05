import express from "express";
import { createPost } from "../controller/postController.js";

const route = express.Router();

route.post("/createpost", createPost);

export default route;
