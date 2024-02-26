const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.error('MongoDB Error:', error.message);
  }
};

module.exports = connectDB;