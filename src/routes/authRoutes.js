import express from "express";

import {
  isOTPValid,
  isUserExistsByEmail,
  isPassworValid,
  isUserExistsById,
} from "../middlewares/authMiddleware.js";
import {
  checkOTPValiditySchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  loginSchema
} from "../modules/auth/validation/authValidation.js";
import authController from "../modules/auth/controller/authController.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";

const authRoute = express.Router()
authRoute.post("/login", bodyValidation(loginSchema), isUserExistsByEmail, isPassworValid, authController.sendLoginOTP)
authRoute.post("/verify-otp", bodyValidation(checkOTPValiditySchema), isOTPValid, authController.userLoginVerify)
authRoute.post("/forgot-password", bodyValidation(forgotPasswordSchema), isUserExistsByEmail, authController.forgotPassword);
authRoute.post("/check-otp-validity", bodyValidation(checkOTPValiditySchema), isUserExistsById, isOTPValid, authController.otpValidation);
authRoute.put("/reset-password", bodyValidation(resetPasswordSchema), isUserExistsById, isOTPValid, authController.resetPassword);

export default authRoute;
