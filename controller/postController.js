import UserModal from "../models/userSchema.js";

export const createPost = async (request, response) => {
  try {
    const user = await UserModal.create(request.body);
    const data = user.toObject();
    delete data.password;
    response.status(201).send({ status: 201, user: data });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};

export const getPost = async (request, response) => {
  try {
    const users = await UserModal.find();
    response.status(200).send({ status: 200, users });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};
