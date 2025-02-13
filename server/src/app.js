import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./db/index.js";
import { userRouter } from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import { postRouter } from "./routes/post.route.js";
import { commentRouter } from "./routes/comment.route.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  crredentials:true
}))
app.use("/api/users", userRouter);
app.use("/api/blogs", postRouter);
app.use("/api/comments", commentRouter);

app.use("*", (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json("something wen't wrong");
});

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED!!", err);
  });
