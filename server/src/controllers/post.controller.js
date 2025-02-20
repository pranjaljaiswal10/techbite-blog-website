import { Post } from "../models/post.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const addPostsInDB = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const author = req.user._id;
    if (!req.file) {
      res.status(400).json({ error: "no file uploaded" });
    }
    if ([title, content, category].some((field) => field.trim() === "")) {
      res.status(400).json({ message: "All field is required" });
    }
    const result = await uploadOnCloudinary(req.file.path);
    const data = {
      thumbnail: result?.secure_url,
      title,
      content,
      category,
      authorId: author,
    };
    if (req.body.tag) {
      data.tags = req.body.tags;
    }
    const newPost = await Post.create(data);
    res
      .status(201)
      .json({ message: "new blog post added successfully", data: newPost });
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

const getAllPostFromDB = async (req, res) => {
  const post = await Post.find({})
    .populate("authorId", "fullname")
    .sort({ createdAt: -1 });
  if (!post) {
    res.status(404).json({ error: "no post found" });
  }
  res.status(200).json({ data: post });
};
 
const getOnePostFromDB = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate("authorId", "fullname");
  if (!post) {
    res.status(404).json({ error: " post not found" });
  }
  res.json({ data: post });
};

const updatePostInDB = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const post = await Post.findByIdAndUpdate(
    id,
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
  const { id } = req.params;
  const post = await Post.findByIdAndDelete();
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
