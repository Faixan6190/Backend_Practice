import express from "express";
import { createPost, getPost } from "../controller/postController.js";

const route = express.Router();

route.post("/createpost", createPost);
route.get("/getpost", getPost);

export default route;
