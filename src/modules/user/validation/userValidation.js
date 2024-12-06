import Joi from "joi";

export const updateUserSchema = Joi.object({
    firstName:Joi.string(),
      lastName:Joi.string(),
      profile:Joi.string(),
      email:Joi.string(),
      username:Joi.string(),
      password:Joi.string(),
})