import Joi from "joi";

export const forgotPasswordSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "The email must be a valid email address.",
        "any.required": "The email field is required."
    })
});
