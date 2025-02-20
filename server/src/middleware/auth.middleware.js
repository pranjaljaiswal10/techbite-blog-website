import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization")?.replace("Bearer", "");
    if (!token) {
      res.status(401).jsom("Unauthorized access");
    }
    const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    const { _id } = decode;
    const user = await User.findById(_id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid access token" });
  }
};

export default verifyJWT;
