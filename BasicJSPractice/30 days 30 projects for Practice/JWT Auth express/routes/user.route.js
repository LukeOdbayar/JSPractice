import express from "express";
import { getUsers } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/user", async (request, response) => {
  console.log("get all user");
  try {
    const users = await getUsers();
    console.log(users);
    response.status(200).json({
      success: true,
      message: "hello",
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
