import Gallery from "../../../database/models/gallery.js"

const createGallery = (galleryData)=>{
    return Gallery.create(galleryData)
}
const findGallery = () => {
    return Gallery.find().sort({ createdAt: -1 }); // -1 indicates descending order
  };
export default {createGallery,findGallery}