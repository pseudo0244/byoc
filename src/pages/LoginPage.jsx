import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  // State hooks for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // Error handling state

  // Audio to play upon signing in
  const bgm = new Audio('Assets/bgm.mp3');  // Import the BGM from Assets folder

  // Handle sign in button click
  const handleSignIn = () => {
    // Delay the music by 3 seconds
    setTimeout(() => {
      // Play background music
      bgm.play();

      // Navigate to the homepage after the audio finishes
      bgm.onended = () => {
        navigate('/home');  // Redirect to homepage
      };
    }, 3000);  // 3000 milliseconds = 3 seconds
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
          <form className="space-y-6">
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
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            {/* Submit Button (Sign In) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleSignIn} // Trigger BGM and navigation on click
              className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
            >
              Vroom
              <ArrowRight className="ml-2" size={18} />
            </motion.button>
          </form>

          {/* Sign up link */}
          <p className="mt-8 text-center text-purple-300">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side image */}
      <div className="hidden lg:flex lg:w-1/3 bg-cover bg-center" style={{ backgroundImage: 'url("Assets/1.png")' }}></div>
    </div>
  );
}
