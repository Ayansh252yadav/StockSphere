import React from 'react'
import pricingImage1 from "../../assets/pricing-eqSelf0Free.svg";
import pricingImage2 from "../../assets/other-tradesSelf20.svg";
import pricingImage3 from "../../assets/pricing-eqself0.svg";
const Hero = () => {
  return (
  <div>
      <div className='mt-35 flex flex-col items-center justify-center'>
      <h1 className='block text-[30px]  text-gray-700 font-stretch-extra-expanded' >Charges</h1>
      <p className='max-w-lg leading-7 text-[20px] text-gray-400'>List of all charges and taxes</p>
    </div>
   <div className="grid grid-cols-3  place-items-start  px-40 py-20 ml-20">
  <div className="flex flex-col items-center text-center">
    <img className="h-56 w-56 object-contain" src={pricingImage1} alt="" />
    <h2 className="mt-4 text-2xl font-thin-[700] text-gray-600">
      Free equity delivery
    </h2>
    <p className="mt-3 max-w-xs text-gray-500 leading-7">
      All equity delivery investments (NSE, BSE) are absolutely free — ₹0
      brokerage.
    </p>
  </div>

  <div className="flex flex-col items-center text-center">
    <img className="h-56 w-56 object-contain" src={pricingImage2} alt="" />
    <h2 className="mt-4  font-thin-[700] text-2xl  text-gray-600">
      Intraday and F&O trades
    </h2>
    <p className="mt-3 max-w-xs text-gray-500 leading-7">
      Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
      trades across equity, currency, and commodity segments. Flat ₹20 on all
      option trades.
    </p>
  </div>

  <div className="flex flex-col items-center text-center">
    <img className="h-56 w-56 object-contain" src={pricingImage3} alt="" />
    <h2 className="mt-4 text-2xl font-thin-[700]  text-gray-600">
      Free direct MF
    </h2>
    <p className="mt-3 max-w-xs text-gray-500 leading-7">
      All direct mutual fund investments are absolutely free — ₹0 commissions
      and DP charges.
    </p>
  </div>
</div>
  </div>
  )
}

export default Hero
