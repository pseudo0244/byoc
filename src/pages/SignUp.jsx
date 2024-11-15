import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Lock, Mail, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  // State hooks for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');  // Error handling state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send POST request to the backend signup endpoint
      const response = await axios.post('http://localhost:5001/signup', {
        name,
        email,
        password,
      });

      console.log(response.data);  // Handle success
      // Optionally, redirect the user or show a success message here
    } catch (err) {
      setError('Error signing up. Please try again.');
      console.error(err.response ? err.response.data : err);
    }
  };

  return (
    <div className="min-h-screen flex bg-black">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <motion.h1
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Join Us
              </motion.h1>
              <p className="text-purple-300">Create your account and start your journey</p>
            </div>

            {/* Display error message */}
            {error && <div className="text-red-500">{error}</div>}

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Full Name"
                  required
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Email address"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Password"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Confirm Password"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-purple-300">
                I agree to the <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a> and <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
            >
              Sign Up
              <ArrowRight className="ml-2" size={18} />
            </motion.button>
          </form>

          {/* Sign in link */}
          <p className="mt-8 text-center text-purple-300">
            Already have an account?{' '}
            <a href="/" className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign in
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
