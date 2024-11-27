import express from 'express';
import authRoute from './authRoutes.js';
import userRoute from './userRoutes.js';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ status: 200, message: 'Hello, World!' });
});

router.use("/auth", authRoute);
router.use("/user", userRoute);

export default router