import { Post } from "../models/post.model";

const addPostsInDB = async (req, res) => {
  const { thumbnail, title, content, category } = req.body;
  if (
    [thumbnail, title, content, category].some((field) => field.trim() === "")
  ) {
    res.status(400).json({ message: "All field is required" });
  }
  const data = { thumbnail, title, content, category };
  if (req.body.tag) {
    data.tag = req.body.tag;
  }
  const newPost = await Post.create(data);
  res
    .status(201)
    .json({ message: "new blog post added successfully", data: newPost });
};

const getAllPostFromDB = async (req, res) => {
  const post = await Post.find({});
  if (!post) {
    res.status(404).json({ error: "no post found" });
  }
  res.status(200).json({ data: post });
};

const getOnePostFromDB = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  if (!post) {
    res.status(404).json({ error: " post not found" });
  }
  res.status(200).json({ data: post });
};

const updatePostInDB = async (req, res) => {
  const postId = req.params;
  const { content } = req.body;
  const post = await Post.findByIdAndUpdate(
    postId,
    {
      $set: { content },
    },
    { new: true }
  );
  if (!post) {
    res.status(404).json({ error: "post not found" });
  }
  res.status(200).json({ message: "post updated successfully", data: post });
};

const deletePostFromDB = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findByIdAndDelete(postId);
  if (!post) {
    res.status(404).json({ error: "Post not found" });
  }
  res.status(201).json({ data: post });
};

export {
  addPostsInDB,
  getAllPostFromDB,
  getOnePostFromDB,
  updatePostInDB,
  deletePostFromDB,
};
