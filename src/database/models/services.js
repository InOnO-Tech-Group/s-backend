import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
        type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const service = mongoose.model("services", serviceSchema);

export default service;
