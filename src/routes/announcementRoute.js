import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";
const announcementRoute = express.Router();
announcementRoute.post("/new", isUserAuthorized,);

export default announcementRoute;
