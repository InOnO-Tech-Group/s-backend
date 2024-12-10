import express from 'express';
import { isUserAuthorized } from '../middlewares/authorizationMiddleware.js';
import userController from '../modules/user/controller/userController.js';
import { bodyValidation } from '../middlewares/validationMiddleware.js';
import { updateUserSchema } from '../modules/user/validation/userValidation.js';

const userRoute = express.Router();
userRoute.get("/view",isUserAuthorized,userController.viewUserProfile)
userRoute.put("/update",isUserAuthorized,bodyValidation(updateUserSchema),userController.updateUserProfile)

export default userRoute