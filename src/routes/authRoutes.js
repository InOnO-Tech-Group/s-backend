import express from "express"

import { isUserExistsByEmail } from "../middlewares/authMiddleware.js";
import validation from "../middlewares/validations.js";
import { forgotPasswordSchema } from "../modules/auth/validation/authValidation.js";
import authController from "../modules/auth/controller/authController.js";

const authRoute = express.Router()

authRoute.post("/forgot-password", validation(forgotPasswordSchema), isUserExistsByEmail, authController.forgotPassword);

export default authRoute;