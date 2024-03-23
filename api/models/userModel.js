const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add the username"],
    },
    email: {
      type: String,
      require: [true, "please enter the email"],
      unique: [true, "email already taken"],
    },
    password: {
      type: String,
      unique: [true, "please enter the password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
