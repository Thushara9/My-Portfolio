// src/components/Projects.jsx
import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';  // Import motion

const projects = [
  {
    title: "Electronic Store",
    description: "Brief description of project one.",
    link: "https://github.com/Thushara9/TechNova---MERN",
    image: assets.Technova,
  },
  {
    title: "BOOK APP",
    description: "Brief description of project two.",
    link: "https://github.com/Thushara9/BookApp",
    image: assets.LARAVEL_CRUD,
  },
  {
    title: "WEB BASED CAKE SHOP",
    description: "Brief description of project three.",
    link: "https://github.com/Thushara9/New_Lanka_Cake_Shop",
    image: assets.Cake_Shop,
  },
  // Add more projects as needed
];

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <motion.div
      className="border rounded-lg shadow-lg overflow-hidden border-purple-400 bg-gray-900 group"
      initial={{ opacity: 0, y: 40 }}  // Initial state for the card
      whileInView={{ opacity: 1, y: 0 }}  // Trigger animation when in view
      viewport={{ once: true }}  // Ensure it only triggers the animation once
      transition={{ duration: 2 }}  // Smooth transition duration
    >
      {/* Image with Hover Effect */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition duration-500 transform group-hover:scale-105 bg-gradient-to-t from-black to-transparent group-hover:opacity-70"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
       
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      {/* Animated Heading */}
      <motion.h2
        className="text-white text-4xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: -20 }} // Initial state: hidden and slightly moved up
        whileInView={{ opacity: 1, y: 0 }} // When in view, animate to visible and normal position
        viewport={{ once: true }} // Ensure animation happens only once
        transition={{ duration: 1 }} // Smooth transition
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
