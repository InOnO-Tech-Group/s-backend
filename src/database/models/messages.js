import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isRead: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const message = mongoose.model("messages", messageSchema);

export default message;
