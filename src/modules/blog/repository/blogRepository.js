import Blog from "../../../database/models/blog.js";

const findBlogByAttribute = async (key, value) => {
  return await Blog.findOne({ [key]: value });
};

const saveBlog = async (data) => {
  return await Blog.create(data);
};

const findAllBlogs = async () => {
  return await Blog.find().populate("service").populate("author");
};
const findBlogById = async (id) => {
  return await Blog.findById(id).populate("service").populate("author");
};

const findPublishedBlogs = async () => {
  return await Blog.find({ status: "published" })
    .populate("service")
    .populate("author");
};

const updateBlog = async (id, blogData) => {
  return await Blog.findByIdAndUpdate(id, blogData, {
    new: true,
  });
};
const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};
export default {
  findBlogByAttribute,
  saveBlog,
  findAllBlogs,
  findBlogById,
  updateBlog,
  findPublishedBlogs,
  deleteBlog
};
