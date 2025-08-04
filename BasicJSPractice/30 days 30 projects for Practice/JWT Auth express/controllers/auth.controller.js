import { User } from "../modules/auth.module.js";
import bcrypt from "bcrypt";
import { generateVertificationToken } from "../utils/generateVertificationToken.js";
import { connectDb } from "../db/connectDB.js";
// import dotenv from "dotenv";
// dotenv.config();

export const createUserManager = (function () {
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  return async function (userData) {
    const { email, password, name } = userData;
    connectDb(process.env.MONGO_URI);

    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    if (!validateEmail(email)) {
      throw new Error("Invalid email format");
    }
    if (password.lenght < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      throw new Error("User already exists");
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
    return { ...newUser._doc, password: undefined };
  };
})();

export const login = async (request, response) => {
  response.send("Login");
};

export const logout = async (request, response) => {
  response.send("Logout");
};
