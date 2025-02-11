import { Router } from "express";


const commentRouter=Router();

commentRouter.route("/:postId").post()


export  {commentRouter};