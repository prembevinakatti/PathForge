const authModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(404).json({ message: "All Fields are required" });
    }

    const existingUser = await authModel.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ message: "Email Already Exists" });
    }

    const newUser = await authModel.create({
      username,
      email,
      password,
    });

    if (!newUser) {
      return res.status(500).json({ message: "Error Creating the User" });
    }

    const token = await jwt.sign(
      { userId: newUser._id },
      process.env.JWT_TOKEN
    );
    res.cookie("token", token);

    return res.status(201).json({
      message: "User Created Successfully ",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log("Error In Registering In Server : ", error.message);
    return res.status(500).json({ message: "Internal Server Error ", error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "All fields required" });
    }

    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password Do not match" });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_TOKEN);
    res.cookie("token", token);

    return res
      .status(200)
      .json({ message: "User Login Successfully", success: true, user: user });
  } catch (error) {
    console.log("Error In Registering In Server : ", error.message);
    return res.status(500).json({ message: "Internal Server Error ", error });
  }
};
