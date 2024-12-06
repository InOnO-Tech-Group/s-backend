import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import announcementRoute from "./announcementRoute.js";
import serviceRoute from "./serviceRoute.js";
import blogsRoutes from "./blogRoutes.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/announcement", announcementRoute);
router.use("/service", serviceRoute);
router.use("/blog", blogsRoutes)

export default router;
