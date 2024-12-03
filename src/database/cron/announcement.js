import cron from "node-cron";
import announcementRepository from "../../modules/annoucement/repository/announcementRepository.js";
import { sendEmail } from "../../services/sendEmail.js";
import authRepository from "../../modules/auth/repository/authRepository.js";

export const scheduleUpdateAnnouncementDues = () => {
  cron.schedule("0 0 * * *", async () => {
    try {
      const now = new Date();
      const dueAnnouncements = await announcementRepository.findDueAnnouncement(
        now
      );

      if (dueAnnouncements.length > 0) {
        const announcementIds = dueAnnouncements.map(
          (announcement) => announcement._id
        );
        await announcementRepository.updateDueAnnouncementStatus(
          announcementIds
        );
        userInfo = await authRepository.findOneUser();
        if (userInfo.email) {
          await sendEmail(
            userInfo.email,
            "ES Gishoma Announcement Dues",
            `<p> ${announcementIds.length} Announcements Updated to unPublished.
                    Please visit school website dashboard.
                </p>`,
            "Consider The Info. Check For More"
          );
        }
      }
    } catch (error) {
      console.error("Error in cron job:", error);
    }
  });
};
