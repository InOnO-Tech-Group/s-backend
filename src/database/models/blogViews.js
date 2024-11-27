import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const blogViewsSchema = new mongoose.Schema(
  {
    blog: {
      type: ObjectId,
      ref:"blogs",
      require: true,
    },
  },
  { timestamps: true }
);

const blogViews = mongoose.model("blogViews", blogViewsSchema);

export default blogViews;