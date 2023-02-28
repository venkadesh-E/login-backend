const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const signupSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const SignUp = mongoose.model("SignUp", signupSchema);

module.exports = SignUp;
