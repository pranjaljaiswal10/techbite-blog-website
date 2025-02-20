import Router from "express"
import { addPostsInDB, deletePostFromDB, getAllPostFromDB, getOnePostFromDB, updatePostInDB } from "../controllers/post.controller.js"
import { upload } from "../middleware/multer.middleware.js"
import verifyJWT from "../middleware/auth.middleware.js"

const postRouter=Router()

postRouter.route("/").post(upload.single("thumbnail"),verifyJWT, addPostsInDB).get(getAllPostFromDB)
postRouter.route("/:id").get(verifyJWT,getOnePostFromDB).put(verifyJWT,updatePostInDB).delete(verifyJWT,deletePostFromDB)
//http://localhost:3000/api/blogs

export {postRouter}