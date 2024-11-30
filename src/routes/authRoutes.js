import express from "express";

import {
    isOTPValid,
    isUserExistsByEmail,
    isUserExistsById
} from "../middlewares/authMiddleware.js";
import {
    checkOTPValiditySchema,
    forgotPasswordSchema,
    resetPasswordSchema
} from "../modules/auth/validation/authValidation.js";
import validation from "../middlewares/validations.js";
import authController from "../modules/auth/controller/authController.js";
import {
  isOTPValid,
  isPassworValid,
  isUserExistByEmail,
} from "../middlewares/authMiddleware.js";
import authController from "../modules/auth/controller/authController.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";
import {
  loginSchema,
  verifyLoginSchema,
} from "../modules/auth/validation/authValidation.js";

const authRoute = express.Router()
authRoute.post("/login",isUserExistByEmail,isPassworValid,authController.sendLoginOTP)
authRoute.post("/verify-login-otp",isOTPValid,authController.userLoginVerify)
authRoute.post("/forgot-password", validation(forgotPasswordSchema), isUserExistsByEmail, authController.forgotPassword);
authRoute.post("/check-otp-validity", validation(checkOTPValiditySchema), isUserExistsById, isOTPValid, authController.otpValidation);
authRoute.put("/reset-password", validation(resetPasswordSchema), isUserExistsById, isOTPValid, authController.resetPassword);

export default authRoute;
