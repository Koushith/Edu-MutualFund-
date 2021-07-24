import { funds } from '../data/funds.js';
import asyncHandler from 'express-async-handler';

// @desc send the fund as json respone
//  @route Post /api/funds/
//  @access Private

const getAllFunds = asyncHandler(async (req, res) => {
  res.json({
    funds,
  });
});

export { getAllFunds };
