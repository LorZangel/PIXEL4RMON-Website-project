// registerController.js

const User = require('../models/User');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(409).json({ success: false, message: 'Username already exists' });
  }

  // Create a new user
  const newUser = new User({
    username,
    email,
    password,
  });

  // Save the user to the database
  await newUser.save();

  res.json({ success: true, message: 'Registration successful' });
};

module.exports = {
  register,
};
