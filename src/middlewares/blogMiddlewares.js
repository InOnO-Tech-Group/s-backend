import httpStatus from "http-status";
import blogRepository from "../modules/blog/repository/blogRepository.js";

export const isBlogAlreadyExists = async (req, res, next) => {
    try {
        const article = await blogRepository.findBlogByAttribute("title", req.body.title);
        if (article) {
            return res.status(httpStatus.BAD_REQUEST).json({
                status: httpStatus.BAD_REQUEST,
                message: "Article already exists!"
            });
        }
        return next()
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}