import httpStatus from "http-status"
import blogRepository from "../repository/blogRepository.js"

const publishBlog = async (req, res) => {
    try {

        req.body.author = req.user._id
        const blog = await blogRepository.saveBlog(req.body)
        return res.status(httpStatus.CREATED).json({
            status: httpStatus.CREATED,
            message: "Blog published successfully",
            blog,
        })
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        })
    }
}

export default {
    publishBlog
}