import httpStatus from "http-status";
import announcementRepository from "../modules/annoucement/repository/announcementRepository.js";

export const doesAnnouncementExist = async (req, res,next)=>{
    const {announcementId} = req.params
const announcement = await announcementRepository.findAnnouncementById(announcementId)
if (!announcement) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ status: httpStatus.NOT_FOUND, message: "Announcement not Found!" });
  }
req.announcement=announcement
return next();
}