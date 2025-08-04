import { User } from "../modules/auth.module.js";
import bcrypt from "bcrypt";
import { generateVertificationToken } from "../utils/generateVertificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { connectDb } from "../db/connectDB.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hassedPassword = await bcrypt.hash(password, 10);
    const vertificationToken = generateVertificationToken();
    const newUser = new User({
      email,
      password: hassedPassword,
      name,
      vertificationToken,
      vertificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24 hours
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      newUser: { ...newUser._doc, password: undefined },
    });
    //jwt
    generateTokenAndSetCookie(res, newUser._id);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
connectDb();
export const login = async (request, response) => {
  response.send("Login");
};

export const logout = async (request, response) => {
  response.send("Logout");
};
