import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [String],
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
