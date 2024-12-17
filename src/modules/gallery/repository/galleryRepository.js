import Gallery from "../../../database/models/gallery.js"

const createGallery = (galleryData)=>{
    return Gallery.create(galleryData)
}
export default {createGallery}