import express from "express"
import { bodyValidation } from "../middlewares/validationMiddleware.js"
import { newGallerySchema } from "../modules/gallery/validation/galleryValidation.js"
import galleryController from "../modules/gallery/controller/galleryController.js"
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js"
const galleryRoute = express.Router()
galleryRoute.post("/new",isUserAuthorized,bodyValidation(newGallerySchema),galleryController.createNewGallery)

export default galleryRoute