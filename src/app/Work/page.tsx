"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Page = () => {
  const [hoveredJob, setHoveredJob] = useState(null);

  const workExperience = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'Tech Innovators Inc.',
      period: '2021 - Present',
      description: 'Led design initiatives for flagship products, resulting in a 40% increase in user engagement.',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'CreativeSolutions Co.',
      period: '2018 - 2021',
      description: 'Redesigned core user flows, improving conversion rates by 25% across multiple product lines.',
    },
    {
      id: 3,
      title: 'Product Design Intern',
      company: 'StartupVision',
      period: '2017 - 2018',
      description: 'Contributed to the design of an award-winning mobile app, gaining 100K+ downloads in the first month.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-12">Work Experience</h1>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {workExperience.map((job, index) => (
          <motion.div
            key={job.id}
            className="mb-16 relative"
            variants={itemVariants}
            onHoverStart={() => setHoveredJob(job.id)}
            onHoverEnd={() => setHoveredJob(null)}
          >
            <motion.div
              className="absolute left-0 w-1 h-full bg-yellow-400"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <div className="ml-8">
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500 mb-2">{job.period}</p>
              <p className="mb-4">{job.description}</p>
              <motion.div
                className="inline-flex items-center cursor-pointer text-yellow-500"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Learn more <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.div>
            </div>
            <motion.div
              className="absolute left-0 w-4 h-4 bg-yellow-400 rounded-full -ml-1.5 mt-1.5"
              initial={{ scale: 0 }}
              animate={{ scale: hoveredJob === job.id ? 1.5 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page;