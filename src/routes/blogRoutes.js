import express from "express"

import { bodyValidation } from "../middlewares/validationMiddleware.js";
import { newBlogSchema } from "../modules/blog/validation/blogValidation.js";
import { isBlogAlreadyExists } from "../middlewares/blogMiddlewares.js";
import blogControllers from "../modules/blog/controller/blogControllers.js";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";

const blogsRoutes = express.Router()


blogsRoutes.post("/new", isUserAuthorized, bodyValidation(newBlogSchema), isBlogAlreadyExists, blogControllers.publishBlog)

export default blogsRoutes