import express from 'express';

const router = express.Router();


router.get('/test', (req, res) => {
    res.json({ status: 200, message: 'Hello, World!' });
});

export default router