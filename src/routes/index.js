import express from 'express';
import authRoute from './authRoutes.js';
import userRoute from './userRoutes.js';
import announcementRoute from './announcementRoute.js';

const router = express.Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/announcement",announcementRoute)

export default router