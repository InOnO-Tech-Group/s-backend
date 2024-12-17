import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import announcementRoute from "./announcementRoute.js";
import serviceRoute from "./serviceRoute.js";
import blogsRoutes from "./blogRoutes.js";
import messageRoute from "./messageRoute.js";
import galleryRoute from "./galleryRoute.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/announcement", announcementRoute);
router.use("/service", serviceRoute);
router.use("/blog", blogsRoutes)
router.use("/message",messageRoute)
router.use("gallery",galleryRoute)

export default router;
