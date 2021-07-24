import express from 'express';
import { getAllFunds } from '../controllers/fundsController.js';
import { Protected } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllFunds);

export default router;
