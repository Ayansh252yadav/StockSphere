import React from 'react'
import user from "../../assets/user.jpg";
const Team = () => {
  return (
    <div className='px-30 py-15'>
      <div className='flex items-center justify-center'>
          <h1 className='text-[30px] text-gray-700 font-mono'>People</h1>
      </div>
      <div className='flex justify-between gap-12 px-10 py-20'>
         <div className='w-1/2'>
          <img className='w-100 h-100' src={user} alt="" />
          <p className='max-wd-lg leading-7 text-gray-600 text-[20px] px-10'>Ayansh Yadav, Software Engineer</p>
          <p className='max-wd-lg leading-7 text-gray-600 text-[20px] px-10 mt-3'>Founder & Full-Stack Developer</p>
         </div>
        <div className='w-1/2'>
           <p className='max-wd-lg leading-7 text-gray-600 '>Ayansh started building StockSphere as a way to learn and understand how modern stock trading and investment platforms operate. What began as a curiosity-driven project gradually evolved into a full-stack application focused on clean design, performance, and real-world functionality.</p>
         <p  className='max-w-lg leading-7 text-gray-600 mt-5'>Through the development of StockSphere, he explored React, backend development, API integration, responsive design, and software architecture while continuously improving his problem-solving skills through Data Structures and Algorithms.</p>
         <p  className='max-w-lg leading-7 text-gray-600 mt-5'>Beyond coding, Ayansh is passionate about learning new technologies, building impactful products, and tackling challenging programming problems. StockSphere represents both his technical growth and his commitment to creating meaningful user experiences.</p>
          <div className="flex gap-4 mt-6">
    <a href="https://github.com/ayansh252"  target="_blank"
  rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/ayansh-yadav/"  target="_blank"
  rel="noopener noreferrer">LinkedIn</a>
    <a href="https://leetcode.com/Ayansh252yadav/"  target="_blank"
  rel="noopener noreferrer">LeetCode</a>
  </div>
        </div>
      </div>
    </div>
  )
}

export default Team
