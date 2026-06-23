import React from 'react'
import ecosystem from '../../assets/ecosystem.png'
import { MoveRight } from "lucide-react";
const Stats = () => {
  return (
    <div className='flex items-center justify-center px-35 py-15 gap-16'>
      {/* left */}
      <div className='w-1/2 flex flex-col  justify-center'>
        <h1 className='text-[30px] font-semibold mb-5 text-gray-700'>Trust with confidence</h1>
        <h1 className='text-2xl font-semibold mb-2 text-gray-700'>Customer-first always</h1>
        <p className='max-w-sm leading-7 text-gray-600'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
        <h1 className='text-2xl font-semibold mt-5 mb-2 text-gray-700'>No spam or gimmicks</h1>
        <p className='max-w-sm leading-7 text-gray-600 '>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a
          href="#"
          className="text-blue-500 hover:text-blue-700"
        >
          Our philosophies
        </a></p>
        <h1 className='text-2xl font-semibold mt-5 mb-2 text-gray-700' >The Zerodha universe</h1>
        <p className='max-w-sm leading-7 text-gray-600'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        <h1 className='text-2xl font-semibold mt-5 mb-2 text-gray-700'>Do better with money</h1>
        <p className='max-w-sm leading-7 text-gray-600'>With initiatives like  <a
          href="#"
          className="text-blue-500 hover:text-blue-700"
        >
          Nudge
        </a> and  <a
          href="#"
          className="text-blue-500 hover:text-blue-700"
        >
            Kill switch
          </a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
      </div>
      {/* right */}
      <div className='w-1/2 flex flex-col justify-center'>
        <img src={ecosystem} alt="" />
          <div className="flex gap-10 mt-6">
    <a
      href="#"
      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-[18px]"
    >
      Explore our products
      <MoveRight size={18} />
    </a>

    <a
      href="#"
      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-[18px]"
    >
      Try Kite demo
      <MoveRight size={18} />
    </a>
  </div>
      </div>
    </div>
  )
}

export default Stats
