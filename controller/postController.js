import UserModal from "../models/userSchema.js";

export const createPost = async (request, response) => {
  try {
    const user = new UserModal(request.body);
    user.save();
    response.status(200).send({ status: 200 });
  } catch (error) {
    console.log(error.code || error.message);
  }
};

export const getPost = (request, response) => {};
