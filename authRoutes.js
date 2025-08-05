import express from "express";
import { signupUser, loginUser, getUserById } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

// ✅ Secure route to get user by ID
router.get("/:id", authMiddleware, getUserById);

export default router;
