import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const announcementSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    author: {
      type: ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "published"
    },
  },
  {
    timestamps: true,
  }
);

const announcement = mongoose.model("announcements", announcementSchema);

export default announcement;