import Router from "express"
import { addPostsInDB, getOnePostFromDB } from "../controllers/post.controller"

const postRouter=Router()

postRouter.route("/:postId").get(getOnePostFromDB())
postRouter.route("/").post(addPostsInDB())


export {postRouter}