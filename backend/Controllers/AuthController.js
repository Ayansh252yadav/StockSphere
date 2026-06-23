const User = require("../model/UserModel");
const { createSecretToken } = require("../Util/SecretToken");

module.exports.Signup = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { email, password, username, mobileNumber, createdAt } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      email,
      password,
      username,
      mobileNumber,
      createdAt,
    });

    const token = createSecretToken(user._id);
  console.log("TOKEN:", token);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path:"/",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};