import express from "express"

import { bodyValidation } from "../middlewares/validationMiddleware.js";
import { newBlogSchema , updateBlogSchema} from "../modules/blog/validation/blogValidation.js";
import { isBlogAlreadyExists, isBlogExistById } from "../middlewares/blogMiddlewares.js";
import blogControllers from "../modules/blog/controller/blogControllers.js";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";

const blogsRoutes = express.Router()


blogsRoutes.post("/new", isUserAuthorized, bodyValidation(newBlogSchema), isBlogAlreadyExists, blogControllers.publishBlog)
blogsRoutes.put("/update/:blogId", isUserAuthorized, bodyValidation(updateBlogSchema), isBlogExistById, blogControllers.updateBlog)
blogsRoutes.get("/view-all-blogs", isUserAuthorized, blogControllers.viewAllBlogs);
export default blogsRoutes