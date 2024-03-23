const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const secret = "miniproject";
//@desc register user
//@route post/register
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   console.log(name, email, password);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("all feilds are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already registered!");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: name,
      email,
      password: hashedPassword,
    });
    console.log(user);
    if (user) {
      console.log("user successfull added to db");
      res.status(200).json(user);
    } else {
      res.status(400);
      throw new Error("user details are not valid");
    }
  }
});

//@desc login user
//@route post/login
//access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json("all feilds are mandatory");
  } else {
    const userDoc = await User.findOne({ email: email });
    const passOk = await bcrypt.compareSync(password, userDoc.password);
    if (passOk && userDoc) {
      jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        else {
          res.cookie("token", token).json({
            id: userDoc._id,
            email,
          });
        }
      });
    } else {
      res.status(400).json("wrong credentials");
    }
  }
});

module.exports = { registerUser, loginUser };
