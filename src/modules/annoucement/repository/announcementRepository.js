import Anncouncemnt from "../../../database/models/announcements.js";
const createAnnouncement = async (anncouncementData) => {
  return await Anncouncemnt.create(anncouncementData);
};
const findAnnouncementById = async (announcementId) => {
  return await Anncouncemnt.findById(announcementId);
};
const findAllAnnouncements = async () => {
  return await Anncouncemnt.find();
};
const findActiveAnnouncements = async (date) => {
    return await Anncouncemnt.find({ dueDate: { $lt: date } });
  };
const updateAnnouncement = async (id, anncouncementData) => {
  return await Anncouncemnt.findByIdAndUpdate(id, anncouncementData, {
    new: true,
  });
};
const deleteAnnouncement = async (id, anncouncementData) => {
  return await Anncouncemnt.findByIdAndDelete(id);
};
export default {
  createAnnouncement,
  updateAnnouncement,
  findAnnouncementById,
  deleteAnnouncement,
  findAllAnnouncements,
  findActiveAnnouncements
};
