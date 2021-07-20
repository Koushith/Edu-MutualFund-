import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
