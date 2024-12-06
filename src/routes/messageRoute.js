import express from 'express';
import { newMessageSchema } from '../modules/message/validation/messageValidation.js';
import { bodyValidation } from '../middlewares/validationMiddleware.js';
import messageController from '../modules/message/controller/messageController.js';
import { isUserAuthorized } from '../middlewares/authorizationMiddleware.js';
import { isMessageExistById, isMessagesExist } from '../middlewares/messageMiddleware.js';

const messageRoute = express.Router();
messageRoute.post("/new",bodyValidation(newMessageSchema),messageController.createNewMessage)
messageRoute.get("/view",isUserAuthorized,isMessagesExist,messageController.viewAllMessages)
messageRoute.get("/view/:messageId",isUserAuthorized,isMessageExistById,messageController.viewSingleMessage)
messageRoute.put("/mark/:messageId",isUserAuthorized,isMessageExistById,messageController.markReadMessage)
messageRoute.delete("/delete/:messageId",isUserAuthorized,isMessageExistById,messageController.deleteMessage)


export default messageRoute