import funds from '../data/funds.js';
import asyncHandler from 'express-async-handler';

// @desc send the fund as json respone
//  @route GET /api/funds/
//  @access Private

const getAllFunds = asyncHandler(async (req, res) => {
  res.json({
    funds,
  });
});

// @desc send the single fund details based on id
//  @route GET /api/funds/:id
//  @access Private

const getFundById = asyncHandler(async (req, res) => {
  const URI = req.params.id;
  const fund = funds.find((fn) => fn.id == URI);
  if (fund) {
    res.json(fund);
  } else {
    res.status(404);
    throw new Error('fund not found');
  }
});

export { getAllFunds, getFundById };
