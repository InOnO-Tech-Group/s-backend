import Anncouncemnt from "../../../database/models/announcements.js"
const createAnnouncement= async (AnncouncemntData)=>{
    return await Anncouncemnt.create(AnncouncemntData);
}