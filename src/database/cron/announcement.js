import cron from "node-cron";
import announcementRepository from "../../modules/annoucement/repository/announcementRepository.js";

export const scheduleUpdateAnnouncementDues = () => {
  cron.schedule("* * * * *", async () => {
    try {
        const now = new Date();
      const dueAnnouncements = await announcementRepository.findDueAnnouncement(now);

      if (dueAnnouncements.length > 0) {
        const announcementIds = dueAnnouncements.map((announcement) => announcement._id);
        await announcementRepository.updateDueAnnouncementStatus(announcementIds);

        console.log(`Updated ${announcementIds.length} records to "unPublished".`);
      } else {
        console.log("No records to update.");
      }
    } catch (error) {
      console.error("Error in cron job:", error);
    }
  });
};
