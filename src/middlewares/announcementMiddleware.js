import httpStatus from "http-status";
import announcementRepository from "../modules/annoucement/repository/announcementRepository.js";
import mongoose from "mongoose";


const isIdValid = (id) => {
  if (!id) return false;
  return mongoose.Types.ObjectId.isValid(id)
}
export const isAnnouncementAlreadyExistsAndPublished = async (req, res, next) => {
  try {
    const announcement = await announcementRepository.findAnnouncementByAttribute("content", req.body.content);
    if (announcement || announcement?.status === "published") {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: "Announcement already exists!"
      })
    }

    return next();

  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    })
  }
}

export const doesAnnouncementExist = async (req, res, next) => {
  const { announcementId } = req.params;
  if (!isIdValid(announcementId)) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        status: httpStatus.BAD_REQUEST,
        message: "Invalid announcement ID!",
      });
  }
  const announcement = await announcementRepository.findAnnouncementByAttribute("_id", announcementId);
  if (!announcement) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({
        status: httpStatus.NOT_FOUND,
        message: "Announcement not Found!",
      });
  }
  req.announcement = announcement;
  return next();
};

export const doAnyAnnouncementsExist = async (req, res, next) => {
  const announcements = await announcementRepository.findAllAnnouncements();
  if (!announcements || announcements.length < 1) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({
        status: httpStatus.NOT_FOUND,
        message: "Announcements not Found!",
      });
  }
  req.announcements = announcements;
  return next();
};

export const doAnyActiveAnnouncementExist = async (req, res, next) => {
  const announcements = await announcementRepository.findActiveAnnouncements();
  if (!announcements || announcements.length < 1) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({
        status: httpStatus.NOT_FOUND,
        message: "Announcements not Found!",
      });
  }
  req.announcements = announcements;
  return next();
};
