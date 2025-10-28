import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div id='about' className="text-white py-16 sm:py-20 px-4 sm:px-10 lg:px-20 min-h-screen flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 lg:mb-20 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col lg:flex-row max-md:gap-12 lg:gap-40 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-purple-500 shadow-lg">
            <img
              src={assets.developer}
              alt="Profile"
              className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-500"></div>
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition duration-500">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
            Hi, I'm Thushara, a passionate full-stack developer specializing in building responsive web applications. With experience in technologies like React.js, Node.js, Express, and MongoDB, I create seamless, user-friendly digital solutions.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
            My journey into development began with a love for problem-solving and a desire to bring ideas to life through code. I enjoy working on challenging projects, continuously learning, and refining my skills to stay ahead of the curve in this ever-evolving field.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
