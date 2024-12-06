import Blog from "../../../database/models/blog.js";

const findBlogByAttribute = async (key, value) => {
  return await Blog.findOne({ [key]: value });
};

const saveBlog = async (data) => {
  return await Blog.create(data);
};

const findAllBlogs = async () => {
  return await Blog.find();
};
const findBlogById = async (id) => {
  return await Blog.findById(id);
};

const updateBlog = async (id, blogData) => {
    return await Blog.findByIdAndUpdate(id, blogData, {
      new: true,
    });
  };
export default {
  findBlogByAttribute,
  saveBlog,
  findAllBlogs,
  findBlogById,
  updateBlog
};
