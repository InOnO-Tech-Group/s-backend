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
  return await Anncouncemnt.find().sort({ createdAt: -1 })
};

const findActiveAnnouncements = async () => {
  return await Anncouncemnt.find({
    status: "published",
  }).sort({ createdAt: -1 })
};

const updateAnnouncement = async (id, anncouncementData) => {
  return await Anncouncemnt.findByIdAndUpdate(id, anncouncementData, {
    new: true,
  });
};

const deleteAnnouncement = async (id) => {
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
