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
              <li><a href="https://byocconfig.vercel.app" className="text-white hover:text-porsche-red transition-colors">Models</a></li>
              <li><a href="contact" className="text-white hover:text-porsche-red transition-colors">Contact Us</a></li>
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
            src="/Assets/video1.mp4"
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
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* Configure Modal */}
      {configureOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <h2 className="text-3xl font-bold mb-4">Configure Your Porsche</h2>
            <p className="mb-6">Choose your model and start customizing your dream Porsche.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button onClick={() => alert('911 configuration started')}>911</Button>
              <Button onClick={() => alert('Taycan configuration started')}>Taycan</Button>
              <Button onClick={() => alert('Cayenne configuration started')}>Cayenne</Button>
              <Button onClick={() => alert('Panamera configuration started')}>Panamera</Button>
            </div>
            <Button onClick={toggleConfigure}>Close</Button>
          </motion.div>
        </motion.div>
      )}

      {/* Featured Models Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "911", image: "Assets/911.webp", description: "Iconic sports car" },
              { name: "Taycan", image: "Assets/taycan.png", description: "All-electric performance" },
              { name: "Cayenne", image: "Assets/cayenne.jpg", description: "Luxury SUV" }
            ].map((model, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={model.image} alt={model.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{model.name}</h3>
                  <p className="text-gray-300 mb-4">{model.description}</p>
                  <Button>Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <motion.div
              className="w-full md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/Assets/card2.avif" alt="Porsche Performance" className="rounded-lg shadow-xl" />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Unmatched Performance</h2>
              <p className="text-xl mb-6">
                From the racetrack to the road, Porsche delivers exhilarating performance and precision handling.
                Experience the thrill of driving a legend.
              </p>
              <Button>Explore Performance</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Harshith J", role: "PES2UG23CS216", image: "/Assets/harshith.jpg" },
              { name: "Kartik B Sumbly", role: "PES2UG23CS258", image: "/Assets/kartik.jpeg" },
              { name: "Githesh Naidu", role: "PES2UG23CS199", image: "/Assets/githesh.jpeg" }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Porsche</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-porsche-red transition-colors">Our Heritage</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-porsche-red transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Find a Dealer</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Service & Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-porsche-red transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Cookie Settings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-porsche-red transition-colors">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-porsche-red transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-porsche-red transition-colors">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Byoc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}