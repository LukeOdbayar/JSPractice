import { User } from "../modules/auth.module.js";
import bcrypt from "bcrypt";
import { generateVertificationToken } from "../utils/generateVertificationToken.js";
import { connectDb } from "../db/connectDB.js";

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

export const login = (function () {
  return async function (params) {
    const { email, password } = params;
    connectDb(process.env.MONGO_URI);
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      throw new Error("Email or Password wrong");
    }
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
      throw new Error("Email or Password wrong");
    }

    return { ...foundUser._doc, password: undefined };
  };
})();

export const logout = async (request, response) => {
  response.send("Logout");
};

export const deleteUser = (function () {
  return async function (body) {
    const { email } = body;
    connectDb(process.env.MONGO_URI);

    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      throw new Error("This user is not found");
    }

    const temp = await User.deleteOne({ _id: isUserExist._id });
    console.log(temp);

    return { ...isUserExist._doc, password: undefined };
  };
})();
