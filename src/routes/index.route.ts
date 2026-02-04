import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authController } from "../controllers/auth.controller";
const router = express.Router();

router.get("/", authMiddleware, authController.home);
router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.post("/logout", authMiddleware, authController.logout);

export default router;
