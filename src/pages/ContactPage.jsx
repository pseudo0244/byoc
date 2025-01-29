import React from 'react'
import { Car, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
              <li><a href="https://byocconfig.vercel.app/" className="text-white hover:text-porsche-red transition-colors">Models</a></li>
              <li><a href="contact" className="text-white hover:text-porsche-red transition-colors">Contact Us</a></li>
            </ul>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=400&width=800')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-neon-green">Contact Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-neon-green">
            <h2 className="text-2xl font-semibold mb-4 text-neon-green">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-neon-blue">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 text-white border border-neon-blue focus:border-neon-green p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-neon-blue">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-gray-800 text-white border border-neon-blue focus:border-neon-green p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-neon-blue">Phone</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full bg-gray-800 text-white border border-neon-blue focus:border-neon-green p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-neon-blue">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full bg-gray-800 text-white border border-neon-blue focus:border-neon-green p-2 rounded"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-neon-green text-black hover:bg-neon-blue transition-colors p-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-neon-green">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-neon-blue" />
                  <span>+91 6361879975</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-neon-blue" />
                  <span>harshith2k5@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-neon-blue" />
                  <span>PES Univeristy, Electronic City , Bangalore</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-neon-blue" />
                  <span>Mon-Sat: 9AM-7PM, Sun: Closed</span>
                </li>
              </ul>
            </div>

            {/* Map (Placeholder) */}
            <div>
              <img src='Assets/logobg.png'></img>
            </div>
          </div>
        </div>
      </main>

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
