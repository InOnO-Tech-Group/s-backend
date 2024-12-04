import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware";
import { newServiceSchema } from "../modules/service/validation/serviceValidation";
import { bodyValidation } from "../middlewares/validationMiddleware";
import { isSameService } from "../middlewares/serviceMiddleware";

const serviceRoute = express.Router()

serviceRoute.post("/new",isUserAuthorized,bodyValidation(newServiceSchema),isSameService,)
export default serviceRoute