import { Comment } from "../models/comment.model.js";
import { Post } from "../models/post.model.js";

const addCommentinPost = async (req, res) => {
  const { content } = req.body;
  const { title } = req.params;
  const { profilePicture, fullname } = req.user;
  const post = await Post.findOne({ title });
  const data = {
    postId: post._id,
    authorImage: profilePicture,
    authorName: fullname,
    content,
  };
  const newCommemnt = new Comment(data);
  const savedComment = await newCommemnt.save();
  res.status(200).json({message:"comment added successfully",data:savedComment})
};

const getCommentofPost = async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findOne({ id }).populate(
    "author",
    "profilePictureUrl"
  ).sort({createdAt:-1});
  if (!comment) {
    res.status(404).json({ message: "no comment found" });
  }
  res.status(200).json(comment);
};

const updateCommentinPost = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const comment = await Comment.findByIdAndUpdate(
    id,
    {
      $set: { content },
    },
    { new: true }
  );
  if(!comment){
    res.status(400).json({message:"comment not found"})
  }
  res.status(200).json({message:"comment is updated",data:comment})
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
