import Joi from "joi";

export const newAnnouncementSchema = Joi.object({
    content: Joi.string().required(),
    dueDate: Joi.date().required(),
    author:Joi.object().required(),
    status:Joi.string().required()
});
