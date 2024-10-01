import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Twitter, Linkedin, Github, ArrowUpRight, Grid, List, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ExpandableName from '@/component/Typewriting'
import personalphoto from "@/component/photopersonal.jpeg"
import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BsGithub, BsTwitterX } from 'react-icons/bs'

const Hero = () => {
    const [currentGradient, setCurrentGradient] = useState(0)
    const gradientColors = [
        'from-gray-100 via-gray-200 to-green-100',
        'from-blue-100 via-purple-100 to-pink-100',
        'from-yellow-100 via-orange-100 to-red-100',
      ];
    
      const changeGradient = () => {
        setCurrentGradient((prev) => (prev + 1) % gradientColors.length)
      }
  return (
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
  )
}

export default Hero
