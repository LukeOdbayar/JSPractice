import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import { User } from "../modules/auth.module.js";

const userRouter = express.Router();

userRouter.get("/user", async (request, response) => {
  console.log("get all user");
  try {
    const users = await getUsers();
    let tempObj = [];

    for (let value of users) {
      const { email, name, lastLoginDate, isVerified } = value._doc;
      const temp = { email, name, lastLoginDate, isVerified };
      tempObj.unshift(temp);
    }

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

export default userRouter;
