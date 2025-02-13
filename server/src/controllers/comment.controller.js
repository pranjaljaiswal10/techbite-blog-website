import { Comment } from "../models/comment.model";
import { Post } from "../models/post.model";

const addCommentinPost = async (req, res) => {
  const { content } = req.body;
  const { title } = req.params;
  const { profilePicture, fullname } = req.user;
  const post = await Post.findOne({ title });
  const data = { postId: post._id, authorImage: profilePicture,authorName:fullname,content};
  const newCommemnt = new Comment(data);
  const savedComment=await newCommemnt.save()
};

const getCommentofPost = async (req, res) => {
   const {id}=req.params;
   const comment=await Comment.findOne({id}).populate("authorImage","profileP{icture")

};

const updateCommentinPost = async (req, res) => {


};


const deleteCommentofPost = async (req, res) => {
  const { commentId } = req.params;
  const comment = await Comment.findByIdAndDelete(commentId);
  if (!comment) {
    res.status(404).json();
  }
};

export {
  addCommentinPost,
  updateCommentinPost,
  getCommentofPost,
  deleteCommentofPost,
};
