// pages/api/login.js
import dbConnect from './dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // Check if required fields are missing
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  await dbConnect();

  try {
    // Find the user by username (assuming your model uses 'username' instead of 'email')
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect username or password' });
    }

    res.status(200).json({ message: 'Login successfully' });
  } catch (error) {
    console.error('Login error:', error); // Log the specific error
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
