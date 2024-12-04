import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";
import { newServiceSchema } from "../modules/service/validation/serviceValidation.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";
import { isSameService } from "../middlewares/serviceMiddleware.js";
import serviceController from "../modules/service/controller/serviceController.js";

const serviceRoute = express.Router()

serviceRoute.post("/new",isUserAuthorized,bodyValidation(newServiceSchema),isSameService,serviceController.createNewService)
serviceRoute.get("/view",isUserAuthorized,isSameService,serviceController.createNewService)
export default serviceRoute