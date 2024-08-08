import UserModal from "../src/models/userSchema.js";

export const createUser = async (request, response) => {
  try {
    const user = await UserModal.create(request.body);
    const data = user.toObject();
    delete data.password;
    response.status(201).send({ status: 201, user: data });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};

export const getUser = async (request, response) => {
  try {
    const users = await UserModal.find();
    response.status(200).send({ status: 200, users });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};

export const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    await UserModal.findByIdAndDelete(id);
    response.status(200).send({ status: 200, message: "User deleted" });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};

export const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await UserModal.findByIdAndUpdate(id, request.body);
    response.status(200).send({ status: 200, message: "User updated" });
  } catch (error) {
    response.status(500).send({ status: 500, error });
  }
};
