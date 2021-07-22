import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userControllers.js';
import { Protected } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/', registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(Protected, getUserProfile);

export default router;
