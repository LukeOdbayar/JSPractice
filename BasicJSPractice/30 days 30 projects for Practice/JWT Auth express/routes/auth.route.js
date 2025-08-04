import express from "express";
import { login, logout } from "../controllers/auth.controller.js";
import { createUserManager } from "../controllers/auth.controller.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

const router = express.Router();

router.post("/signup", async (request, response) => {
  try {
    const newUser = await createUserManager(request.body);
    console.log({ newUser });

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
router.post("/login", login);
router.post("/logout", logout);

export default router;
