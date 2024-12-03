import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";
import { newAnnouncementSchema, updateAnnouncementSchema } from "../modules/annoucement/validation/announcementValidation.js";
import announcementController from "../modules/annoucement/controller/announcementController.js";
import { doesAnnouncementExist } from "../middlewares/announcementMiddleware.js";
const announcementRoute = express.Router();
announcementRoute.post("/new", isUserAuthorized,bodyValidation(newAnnouncementSchema), announcementController.createNewAnnouncement);
announcementRoute.put("/update/:announcemntId", isUserAuthorized,doesAnnouncementExist,bodyValidation(updateAnnouncementSchema), announcementController.updateAnnouncement);
announcementRoute.get("/view/:announcemntId", isUserAuthorized,doesAnnouncementExist, announcementController.viewSingleAnnouncement);

export default announcementRoute;
