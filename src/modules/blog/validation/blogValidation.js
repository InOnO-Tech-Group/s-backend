import Joi from "joi";

export const newBlogSchema = Joi.object({
    title: Joi.string().required(),
    service: Joi.string().required(),
    coverImage: Joi.string().required(),
    description: Joi.string().required(),
})
export const updateBlogSchema = Joi.object({
    title: Joi.string(),
    service: Joi.string(),
    coverImage: Joi.string(),
    description: Joi.string(),
    status: Joi.string()
})