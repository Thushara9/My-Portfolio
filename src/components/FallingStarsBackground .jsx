import React from 'react';
import { motion } from 'framer-motion';

// Function to generate random star properties
const generateRandomStarProps = () => {
  const size = Math.random() * 2 + 1; // Random size between 2px and 5px
  const duration = Math.random() * 3 + 2; // Random fall duration between 2 and 5 seconds
  const delay = Math.random() * 2; // Random delay for when the star starts falling
  const trajectory = -(Math.random() * 100 + 50); // Horizontal movement in the left direction (negative values)
  const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
  return { size, duration, delay, trajectory, opacity };
};

const Star = () => {
  const { size, duration, delay, trajectory, opacity } = generateRandomStarProps();

  return (
    <motion.div
      className="absolute bg-white rounded-full shadow-md"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: '-10%', // Start above the screen
        left: `${Math.random() * 100}%`, // Random horizontal start
      }}
      animate={{
        top: '110%', // Fall below the screen
        x: trajectory, // Move to the left as it falls
        opacity: [opacity, 0.8, 0], // Fade out as it falls
      }}
      transition={{
        duration: duration, // Set the random duration for fall speed
        ease: 'linear',
        delay: delay, // Random delay before the star starts falling
        repeat: Infinity, // Loop the falling animation
      }}
    />
  );
};

const FallingStarsBackground = () => {
  const starCount = 80; // Number of falling stars

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800">
      {/* Render Falling Stars */}
      {[...Array(starCount)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};

export default FallingStarsBackground;
