import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: mongoose.Schema.Types.String,
});

const userModal = mongoose.model("user", userSchema);

export default userModal;

// import Joi from "joi";

// const userSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
// });

// export { userSchema };
