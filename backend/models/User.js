import mongoose from 'mongoose';

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Model
const User = mongoose.model('User', userSchema);

export default User;
