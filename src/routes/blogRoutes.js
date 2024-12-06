import express from "express"

import { bodyValidation } from "../middlewares/validationMiddleware.js";
import { newBlogSchema , updateBlogSchema} from "../modules/blog/validation/blogValidation.js";
import { isAnyPublishedBlog, isBlogAlreadyExists, isBlogExistById } from "../middlewares/blogMiddlewares.js";
import blogControllers from "../modules/blog/controller/blogControllers.js";
import { isUserAuthorized } from "../middlewares/authorizationMiddleware.js";

const blogsRoutes = express.Router()


blogsRoutes.post("/new", isUserAuthorized, bodyValidation(newBlogSchema), isBlogAlreadyExists, blogControllers.publishBlog)
blogsRoutes.put("/update/:blogId", isUserAuthorized, bodyValidation(updateBlogSchema), isBlogExistById, blogControllers.updateBlog)
blogsRoutes.get("/view-all-blogs", isUserAuthorized, blogControllers.viewAllBlogs);
blogsRoutes.get("/view-published-blogs", isAnyPublishedBlog,blogControllers.viewPublishedBlog);
blogsRoutes.get("/view/:blogId", isUserAuthorized, isBlogExistById,blogControllers.viewSingleBlog);
blogsRoutes.delete("/delete/:blogId", isUserAuthorized, isBlogExistById,blogControllers.deleteBlog);
blogsRoutes.get("/view-statistics/:year", isUserAuthorized,blogControllers.getBlogannualStatistics);
export default blogsRoutes