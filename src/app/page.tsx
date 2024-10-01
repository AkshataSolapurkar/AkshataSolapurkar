"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Twitter, Linkedin, Github, ArrowUpRight, Grid, List, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ExpandableName from '@/component/Typewriting'
import personalphoto from "@/component/photopersonal.jpeg"
import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BsGithub, BsTwitterX } from 'react-icons/bs'

export default function Home() {
  const [projects, setProjects] = useState([
    { id: 'project1', title: 'Project 1', description: 'Description of Project 1', color: 'bg-purple-500' },
    { id: 'project2', title: 'Project 2', description: 'Description of Project 2', color: 'bg-gray-800' },
    { id: 'project3', title: 'Project 3', description: 'Description of Project 3', color: 'bg-white' },
    { id: 'project4', title: 'Project 4', description: 'Description of Project 4', color: 'bg-white' },
  ])

  const [isGridView, setIsGridView] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showThemeSlider, setShowThemeSlider] = useState(false)
  const [currentGradient, setCurrentGradient] = useState(0)

  const gradientColors = [
    "from-yellow-200 to-green-200",
    "from-blue-200 to-purple-200",
    "from-red-200 to-yellow-200",
    "from-green-200 to-blue-200"
  ]

  const changeGradient = () => {
    setCurrentGradient((prev) => (prev + 1) % gradientColors.length)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setShowThemeSlider(true)
    setTimeout(() => setShowThemeSlider(false), 3000) // Hide slider after 3 seconds
  }

  return (
    <motion.div 
      className={`min-h-screen p-4 transition-colors duration-300 ease-in-out ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
      initial={false}
      animate={isDarkMode ? { backgroundColor: "#111827" } : { backgroundColor: "#F3F4F6" }}
    >
      <header className="flex justify-between items-center mb-8">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <ExpandableName/>
        </motion.div>
        <nav className="flex items-center space-x-4">
          <motion.ul 
            className="flex space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {['Home', 'About', 'Works', 'Contact'].map((item, index) => (
              <motion.li key={item} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <a href="#" className="hover:text-yellow-400 transition-colors">{item}</a>
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

      <AnimatePresence>
        {showThemeSlider && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Theme</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={isDarkMode ? 100 : 0}
              onChange={(e) => setIsDarkMode(Number(e.target.value) > 50)}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>Light</span>
              <span>Dark</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="grid gap-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            className={`md:col-span-2 flex flex-col justify-between bg-gradient-to-br ${gradientColors[currentGradient]} p-8 rounded-3xl cursor-pointer`}
            onClick={changeGradient}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: `radial-gradient(circle at 100% 35%, rgba(250, 204, 21, 0.6), transparent 25%), radial-gradient(circle at 70% 150%, rgba(30, 144, 255, 0.5), transparent 45%), linear-gradient(to right bottom, rgb(255, 254, 253), rgb(236, 243, 230), rgb(189, 223, 235), transparent 0%)`,
            }}
          >
            <div>
            <h1 className="text-4xl font-bold mb-4">Hey, I'm Akshata, a Frontend Developer</h1>
            <p className="mb-6 max-w-[80%]">I'm on the lookout for exciting opportunities to blend my love for coding and design. With a curious mind and a passion for crafting engaging user experiences.In my free time, I play, read, and goof around.</p>
            </div>
            
            <div className="flex items-center gap-4 ">
  {/* Contact Button */}
  <motion.button
    className="bg-black text-white font-semibold px-6 py-2 rounded-[15px] shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Contact me
  </motion.button>

  {/* Social Media Icons */}
  <div className="flex gap-6">
    {/* Dribbble Icon */}
    <motion.div
      className="flex items-center justify-center w-10 h-10 bg-white rounded-[15px] shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <BsGithub className="text-black w-6 h-6" />
    </motion.div>

    {/* Instagram Icon */}
    <motion.div
      className="flex items-center justify-center w-10 h-10 bg-white rounded-[15px] shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaInstagram className="text-black w-6 h-6" />
    </motion.div>

    {/* Twitter Icon */}
    <motion.div
      className="flex items-center justify-center w-10 h-10 bg-white rounded-[15px] shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaTwitter className="text-black w-6 h-6" />
    </motion.div>

    {/* LinkedIn Icon */}
    <motion.div
      className="flex items-center justify-center w-10 h-10 bg-white rounded-[15px] shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaLinkedin className="text-black w-6 h-6" />
    </motion.div>
  </div>

</div>
            
          </motion.div>
          <motion.div 
            className="bg-yellow-400 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={personalphoto} alt="Your photo" width={600} height={600} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </main>
    </motion.div>
  )
}
