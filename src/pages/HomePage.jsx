'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion' 
import { ChevronRight, ChevronDown, Instagram, Facebook, Twitter } from 'lucide-react'

const Button = ({ children, primary, ...props }) => (
  <button
    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
      primary
        ? 'bg-porsche-red text-white hover:bg-porsche-red/90'
        : 'bg-white/10 text-white hover:bg-white/20'
    }`}
    {...props}
  >
    {children}
  </button>
)

export default function PorscheHomepage() {
  const [configureOpen, setConfigureOpen] = useState(false)

  const toggleConfigure = () => setConfigureOpen(!configureOpen)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.img
            src="/assets/logobg.png"
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
              <li><a href="/home" className="text-white hover:text-porsche-red transition-colors">Home</a></li>
              <li><a href="/about" className="text-white hover:text-porsche-red transition-colors">About Us</a></li>
              <li><a href="https://byocconfig.vercel.app" className="text-white hover:text-porsche-red transition-colors">Models</a></li>
              <li><a href="/contact" className="text-white hover:text-porsche-red transition-colors">Contact Us</a></li>
            </ul>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <video
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            src="/assets/video1.mp4"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Experience the Porsche Legacy
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Precision engineering meets unparalleled performance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button primary onClick={toggleConfigure}>
              Configure Your Porsche <ChevronRight className="inline-block ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["911", "Taycan", "Cayenne"].map((model, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={`/assets/${model.toLowerCase()}.jpg`} alt={model} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{model}</h3>
                  <Button>Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}