const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const connectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Set a timeout for server selection
      socketTimeoutMS: 45000, // Set a timeout for socket operations
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDb;
