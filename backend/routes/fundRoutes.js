import express from 'express';
import { getAllFunds, getFundById, getFilteredFund } from '../controllers/fundsController.js';
import { Protected } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllFunds);
router.get('/:id', getFundById);
router.get('/search', getFilteredFund);

export default router;
