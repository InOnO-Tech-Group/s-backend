import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const gallery = mongoose.model("gallery", gallerySchema);

export default gallery;
