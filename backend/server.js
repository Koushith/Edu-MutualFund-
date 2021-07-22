import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

// initilizations
const app = express();
dotenv.config();
connectDB();

app.use(cors());
// middleware to read the form data
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running');
});

// all routes
app.use('/api/users', userRoutes);

// path not found- middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
