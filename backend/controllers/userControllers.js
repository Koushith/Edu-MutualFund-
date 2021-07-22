import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc auth user and get token (login)
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
  const { name, email, password } = req.body;

  const checkUserExist = await User.findOne({ email });

  if (checkUserExist) {
    res.status(400);
    throw new Error('User already exist');
  } else {
    const createUser = await User.create({
      name,
      email,
      password,
    });

    if (createUser) {
      //  status code 201 is for created
      // if user is created successfully, send the response as created alomg with token././
      res.status(201).json({
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
        token: generateToken(createUser._id),
      });
    } else {
      res.status(400); //bad request
      throw new Error('invalid user data');
    }
  }
});

// @desc send token in header from frontend and return loggedin user
//  @route GET /api/user/profile
//  @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  console.log(req.user);
  // user is attached to req obj using auth middleware-
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      gender: user.gender,
    });
  } else {
    res.status(404);
    throw new Error('user not found ');
  }
});

// @desc update the profile
//  @route PUT /api/user/profile
//  @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  // get the id from decoded - loggedin user
  let user = await User.findById(req.user._id);

  if (user) {
    // set to what ever comes from form or leave it as it is.
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
