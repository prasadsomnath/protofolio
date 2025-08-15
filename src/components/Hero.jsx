import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
      aria-label="Introduction / hero section"
    >
      {/* Background floating shapes */}
      <motion.div
        aria-hidden="true"
        className="absolute top-10 left-10 w-24 h-24 bg-primary rounded-full opacity-20 animate-float"
        style={{ filter: 'blur(30px)' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary rounded-full opacity-15 animate-float"
        style={{ filter: 'blur(40px)' }}
        transition={{ delay: 1 }}
      />

      {/* Profile image */}
      <motion.img
        src={profilePic}
        alt="Profile Photo"
        className="w-40 h-40 rounded-full border-4 border-primary mb-6"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold mb-3 dark:text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Hi, I&apos;m <span className="text-primary">PRASAD SOMNATH</span> <span aria-hidden="true">👋</span>
      </motion.h1>

      <motion.p
        className="text-xl mb-8 dark:text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <b>Full-stack developer / Software Engineer</b>
      </motion.p>

      <motion.div
        className="flex space-x-6 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="#projects"
          className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          View Projects 🔍
        </a>
        <a
          href="#contact"
          className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Contact Me 📩
        </a>
      </motion.div>
    </section>
  );
}
