import { Router } from "express";
import { addCommentinPost } from "../controllers/comment.controller";


const commentRouter=Router();

commentRouter.route("/:id").post(addCommentinPost())


export  {commentRouter};