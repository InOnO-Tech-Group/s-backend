import express from "express";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";
import { newServiceSchema, updateServiceSchema } from "../modules/service/validation/serviceValidation.js";
import { bodyValidation } from "../middlewares/validationMiddleware.js";
import {
    isOtherSameService,
  isSameService,
  isServiceExistById,
  isServicesExist,
} from "../middlewares/serviceMiddleware.js";
import serviceController from "../modules/service/controller/serviceController.js";

const serviceRoute = express.Router();

serviceRoute.post(
  "/new",
  isUserAuthorized,
  bodyValidation(newServiceSchema),
  isSameService,
  serviceController.createNewService
);
serviceRoute.get(
  "/view",
  isServicesExist,
  serviceController.getAllServices
);
serviceRoute.get(
  "/view/:serviceId",
  isUserAuthorized,
  isServiceExistById,
  serviceController.getSingleServiceById
);
serviceRoute.put(
    "/update/:serviceId",
    isUserAuthorized,
    bodyValidation(updateServiceSchema),
    isServiceExistById,
    isOtherSameService,
    serviceController.updateService
  );
  serviceRoute.delete(
    "/delete/:serviceId",
    isUserAuthorized,
    isServiceExistById,
    serviceController.deleteService
  );
export default serviceRoute;
