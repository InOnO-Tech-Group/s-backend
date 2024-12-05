import Joi from "joi";

export const newBlogSchema = Joi.object({
    title: Joi.string().required(),
    service: Joi.string().required(),
    coverImage: Joi.string().required(),
    description: Joi.string().required(),
})