import Router from "express"
import { addPostsInDB, deletePostFromDB, getOnePostFromDB, updatePostInDB } from "../controllers/post.controller.js"
import { upload } from "../middleware/multer.middleware.js"

const postRouter=Router()

postRouter.route("/:id").get(getOnePostFromDB).put(updatePostInDB).delete(deletePostFromDB)
postRouter.route("/").post(upload.single("thumbnail"),addPostsInDB)


export {postRouter}