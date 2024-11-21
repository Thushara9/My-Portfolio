import React from 'react'
import { assets } from '../assets/assets'
assets

const Work = () => {

  return (
    <div className='max-w-[1200px] mx-auto  p-5'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 text-center  font-bold text-white'>Projects</p>
        <p className='text-gray-400 text-center text-lg'>Check out some of my recent work</p>
      </div>


      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


        <div className='transform transition-transform duration-300 h over:scale-105 overflow-hidden
                    shadow-lg shadow-black group container rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative'>

          <img src={assets.Technova} layout="fill" objectFit="cover" alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className=' text-2xl font-bold text-white tracking-wider'>Project 1</span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/Thushara9/TechNova---MERN'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source Code</button>

              </a>
            </div>

          </div>
        </div>


        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                    shadow-lg shadow-black group container rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative'>

          <img src={assets.LARAVEL_CRUD} layout="fill" objectFit="cover" alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className=' text-2xl font-bold text-white tracking-wider'>Project 2</span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/Thushara9/BookApp'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source Code</button>

              </a>
            </div>

          </div>
        </div>

        
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                    shadow-lg shadow-black group container rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative'>

          <img src={assets.Cake_Shop} layout="fill" objectFit="cover" alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className=' text-2xl font-bold text-white tracking-wider'>Project 3</span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/Thushara9/New_Lanka_Cake_Shop'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source Code</button>

              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Work