import Anncouncemnt from "../../../database/models/announcements.js";
const createAnnouncement = async (anncouncementData) => {
  return await Anncouncemnt.create(anncouncementData);
};
const findAnnouncementById = async (announcementId) => {
    return await Anncouncemnt.create(announcementId);
  };
const updateAnnouncement = async (id, anncouncementData) => {
  return await Anncouncemnt.findByIdAndUpdate(id, anncouncementData, {
    new: true,
  });
};
export default { createAnnouncement ,updateAnnouncement,findAnnouncementById};
