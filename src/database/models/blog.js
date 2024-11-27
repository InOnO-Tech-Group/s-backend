import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    service: {
      type: ObjectId,
      ref: "services",
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: ObjectId,
      ref: "users",
      required: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const blog = mongoose.model("blogs", blogSchema);

export default blog;