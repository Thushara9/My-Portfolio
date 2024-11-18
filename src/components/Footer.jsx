import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
    return (

        <footer className='bg-black px-4 md:px-16 lg:px-28 py-8'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                <div>
                    <h1 className='text-white text-lg font-bold mb-4'>About Me</h1>

                    <p className='text-gray-300'>I’m a passionate fullstack developer with a focus on building scalable web applications using the MERN stack. I love solving complex problems and creating intuitive user experiences.</p>
                </div>
                <div>

                    <h1 className='text-white text-lg font-bold mb-4'>Quick Links</h1>
                    <ul>
                        <li>
                            <AnchorLink href="#home" className="text-gray-300 hover:underline">
                                Home
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#about" className="text-gray-300 hover:underline">
                                About
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#skills" className="text-gray-300 hover:underline">
                                Skills
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#projects" className="text-gray-300 hover:underline">
                                Projects
                            </AnchorLink>
                        </li>

                        <li>
                            <AnchorLink href="#contact" className="text-gray-300 hover:underline">
                                Contact
                            </AnchorLink>
                        </li>
                    </ul>
                </div>
                <div>

                    <h1 className='text-white text-lg font-bold mb-4'>Follow Me</h1>

                    <ul className='flex space-x-4'>
                        <li> <FaSquareFacebook className='text-blue-600' /><a href="" className='text-gray-300 hover:underline'>Facebook</a></li>
                        <li> <FaInstagram className='text-pink-600' /><a href="" className='text-gray-300 hover:underline'>Instagram</a></li>
                        

                    </ul>
                </div>

            </div>
            <div className='border-t border-gray-600 text-gray-300 pt-6 text-center mt-6'>
                <p> © 2024 code with Thushara. All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer