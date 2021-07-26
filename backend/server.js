import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import fundRoutes from './routes/fundRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

// initilizations
const app = express();
dotenv.config();
connectDB();

app.use(cors());
// middleware to read the form data
app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// all routes
app.use('/api/users', userRoutes);

// get all funds
app.use('/api/funds', fundRoutes);

// deployment
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// path not found- middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
