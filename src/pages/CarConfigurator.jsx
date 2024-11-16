import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [gameScore, setGameScore] = useState(0)
  const [gamePosition, setGamePosition] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      setGamePosition(Math.random() * 90 + 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
  }

  const handleGameClick = () => {
    setGameScore(gameScore + 1)
  }

  const toggleConfigure = () => {
    console.log('Configure Porsche clicked')
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.img
            src="/Assets/logobg.png"
            alt="Porsche Logo"
            className="h-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex space-x-6">
              <li><a href="home" className="text-white hover:text-porsche-red transition-colors">Home</a></li>
              <li><a href="about" className="text-white hover:text-porsche-red transition-colors">About Us</a></li>
              <li><a href="configure" className="text-white hover:text-porsche-red transition-colors">Models</a></li>
              <li><a href="contact" className="text-white hover:text-porsche-red transition-colors">Contact Us</a></li>
            </ul>
          </motion.nav>
        </div>
      </header>

      {/* Coming Soon Section */}
      <motion.h1
        className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Coming Soon
      </motion.h1>

      <motion.div
        className="text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Something awesome is in the works!
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-md bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          Notify Me
        </button>
      </motion.form>

      <div className="text-xl mb-4">While you wait, try this mini-game:</div>
      <div className="relative w-full max-w-md h-16 bg-gray-800 rounded-md overflow-hidden">
        <motion.div
          className="absolute top-0 w-8 h-16 bg-gradient-to-b from-pink-500 to-purple-500 rounded-md cursor-pointer"
          animate={{ left: `${gamePosition}%` }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={handleGameClick}
        />
      </div>
      <div className="mt-4 text-xl">Score: {gameScore}</div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
