import Gallery from "../../../database/models/gallery.js";

const createGallery = (galleryData) => {
  return Gallery.create(galleryData);
};
const findGallery = () => {
  return Gallery.find().sort({ createdAt: -1 });
};
const findGalleryById = (id) => {
  return Gallery.findById(id);
};
const deleteGallery = (id) => {
  return Gallery.findByIdAndDelete(id);
};
export default { createGallery, findGallery, findGalleryById, deleteGallery };
