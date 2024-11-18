import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <nav className="shadow-md bg-black backdrop-blur-lg bg-opacity-50 fixed w-full z-10">
      <div className="flex justify-between items-center px-8 h-20">
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-gray-200">
            THUSHARA
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <AnchorLink href="#home" className="text-gray-200 hover:text-gray-600">
            Home
          </AnchorLink>
          <AnchorLink href="#about" className="text-gray-200 hover:text-gray-600">
            About
          </AnchorLink>
          <AnchorLink href="#skills" className="text-gray-200 hover:text-gray-600">
            Skills
          </AnchorLink>
          <AnchorLink href="#projects" className="text-gray-200 hover:text-gray-600">
            Projects
          </AnchorLink>
          <AnchorLink href="#contact" className="text-gray-200 hover:text-gray-600">
            Contact
          </AnchorLink>
        </div>
        <div>
          <AnchorLink href="#contact">
            <button className="bg-purple-400 text-white font-semibold px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition duration-300 hover:scale-105 max-[766px]:hidden">
              Contact
            </button>
          </AnchorLink>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <AnchorLink
              href="#home"
              className="text-gray-800 hover:text-gray-600 block"
              onClick={handleLinkClick} // Close menu on click
            >
              Home
            </AnchorLink>
            <AnchorLink
              href="#about"
              className="text-gray-800 hover:text-gray-600 block"
              onClick={handleLinkClick}
            >
              About
            </AnchorLink>
            <AnchorLink
              href="#skills"
              className="text-gray-800 hover:text-gray-600 block"
              onClick={handleLinkClick}
            >
              Skills
            </AnchorLink>
            <AnchorLink
              href="#projects"
              className="text-gray-800 hover:text-gray-600 block"
              onClick={handleLinkClick}
            >
              Projects
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className="text-gray-800 hover:text-gray-600 block"
              onClick={handleLinkClick}
            >
              Contact
            </AnchorLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
