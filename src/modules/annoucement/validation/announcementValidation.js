import Joi from "joi";

export const newAnnouncementSchema = Joi.object({
    content: Joi.string().required(),
    dueDate: Joi.date().required(),
});
export const updateAnnouncementSchema = Joi.object({
    content: Joi.string(),
    dueDate: Joi.date(),
    author:Joi.object(),
    status:Joi.string()
});
