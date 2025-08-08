import express from "express";
import { login, logout } from "../controllers/auth.controller.js";
import { createUserManager } from "../controllers/auth.controller.js";
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
router.post("/auth/login", async (request, response) => {
  try {
    const loginUser = await login(request.body);
    generateTokenAndSetCookie(response, loginUser.id);
    response.status(200).json({
      success: true,
      message: "Welcome to my auth service",
      user: loginUser,
    });
  } catch (error) {
    console.error("LOGIN", error);
    response.status(400).json({ success: false, message: error.message });
  }
});
router.post("/auth/logout", logout);

export default router;
