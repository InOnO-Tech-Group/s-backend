import galleryRepository from "../modules/gallery/repository/galleryRepository.js";
import httpStatus from "http-status"

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
  export const isGalleryExistById = async (req, res, next) => {
    try {
        const {galleryId} = req.params
      const gallery = await galleryRepository.findGalleryById(galleryId);
      if (!gallery) {
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