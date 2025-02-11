import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

const userRouter=express.Router()

userRouter.post("/register",registerUser)
//http//:localhost:3000/api/users/register
userRouter.post("/login",loginUser)

userRouter.post("/logout",logoutUser)
export {userRouter}

