import React from 'react'
import { MoveRight } from 'lucide-react'
const Hero = () => {
  return (
    <div className='mt-40'>
      <div className='grid place-items-center'>
        <h1  className='font-medium text-gray-600 mb-3 text-[30px]'>StockSphere Products</h1>
        <p className='max-w-lg leading-7 text-gray-600 text-[20px] mb-3'>Sleek, modern, and intuitive trading platforms</p>
        <p className='max-w-lg leading-7 text-gray-600 text-[15px] mb-3 '>Check out our  &nbsp;
            <a
      href="#"
      className=" inline-flex items-center gap-2  text-blue-500 hover:text-blue-700"
    >
      investment offerings
      <MoveRight size={18} />
    </a>
    </p>
     <div className="w-full px-10 mt-10">
  <hr className="border-t border-gray-200" />
</div>
      </div>
    </div>
  )
}

export default Hero
