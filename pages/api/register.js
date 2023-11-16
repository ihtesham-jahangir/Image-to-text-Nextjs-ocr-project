// pages/api/register.js
import dbConnect from './dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstname, lastname, username, email, password } = req.body;

  // Check if required fields are missing
  if (!firstname || !lastname || !username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  await dbConnect();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });
  
    await user.save();
  
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error); // Log the specific error
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
