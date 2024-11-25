const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/database');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import routes
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

// Use routes
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
}); 