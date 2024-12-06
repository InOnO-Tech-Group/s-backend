import express from 'express';
import { isUserAuthorized } from '../middlewares/authorizationMiddleware.js';
import userController from '../modules/user/controller/userController.js';

const userRoute = express.Router();
userRoute.get("/view",isUserAuthorized,userController.viewUserProfile)

export default userRoute