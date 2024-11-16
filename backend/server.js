import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';

// Initialize the app
const app = express();
const port = 5001;

// Middleware
app.use(cors());  // Allows cross-origin requests
app.use(bodyParser.json());  // Parse JSON request bodies

// MongoDB connection string
const dbURI = 'mongodb+srv://harshith2k5:Harshith2005@byoc.1kca9.mongodb.net/byoc?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// POST route for signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST route for login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Simple test route
app.get('/test', (req, res) => {
  res.send('Test route is working');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
