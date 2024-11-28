import express from "express"

import {
    isOTPValid,
    isUserExistsByEmail,
    isUserExistsById
} from "../middlewares/authMiddleware.js";
import {
    forgotPasswordSchema,
    resetPasswordSchema
} from "../modules/auth/validation/authValidation.js";
import validation from "../middlewares/validations.js";
import authController from "../modules/auth/controller/authController.js";

const authRoute = express.Router()

authRoute.post("/forgot-password", validation(forgotPasswordSchema), isUserExistsByEmail, authController.forgotPassword);
authRoute.put("/reset-password", validation(resetPasswordSchema), isUserExistsById, isOTPValid, authController.resetPassword)

export default authRoute;