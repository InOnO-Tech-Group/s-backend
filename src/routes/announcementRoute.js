import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";
import { newAnnouncementSchema } from "../modules/annoucement/validation/announcementValidation.js";
import announcementController from "../modules/annoucement/controller/announcementController.js";
const announcementRoute = express.Router();
announcementRoute.post("/new", isUserAuthorized,bodyValidation(newAnnouncementSchema), announcementController.createNewAnnouncement);


export default announcementRoute;
