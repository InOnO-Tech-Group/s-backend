import Anncouncemnt from "../../../database/models/announcements.js"
const createAnnouncement= async (anncouncementData)=>{
    return await Anncouncemnt.create(anncouncementData);
}

export default {createAnnouncement}