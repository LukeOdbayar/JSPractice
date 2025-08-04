import express from "express";
import { login, logout } from "../controllers/auth.controller.js";
import {
  createUserManager,
  deleteUser,
} from "../controllers/auth.controller.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

const router = express.Router();

router.post("/auth/signup", async (request, response) => {
  try {
    const newUser = await createUserManager(request.body);

    // jwt
    generateTokenAndSetCookie(response, newUser._id);

    response.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("SIGHUP", error);
    response.status(400).json({ success: false, message: error.message });
  }
});
router.post("/auth/login", login);
router.post("/auth/logout", logout);

router.delete("/auth/delete/:userId", async (request, response) => {
  try {
    const delUser = await deleteUser(request.body);
    if (!delUser) {
      throw new Error("This user is not found");
    }

    response.status(200).json({
      success: true,
      message: "User deleted successfully",
      user: delUser,
    });
  } catch (error) {
    console.error("DELETE", error);
    response.status(400).json({ success: false, message: error.message });
  }
});
export default router;
