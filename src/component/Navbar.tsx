"use client"

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import ExpandableName from './Typewriting'

export default function Navbar() {
  const [navLinks, setNavLinks] = useState([
    { id: 'Home', title: 'Home', url: '/' },
    { id: 'Work', title: 'Work', url: '/Work' },
    { id: 'Resume', title: 'Resume', url: '#' },
  ])
  
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showThemeSlider, setShowThemeSlider] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setShowThemeSlider(true)
    setTimeout(() => setShowThemeSlider(false), 3000) // Hide slider after 3 seconds
  }

  return (
    <header className="flex justify-between p-4 items-center mb-2">
      <motion.div 
        className="flex items-center space-x-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <ExpandableName />
      </motion.div>

      <nav className="flex items-center space-x-4">
        <motion.ul 
          className="flex space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.li key={link.id} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <a href={link.url} className="hover:text-yellow-400 transition-colors">{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
      </nav>
    </header>
  )
}
