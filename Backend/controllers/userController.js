// // const User = require("../models/user.js");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// import User from "../models/user.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       password: bcrypt.hashSync(password, 10),
//     });

//     await user.save();

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "30d",
//       }),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const authUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (user && bcrypt.compareSync(password, user.password)) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//           expiresIn: "30d",
//         }),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = registerUser;
// module.exports = authUser;
