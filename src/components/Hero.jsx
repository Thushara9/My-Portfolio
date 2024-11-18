import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TypeAnimation } from 'react-type-animation';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id='home' className='relative h-screen w-full bg-gradient-to-b from-black via-[#171d32] to-[#171d32]'>
      <div className='text-white h-full flex flex-col md:flex-row w-full justify-center md:justify-between items-center md:items-start p-5 md:p-20 z-10'>
        
        {/* Text Section with Animation */}
        <motion.div
          className='w-full md:w-2/4 text-center md:text-left md:pt-10 mt-16'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className='text-2xl sm:text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
            <span className='text-green-300 '>Hello, I'm</span>
          </h1>
          <h1 className='text-2xl sm:text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
            <TypeAnimation
              sequence={[
                'Thushara Perera',
                2000,
                'Fullstack Developer',
                2000,
                'UI/UX Designer',
                2000,
                'FrontEnd Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-sm sm:text-base md:text-2xl tracking-tighter mt-10'>
            I’m a passionate fullstack developer with a focus on building scalable web applications using the MERN stack. I love solving complex problems and creating intuitive user experiences.
          </p>
          <div className='flex mt-5 md:mt-10 justify-center md:justify-start'>
            <AnchorLink href="#contact">
              <button className='bg-purple-400 text-white font-semibold px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition duration-300 hover:scale-105'>
                Contact
              </button>
            </AnchorLink>

            <a
              href={assets.Thushara__CV} // Replace this with the actual path to your PDF file
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 border border-purple-400 text-purple-400 font-semibold px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition duration-300 hover:scale-105 text-center"
            >
              Resume
            </a>
          </div>

          <div className='mt-10 flex justify-center md:justify-start'>
            <a
              href="https://github.com/Thushara9" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 sm:mx-4"
            >
              <FaGithub className='w-6 h-6 sm:w-8 sm:h-8' />
            </a>
            <a
              href="https://www.linkedin.com/in/thushara-perera-413a19194/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className='w-6 h-6 sm:w-8 sm:h-8' />
            </a>
          </div>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          className='w-full md:w-auto flex justify-center items-center md:mr-20 mt-10'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img className='w-2/3 md:w-[400px] sm:w-[300px] rounded-full animate-bump' src={assets.profile_pic} alt="Hero" />
        </motion.div>
        
      </div>
    </div>
  );
}

export default Hero;
