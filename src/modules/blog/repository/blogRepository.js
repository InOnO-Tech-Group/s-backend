import Blog from "../../../database/models/blog.js"

const findBlogByAttribute = async (key, value) => {
    return await Blog.findOne({ [key]: value });
}

const saveBlog = async (data) => {
    return await Blog.create(data);
}

export default {
    findBlogByAttribute,
    saveBlog
}