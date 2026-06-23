import React from 'react'
import dittoLogo from "../../assets/dittoLogo.png";
import streakLogo from "../../assets/streakLogo.png";
import sensibullLogo from "../../assets/sensibullLogo.svg";
import tijori from "../../assets/tijori.svg";
import smallcaseLogo from "../../assets/smallcaseLogo.png";
import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import Button from '@mui/material/Button';
const Universe = () => {
  return (
    <div className='px-30 py-20'>
      <div className='grid place-items-center'>
        <p className='mt-20 mb-20 max-w-lg leading-7 text-xl text-gray-600'>Want to know more about our technology stack? Check out the    <a
      href="#"
      className=" inline-flex items-center gap-2  text-blue-500 hover:text-blue-700"
    >
     StockSphere.tech
    </a> blog.</p>
        <h1 className='font-medium text-gray-700 mb-3 text-[30px]'>The StockSphere Universe</h1>
        <p className='max-w-full leading-7 text-gray-600 text-[18px]'>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16 place-items-center">
  
  <a
    href="https://www.zerodhafundhouse.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center max-w-xs hover:-translate-y-1 transition-transform duration-300"
  >
    <img
      className="w-40 opacity-70 hover:opacity-100 transition-all duration-300"
      src={dittoLogo}
      alt="Ditto"
    />
    <p className="mt-4 text-gray-600 leading-6 max-w-md text-[12px]">
      Our asset management venture that is creating simple and
      transparent index funds to help you save for your goals.
    </p>
  </a>

  <a
    href="https://www.streak.tech/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center max-w-xs hover:-translate-y-1 transition-transform duration-300"
  >
    <img
      className="w-40 opacity-70 hover:opacity-100 transition-all duration-300"
      src={streakLogo}
      alt="Streak"
    />
    <p className="mt-4 text-gray-600 leading-6 max-w-md text-[12px]">
      Systematic trading platform that allows you to create and
      backtest strategies without coding.
    </p>
  </a>

  <a
    href="https://sensibull.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center max-w-xs hover:-translate-y-1 transition-transform duration-300"
  >
    <img
      className="w-40 opacity-70 hover:opacity-100 transition-all duration-300"
      src={sensibullLogo}
      alt="Sensibull"
    />
    <p className="mt-4 text-gray-600 leading-6 max-w-md text-[12px]">
      Options trading platform that lets you create strategies,
      analyze positions, and examine data points like open interest,
      FII/DII, and more.
    </p>
  </a>

  <a
    href="https://www.zerodhafundhouse.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center max-w-xs hover:-translate-y-1 transition-transform duration-300"
  >
    <img
      className="w-40 opacity-70 hover:opacity-100 transition-all duration-300"
      src={zerodhaFundhouse}
      alt="Fund House"
    />
    <p className="mt-4 text-gray-600 leading-6 max-w-md text-[12px]">
      Our asset management venture that is creating simple and
      transparent index funds to help you save for your goals.
    </p>
  </a>

  <a
    href="https://www.smallcase.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center max-w-xs hover:-translate-y-1 transition-transform duration-300"
  >
    <img
      className="w-40 opacity-70 hover:opacity-100 transition-all duration-300"
      src={smallcaseLogo}
      alt="Smallcase"
    />
    <p className="mt-4 text-gray-600 leading-6 max-w-md text-[12px]">
      Thematic investing platform that helps you invest in diversified
      baskets of stocks and ETFs.
    </p>
  </a>
  <a
    href="https://www.smallcase.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center max-w-xs hover:-translate-y-1 transition-transform duration-300"
  >
    <img
      className="w-40 opacity-70 hover:opacity-100 transition-all duration-300"
      src={tijori}
      alt="tijori"
    />
    <p className="mt-4 text-gray-600 leading-6 max-w-md text-[12px]">
    Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

    </p>
  </a>
 
</div>
<div className='mt-20 flex items-center justify-center'>
   <Button variant="contained" >
    Sign up for free
  </Button>
</div>
    </div>
  )
}

export default Universe
