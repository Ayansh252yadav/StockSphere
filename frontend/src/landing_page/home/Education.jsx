import React from 'react'
import education from "../../assets/education.svg";
import { MoveRight } from 'lucide-react';
const Education = () => {
  return (
    <div className='flex items-center gap-1 px-35 py-15'>
     <div className='w-1/2'>
      <img src={education} alt="" />
     </div>
     <div className='w-1/2'>
      <h1 className='text-[30px] font-semibold mb-5 text-gray-600'>Free and open market education</h1>
      <p className='max-w-lg leading-7 text-gray-600'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a
      href="#"
      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-[18px]  mt-3 mb-5"
    >
     Varsity 
      <MoveRight size={18} />
    </a>
    <p className='max-w-lg leading-7 text-gray-600'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
      <a
      href="#"
      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-[18px]  mt-3"
    >
     TradingQ&A 
      <MoveRight size={18} />
    </a>
     </div>
    </div>
  )
}

export default Education
