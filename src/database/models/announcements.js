import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const announcementSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    dueDate: {
      type: String,
      require: true,
    },
    author: {
      type: ObjectId,
      ref: "users",
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const announcement = mongoose.model("announcements", announcementSchema);

export default announcement;
