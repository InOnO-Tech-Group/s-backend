import galleryRepository from "../modules/gallery/repository/galleryRepository.js";

export const isGalleryExist = async (req, res, next) => {
    try {
      const gallery = await galleryRepository.findGallery();
      if (!gallery || gallery.length < 1) {
        return res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          message: "No gallery found",
        });
      }
      req.gallery = gallery;
      return next();
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };