import mongoose from 'mongoose';
import dotenv from 'dotenv';

import users from './data/users.js';
import funds from './data/funds.js ';
import User from './models/userModel.js';
import Fund from './models/fundModel.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // delete any existing data
    await User.deleteMany();

    // create many user -this is coming from users
    const createdUser = await User.insertMany(users);

    await Fund.deleteMany();

    const createdFund = await Fund.insertMany(funds);
    if (createdUser && createdFund) {
      console.log('funds Created');
    }
    // if (createdUser) {
    //   console.log('Data Imported!');
    // }

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await User.deleteMany();
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
