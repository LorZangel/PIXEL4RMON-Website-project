// loginController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  // Check if the password is correct
  if (password !== user.password) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);

  res.json({ success: true, token });
};

module.exports = {
  login,
};
