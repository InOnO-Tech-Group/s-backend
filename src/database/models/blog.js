import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    service: {
      type: ObjectId,
      ref: "services",
      require: true,
    },
    coverImage: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    author: {
      type: ObjectId,
      ref: "users",
    },
    Password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const blog = mongoose.model("blogs", blogSchema);

export default blog;
