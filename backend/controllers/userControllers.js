import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc auth user and get token
//  @route Post /api/user/login
//  @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      gender: user.gender,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid user name or password');
  }
});

// @desc register user and get token
// @route Post /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.send('register new user');
});

// @desc send token in header from frontend and return loggedin user
//  @route GET /api/user/profile
//  @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send('user profile..');
});

// @desc update the profile
//  @route PUT /api/user/profile
//  @access Private

const updateUserProfile = asyncHandler(async (req, res) => {});

export { authUser, getUserProfile, registerUser, updateUserProfile };
