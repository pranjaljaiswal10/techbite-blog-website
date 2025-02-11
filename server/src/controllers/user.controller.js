import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;
    if (
      [username, fullname, email, password].some((field) => field?.trim() === "")
    ) {
      res.status(400).json({ messge: "All field is required" });
    }
    const findUser = await User.findOne({ email });
    if (findUser) {
      res.status(409).json({ message: "User is already exist" });
    }
    const hashPassword =await  bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      fullname,
      email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    const token = savedUser.getJWT();
    const option = {
      secret: true,
      httpOnly: true,
    };
    res
      .status(201)
      .json({ mesage: "Your account is created", data: { user: savedUser } })
      .cookie("token", token, option);
  } catch (err) {
    res.status(401).send({ error: err });
  }
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.Body;
  if ([email, password].some((field) => field.trim() === "")) {
    res.status(400).json({ message: "All field is required" });
  }
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    res.status(401).json({ error: "Invalid credential" });
  }
  const validPassword = await user.validatePassword(password);
  if (!validPassword) {
    res.status(401).json({ error: "Invalid credential" });
  }
  const token = user.getJWT();
  const option = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    secure: true,
    httpOnly: true,
  };
  res
    .status(200)
    .json({ message: "Login sucessfully", data: user })
    .cookie("token", token, option);
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
};

export { registerUser, loginUser, logoutUser };
