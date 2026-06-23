import React from 'react'
import pricingImage1 from "../../assets/pricing-eqSelf0Free.svg";
import pricingImage2 from "../../assets/other-tradesSelf20.svg";
import pricingImage3 from "../../assets/pricing-eqself0.svg";
import { MoveRight } from 'lucide-react';
const pricing = () => {
  return (
    <div className='flex items-center gap-1 px-35 py-15'>
       <div className="w-[40%]">
        <h1 className="text-[30px] font-semibold mb-5 text-gray-700">
          Unbeatable pricing
        </h1>
        <p className="max-w-sm leading-7 text-gray-700">
          We pioneered the concept of discount broking and price transparency
          in India. Flat fees and no hidden charges.
        </p>
         <a
      href="#"
      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-[18px]  mt-8"
    >
      See pricing 
      <MoveRight size={18} />
    </a>
      </div>
 {/* Right Content */}
    <div>
    <div className="flex flex-wrap px-2 py-5">

  <div className="flex items-center ">
    <img className="h-25 w-50" src={pricingImage1} alt="" />
  <p className="text-[11px] text-gray-600 leading-4 w-20 ">
  Free account <br />
  opening
</p>
  </div>

  <div className="flex items-center -space-x-1">
    <img className="h-25 w-50" src={pricingImage3} alt="" />
    <p className="text-[11px] text-gray-600">Free equity delivery <br/>
and direct mutual funds</p>
  </div>

  <div className="flex items-center -space-x-1">
    <img className="h-25 w-50" src={pricingImage2} alt="" />
    <p className=" text-[11px] text-gray-600">Intraday and F&O</p>
  </div>

</div>
</div>
    </div>
   
  )
}

export default pricing
