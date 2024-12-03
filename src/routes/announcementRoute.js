import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";
import { newAnnouncementSchema } from "../modules/annoucement/validation/announcementValidation.js";
const announcementRoute = express.Router();
announcementRoute.post("/new", isUserAuthorized,bodyValidation(newAnnouncementSchema), (req, res) => {
  return res.status(200).json({ mes: req.user });
});

export default announcementRoute;
