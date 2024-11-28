import Joi from "joi";

export const forgotPasswordSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "The email must be a valid email address.",
        "any.required": "The email field is required."
    })
});

export const resetPasswordSchema = Joi.object({
    userId: Joi.string().required(),
    OTP: Joi.string().min(6).required(),
    password: Joi.string().min(8).required().messages({
        "string.min": "The password must be at least 8 characters long.",
        "any.required": "The password field is required."
    })
})