import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    isReead: {
      type: Boolean,
      require: true
    },
  },
  { timestamps: true }
);

const message = mongoose.model("users", messageSchema);

export default message;
