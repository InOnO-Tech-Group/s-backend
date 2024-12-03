import announcementRepository from "../repository/announcementRepository.js";
import httpStatus from "http-status";
const createNewAnnouncement = async (req, res) => {
  try {
    const anncouncementData = req.body;

    const anncouncement = await announcementRepository.createAnnouncement(
      anncouncementData
    );

    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "New announcement added  successfully.",
      data: anncouncement,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const updateAnnouncement = async (req, res) => {
  try {
    const anncouncementData = req.body;

    const anncouncement = await announcementRepository.updateAnnouncement(
      req.announcement._id,
      anncouncementData
    );

    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Announcement Updated  successfully.",
      data: anncouncement,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const viewSingleAnnouncement = async (req, res) => {
  try {
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Announcement retrieved  successfully.",
      data: req.anncouncement,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const viewAllAnnouncements = async (req, res) => {
    try {
      return res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Announcements retrieved  successfully.",
        data: req.anncouncements,
      });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };

  const viewActiveAnnouncements = async (req, res) => {
    try {
      return res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Announcements retrieved  successfully.",
        data: req.anncouncements,
      });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };

const deleteAnnouncement = async (req, res) => {
    try {
    await announcementRepository.deleteAnnouncement
      return res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Announcement deleted  successfully."
      });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };
  

export default {
  createNewAnnouncement,
  updateAnnouncement,
  viewSingleAnnouncement,
  viewAllAnnouncements,
  deleteAnnouncement,
  viewActiveAnnouncements
};
