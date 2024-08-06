import UserModal from "../models/userSchema.js";

export const createPost = async (request, response) => {
  try {
    const user = await UserModal.create(request.body);
    response.status(201).send({ status: 201, user });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};

export const getPost = (request, response) => {};
