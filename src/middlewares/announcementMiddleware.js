import httpStatus from "http-status";
import announcementRepository from "../modules/annoucement/repository/announcementRepository.js";

export const doesAnnouncementExist = async (req, res, next) => {
  const { announcementId } = req.params;
  const announcement = await announcementRepository.findAnnouncementById(
    announcementId
  );
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
export const doAnyAnnouncementExist = async (req, res, next) => {
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
