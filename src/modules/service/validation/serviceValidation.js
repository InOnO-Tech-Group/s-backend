import Joi from "joi";

export const newServiceSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});
