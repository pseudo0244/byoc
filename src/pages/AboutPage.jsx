"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('https://getform.io/f/bgddloxa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
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

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] -z-10" />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-center mb-8"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Transforming the car buying experience with advanced 3D car configurator technology.
          </motion.p>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Build Your Own Car</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
              Our 3D car configurator lets customers easily customize and visualize their dream cars in real-time with realistic details and an intuitive interface.
              </p>
              <p className="text-lg mb-6">
                Features include:
              </p>
              <ul className="list-disc list-inside text-lg mb-6">
                <li>Real-time 3D rendering</li>
                <li>Customizable exterior options</li>
                <li>Dynamic lighting and environment settings</li>
                <li>Instant price updates</li>
              </ul>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <img
                src="/Assets/porsche.png"
                alt="3D Car Model"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
              {submissionStatus && (
                <div className={`text-center mt-4 ${submissionStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {submissionStatus === 'success' ? 'Your message has been sent successfully!' : 'There was an error submitting the form. Please try again.'}
                </div>
              )}
            </form>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="flex items-center space-x-4">
                <Phone size={24} />
                <span>+91 6361879975</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={24} />
                <span>harshith2k5@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={24} />
                <span>PES University, Electronic City</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { question: "How accurate is the 3D car configurator?", answer: "Our 3D car configurator uses advanced rendering techniques to provide highly accurate representations of vehicles, including precise color matching and realistic lighting." },
              { question: "Can I save my configurations?", answer: "Yes, you can create an account to save and revisit your custom configurations at any time." },
              { question: "Is the configurator available on mobile devices?", answer: "Our 3D car configurator is fully responsive and works seamlessly on desktop, tablet, and mobile devices." }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => {
                    // Add toggle logic here
                  }}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown size={20} />
                </button>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
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
                <li><a href="#" className="hover:text-porsche-red transition-colors">Innovation</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-porsche-red transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-porsche-red transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-porsche-red transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p>Phone: +91 6361879975</p>
              <p>Email: harshith2k5@gmail.com</p>
              <p>Address: PES University, Electronic City</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
