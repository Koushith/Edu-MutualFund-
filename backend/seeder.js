import mongoose from 'mongoose';
import dotenv from 'dotenv';

import users from './data/users.js';

import User from './models/userModel.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // delete any existing data

    await User.deleteMany();

    // create many user -this is coming from users

    const createdUser = await User.insertMany(users);

    // in config file- first one is admin

    if (createdUser) {
      console.log('Data Imported!');
    }

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
