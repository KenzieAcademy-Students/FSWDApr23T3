import { Router } from "express";
import { handleSignIn, handleSignUp } from "../controllers/auth.controllers";
import {
  validateSignIn,
  validateSignUp,
} from "../middleware/validation.middleware";

const router = Router();

router.post("/signup", validateSignUp, handleSignUp);
router.post("/signin", validateSignIn, handleSignIn);

export default router;
