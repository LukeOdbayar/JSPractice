import express from "express";
import { getUsers, deleteUser } from "../controllers/user.controller.js";
import { User } from "../modules/auth.module.js";
import { autheticateToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get("/user", autheticateToken, async (request, response) => {
  console.log("get all user");
  try {
    const users = await getUsers();
    let tempObj = [];

    users.map((user) => {
      const { email, name, lastLoginDate, isVerified } = user._doc;
      const temp = { email, name, lastLoginDate, isVerified };
      tempObj.unshift(temp);
    });

    response.status(200).json({
      success: true,
      message: "hello",
      users: tempObj,
    });
  } catch (error) {
    console.error("USER GET ALL USERS ; ", error);
    response.status(400).json({
      succes: false,
      message: "don't have any users",
    });
  }
});
userRouter.delete(
  "/user/delete/:userId",
  autheticateToken,
  async (request, response) => {
    try {
      const delUser = await deleteUser(request.body);

      response.status(200).json({
        success: true,
        message: "User deleted successfully",
        user: delUser,
      });
    } catch (error) {
      console.error("DELETE", error);
      response.status(400).json({ success: false, message: error.message });
    }
  }
);
export default userRouter;
