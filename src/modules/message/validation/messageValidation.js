import Joi from "joi";

export const newMessageSchema = Joi.object({
    names:Joi.string().required(),
    phone:Joi.string().required(),
    email:Joi.string().email().required(),
    content: Joi.string().required(),
});