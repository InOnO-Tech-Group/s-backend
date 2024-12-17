import galleryRepository from "../repository/galleryRepository.js";
import httpStatus from "http-status";

const createNewGallery = async (req, res) => {
  try {
    const galleryData = req.body;

    const newGallery = await galleryRepository.createGallery(galleryData);
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "Gallery added successfully!",
      data: newGallery,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

export default {createNewGallery}
