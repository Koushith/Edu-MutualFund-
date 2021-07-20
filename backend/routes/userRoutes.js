import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userControllers.js';

const router = express.Router();

router.route('/login').post(authUser);

export default router;
