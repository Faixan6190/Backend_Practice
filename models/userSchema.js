import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
    },
    email: {
      type: mongoose.Schema.Types.String,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
    },
  },
  {
    // by default//
    // timestamps: true,
    // create own//
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const UserModal = mongoose.model("testuser", userSchema);

export default UserModal;

// import Joi from "joi";

// const userSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
// });

// export { userSchema };
