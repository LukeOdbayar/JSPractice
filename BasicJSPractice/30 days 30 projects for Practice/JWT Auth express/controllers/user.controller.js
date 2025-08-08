import { connectDb } from "../db/connectDB.js";
import { User } from "../modules/auth.module.js";

export const getUsers = (function () {
  return async function () {
    connectDb(process.env.MONGO_URI);

    const users = await User.find();
    if (!users) {
      throw new Error("Do not have any users");
    }

    return users;
  };
})();
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
