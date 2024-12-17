import Gallery from "../../../database/models/gallery.js"

const createGallery = (galleryData)=>{
    return Gallery.create(galleryData)
}
const findGallery = () => {
    return Gallery.find().sort({ createdAt: -1 }); // -1 indicates descending order
  };
  const findGalleryById =(id)=>{
    return Gallery.findById(id)
  }
export default {createGallery,findGallery,findGalleryById}