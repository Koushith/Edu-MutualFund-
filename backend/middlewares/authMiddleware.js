import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const Protected = asyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // strip the berarer prefix and get only token part
      token = req.headers.authorization.split(' ')[1];

      // decode the token and get the paylod- that we used while signing
      // todo- place the secret in .env file
      const decoded = jwt.verify(token, 'abc12345');

      //   we can get user data that is sent as payload while signing - get everything except password. assign a user to req-object
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (err) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, token failed');
  }
});
