import express from 'express';
import { getAllFunds, getFundById } from '../controllers/fundsController.js';
import { Protected } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllFunds);
router.get('/:id', getFundById);

export default router;
