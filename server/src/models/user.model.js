import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
      trime:true,
      lowercase:true
    },
    fullname: {
      type: String,
      required: true,
      trim:true,
      min:3,
      max:15
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    bio:{
     type:String,
     
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg",
    },
  },
  { timestamps: true }
);

userSchema.methods.validatePassword = async function (passwordByUser) {
  const user = this;
  const validPassword = await bcrypt.compare(passwordByUser, user.password);
  return validPassword;
};

userSchema.methods.getJWT = function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

export const User = mongoose.model("User", userSchema);
