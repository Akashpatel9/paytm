import express from "express";
import { updateDetailsHandler, signinHandler, signupHandler, filterHandler } from "../controllers/user.js";
import { auth } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signupHandler);
userRouter.post("/signin", signinHandler);
userRouter.put("/updateDetails", auth, updateDetailsHandler);
userRouter.get('/', auth, filterHandler);

export {userRouter};