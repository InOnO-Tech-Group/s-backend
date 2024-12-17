import express from "express"
import { bodyValidation } from "../middlewares/validationMiddleware.js"
import { newGallerySchema } from "../modules/gallery/validation/galleryValidation.js"
import galleryController from "../modules/gallery/controller/galleryController.js"
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js"
import { isGalleryExist } from "../middlewares/galleryMiddleware.js"
const galleryRoute = express.Router()
galleryRoute.post("/new",isUserAuthorized,bodyValidation(newGallerySchema),galleryController.createNewGallery)
galleryRoute.get("/view",isGalleryExist,galleryController.findAllGallery)

export default galleryRoute