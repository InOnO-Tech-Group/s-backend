import express from 'express';
import { newMessageSchema } from '../modules/message/validation/messageValidation.js';
import { bodyValidation } from '../middlewares/validationMiddleware.js';
import messageController from '../modules/message/controller/messageController.js';
import { isUserAuthorized } from '../middlewares/authorizationMiddleware.js';

const messageRoute = express.Router();
messageRoute.post("/new",bodyValidation(newMessageSchema),messageController.createNewMessage)

export default messageRoute