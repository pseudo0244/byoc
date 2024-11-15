import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios for HTTP requests
import { Eye, EyeOff, User, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/login', { email, password });
      
      console.log(response.data);  // Handle success, e.g., redirect user to dashboard

      // If login is successful, navigate to the home page
      navigate('/home'); // Adjust the route as per your app's routing setup
    } catch (err) {
      setError('Invalid email or password');  // Handle errors
    }
  };

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left side - Login Form */}
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
                className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-300"
              >
                Welcome Back
              </motion.h1>
              <p className="text-purple-300">Enter your details to access your account</p>
            </div>
            <div className="space-y-4">
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
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
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
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-purple-300">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                Forgot password?
              </a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
            >
              Sign In
              <ArrowRight className="ml-2" size={18} />
            </motion.button>
          </form>
          <p className="mt-8 text-center text-purple-300">
            Don't have an account?{' '}
            <a href="signup" className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block w-1/2 bg-black-900">
        <div className="h-full w-full flex items-center justify-center overflow-hidden">
          <img
            src="Assets/1.png" // Replace with actual image path
            alt="Luxury Car"
            className="object-cover w-4/5 h-full"
          />
        </div>
      </div>
    </div>
  );
}
