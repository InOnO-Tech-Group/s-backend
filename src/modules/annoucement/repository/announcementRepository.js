import Anncouncemnt from "../../../database/models/announcements.js";

const findAnnouncementByAttribute = async (key, value) => {
  return await Anncouncemnt.findOne({ [key]: value });
};

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
  return await Anncouncemnt.find({
    dueDate: { $lt: date },
    status: "published",
  });
};

const updateAnnouncement = async (id, anncouncementData) => {
  return await Anncouncemnt.findByIdAndUpdate(id, anncouncementData, {
    new: true,
  });
};

const deleteAnnouncement = async (id, anncouncementData) => {
  return await Anncouncemnt.findByIdAndDelete(id);
};

const findDueAnnouncement = async (now) => {
  return Anncouncemnt.find({ dueDate: { $lte: now }, status: "published" });
};

const updateDueAnnouncementStatus = async (announcentIds) => {
  return Anncouncemnt.updateMany(
    { _id: { $in: announcentIds } },
    { $set: { status: "unpublished" } }
  );
};
export default {
  findAnnouncementByAttribute,
  createAnnouncement,
  updateAnnouncement,
  findAnnouncementById,
  deleteAnnouncement,
  findAllAnnouncements,
  findActiveAnnouncements,
  findDueAnnouncement,
  updateDueAnnouncementStatus
};
