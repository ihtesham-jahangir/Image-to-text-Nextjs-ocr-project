// models/User.js
import mongoose from 'mongoose';

let User;

try {
  // Try to fetch the existing model to avoid OverwriteModelError
  User = mongoose.model('User');
} catch (error) {
  // If the model doesn't exist, define it
  const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

  User = mongoose.model('User', userSchema);
}

export default User;
