"use client"
import React, { useState,useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { ArrowUpRight, Briefcase } from 'lucide-react'

const Page = () => {
  const [expandedJob, setExpandedJob] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const workExperience = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Leadlly',
      period: '2024 - Present',
      description1: 'Built the first version of the company website using Next.js and Framer Motion, delivering a dynamic and responsive user experience.',
      description2: 'Developed and implemented the full UI for the mentor dashboard, ensuring seamless functionality and an intuitive design.',
    },
  ]

  const JobCard = ({ job, index }:any) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: "-100px" })
    
    const cardVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
          type: "spring",
          damping: 18,
          stiffness: 60,
          delay: index * 0.1 
        }
      }
    }

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-12 relative"
      >
        <motion.div 
          className="ml-8 p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg"
          whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
          <p className="text-gray-600 font-semibold">{job.company}</p>
          <p className="text-sm text-gray-500 mb-4">{job.period}</p>

          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
              <p className="text-gray-700">{job.description1}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
              <p className="text-gray-700">{job.description2}</p>
            </div>
          </div>
          <motion.div
            className="inline-flex items-center cursor-pointer text-yellow-500 font-semibold"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Learn more <ArrowUpRight className="ml-2 w-5 h-5" />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute left-0 w-8 h-8 bg-yellow-400 rounded-full -ml-4 mt-3 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Briefcase className="w-4 h-4 text-white" />
        </motion.div>
      </motion.div>
    )
  }

  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div 
      className="max-h-screen p-6 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 100% 35%, rgba(250, 204, 21, 0.6), transparent 25%), radial-gradient(circle at 70% 150%, rgba(30, 144, 255, 0.5), transparent 45%), linear-gradient(to right top, rgb(240, 240, 240), rgb(249, 249, 249), rgb(242, 242, 242), transparent 10%)`,
      }}
      ref={containerRef}
    >
      <motion.h1 
        className="text-4xl font-bold mb-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Work Experience
      </motion.h1>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
        style={{ scaleX: progress }}
      />
      <div className="max-w-3xl mx-auto relative">
        {workExperience.map((job, index) => (
          <JobCard key={job.id} job={job} index={index} />
        ))}
      </div>
    </div>
  )
};

export default Page;