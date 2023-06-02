const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    createMockUser();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());

// Create a mock user account
const User = require('./models/User');

const createMockUser = async () => {
  const username = 'mockuser';
  const email = 'mockuser@example.com';
  const password = 'mockpassword';

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Mock user already exists');
      return;
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();
    console.log('Mock user created');
  } catch (error) {
    console.error('Error creating mock user:', error);
  }
};

// Routes
app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/register'));

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
