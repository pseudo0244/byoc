'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, Truck, ShieldCheck, CheckCircle } from 'lucide-react'

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center md:items-start md:justify-center py-6">
      <div className="w-full md:w-1/3 bg-black text-white p-8 md:p-12 flex flex-col justify-between rounded-lg shadow-lg mb-8 md:mb-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Thank You for Choosing BYOC</h1>
          <p className="text-md md:text-lg mb-6">We’re thrilled to help you drive away in your dream car.</p>
        </div>
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/Assets/porsche.png" 
            alt="Luxury Car" 
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
          />
        </div>
      </div>

      {/* Right side - Checkout form */}
      <div className="w-full md:w-1/3 bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
        <AnimatePresence>
          {!isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="p-4 md:p-6">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">2023 Model X</span>
                  <span className="font-semibold">$79,990</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">Enhanced Autopilot</span>
                  <span className="font-semibold">$6,000</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">$87,190</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-4 md:p-6 border-t">
                <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                    <input type="text" id="address" name="address" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Payment Method</span>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="paymentMethod" value="credit" checked={paymentMethod === 'credit'} onChange={() => setPaymentMethod('credit')} className="mr-2" />
                        <CreditCard className="w-5 h-5 mr-2" />
                        Credit Card
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="mr-2" />
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42c-1.084 5.699-4.892 7.358-9.76 7.358H9.27c-.352 0-.65.28-.704.628l-1.175 7.44c-.062.394.24.748.638.748h4.48c.53 0 .98-.38 1.06-.9l.044-.286.838-5.31.054-.332c.08-.52.53-.9 1.06-.9h.66c4.35 0 7.76-1.764 8.76-6.872.42-2.15.02-3.943-1.45-5.2"></path>
                        </svg>
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                    {isProcessing ? 'Processing...' : 'Complete Purchase'}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Payment Successful!</h2>
              <p className="text-gray-600 mb-5">Thank you for your purchase. Your order has been confirmed.</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                View Order Details
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
