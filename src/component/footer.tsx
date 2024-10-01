'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="p-8 bg-white border-t border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-sm text-gray-600 font-medium tracking-wide">
            © 2024 All rights reserved to @akshatasolapurkar2024
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer