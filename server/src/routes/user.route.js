import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(upload.single("profilePic"), registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(logoutUser);
export { userRouter };
