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
