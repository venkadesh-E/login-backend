const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const signinSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const SignIn = mongoose.model("SignIn", signinSchema);

module.exports = SignIn;
