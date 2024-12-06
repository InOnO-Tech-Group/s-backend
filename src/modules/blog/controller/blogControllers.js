import httpStatus from "http-status";
import blogRepository from "../repository/blogRepository.js";

const publishBlog = async (req, res) => {
  try {
    req.body.author = req.user._id;
    const blog = await blogRepository.saveBlog(req.body);
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "Blog published successfully",
      blog,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const viewAllBlogs = async (req, res) => {
  try {
    const blogs = await blogRepository.findAllBlogs();
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "All blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await blogRepository.updateBlog(blogId, req.body);
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const viewSingleBlog = async (req, res) => {
  try {
    await blogRepository.recordView({blog:req.blog._id})
    const blog =await blogRepository.updateBlogViews(req.blog._id)
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Blog retrieved successfully",
      data: blog,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const viewPublishedBlog = async (req, res) => {
    try {
      return res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Blogs retrieved successfully",
        data: req.blogs,
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };
  const deleteBlog = async (req, res) => {
    try {
        await blogRepository.deleteBlog(req.blog._id)
      return res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Blog deleted successfully !",
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };
  const getBlogannualStatistics = async (req, res) => {
    try {
        const statistics = await blogRepository.getBlogReadStatistics(req.params.year)
      return res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Statistics retrived successfully !",
        data: statistics,
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };
export default {
  publishBlog,
  viewAllBlogs,
  updateBlog,
  viewSingleBlog,
  viewPublishedBlog,
  deleteBlog,
  getBlogannualStatistics
};
