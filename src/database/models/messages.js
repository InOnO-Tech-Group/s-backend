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
    isReead: {
      type: Boolean,
      required: true
    },
  },
  { timestamps: true }
);

const message = mongoose.model("messages", messageSchema);

export default message;
