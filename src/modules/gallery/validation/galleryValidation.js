import Joi from "joi";

export const newGallerySchema = Joi.object({
    caption: Joi.string().required(),
    imageURL: Joi.string().required(),
});