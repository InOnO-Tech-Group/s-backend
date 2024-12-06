import Blog from "../../../database/models/blog.js";
import BlogView from "../../../database/models/blogViews.js";
const findBlogByAttribute = async (key, value) => {
  return await Blog.findOne({ [key]: value });
};

const saveBlog = async (data) => {
  return await Blog.create(data);
};

const findAllBlogs = async () => {
  return await Blog.find()
    .populate("service")
    .populate("author")
    .sort({ createdAt: -1 });
};
const findBlogById = async (id) => {
  return await Blog.findById(id).populate("service").populate("author");
};

const findPublishedBlogs = async () => {
  return await Blog.find({ status: "published" })
    .populate("service")
    .populate("author")
    .sort({ createdAt: -1 });
};

const updateBlog = async (id, blogData) => {
  return await Blog.findByIdAndUpdate(id, blogData, {
    new: true,
  });
};
const updateBlogViews = async (id) => {
  return await Blog.findByIdAndUpdate(
    id,
    { $inc: { views: 1 } },
    {
      new: true,
    }
  );
};
const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};

const recordView = async (data) => {
  return await BlogView.create(data);
};
const getBlogReadStatistics = async (year) => {
  const start = new Date(`${year}-01-01`);
  const end = new Date(`${year}-12-31T23:59:59`);

  return BlogView.aggregate([
    {
      $match: {
        createdAt: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: { month: { $month: "$createdAt" } },
        totalViews: { $sum: 1 },
      },
    },
    { $sort: { "_id.month": 1 } },
  ]);
};
export default {
  findBlogByAttribute,
  saveBlog,
  findAllBlogs,
  findBlogById,
  updateBlog,
  findPublishedBlogs,
  deleteBlog,
  recordView,
  updateBlogViews,
  getBlogReadStatistics,
};
