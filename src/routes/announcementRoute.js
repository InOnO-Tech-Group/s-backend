import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";
import {
  newAnnouncementSchema,
  updateAnnouncementSchema,
} from "../modules/annoucement/validation/announcementValidation.js";
import announcementController from "../modules/annoucement/controller/announcementController.js";
import {
  doAnyActiveAnnouncementExist,
  doAnyAnnouncementsExist,
  doesAnnouncementExist,
  isAnnouncementAlreadyExistsAndPublished,
} from "../middlewares/announcementMiddleware.js";

const announcementRoute = express.Router();

announcementRoute.post("/new", isUserAuthorized, bodyValidation(newAnnouncementSchema), isAnnouncementAlreadyExistsAndPublished, announcementController.createNewAnnouncement);
announcementRoute.put(
  "/update/:announcementId",
  isUserAuthorized,
  bodyValidation(updateAnnouncementSchema),
  doesAnnouncementExist,
  announcementController.updateAnnouncement
);
announcementRoute.get(
  "/view/:announcementId",
  isUserAuthorized,
  doesAnnouncementExist,
  announcementController.viewSingleAnnouncement
);
announcementRoute.get("/view", isUserAuthorized, doAnyAnnouncementsExist, announcementController.viewAllAnnouncements);
announcementRoute.get(
  "/view-active",
  doAnyActiveAnnouncementExist,
  announcementController.viewAllAnnouncements
);

announcementRoute.delete(
  "/delete/:announcementId",
  isUserAuthorized,
  doesAnnouncementExist,
  announcementController.deleteAnnouncement
);


export default announcementRoute;
