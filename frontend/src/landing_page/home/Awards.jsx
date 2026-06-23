import React from 'react'
import largestBroker from "../../assets/largestBroker.svg";
import pressLogos from "../../assets/pressLogos.png";
const Awards = () => {
  return (
    <div className='flex items-center justify-center px-30 py-16 gap-16'>
      <div className='w-1/2 flex justify-center'>
        <img src={largestBroker} alt="" />
      </div>
      <div className='w-1/2 flex flex-col justify-center'>
        <h1 className='text-2xl font-semibold mb-4'>Largest stock broker in India</h1>
        <p className='max-w-lg text-gray-600 leading-7 font-medium '>2+ million StockSphere clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
       <div className="grid grid-cols-2 gap-x-12 mt-6">
  <ul className="list-disc pl-5 space-y-2">
    <li>Futures and options</li>
    <li>Commodity derivatives</li>
    <li>Currency derivatives</li>
  </ul>

  <ul className="list-disc pl-5 space-y-2">
    <li>Stocks & IPOs</li>
    <li>Direct mutual funds</li>
    <li>Bonds and Govt. Securities</li>
  </ul>
</div>
<img className='mt-5 w-130' src={pressLogos} alt="" />
      </div>
    </div>
  )
}

export default Awards
