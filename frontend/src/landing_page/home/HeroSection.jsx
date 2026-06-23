import React from 'react';
import homeHero from "../../assets/homeHero.png";
import Button from '@mui/material/Button';
const HeroSection = () => {
  return (
    <div>
      <div className='flex justify-center items-center p-24'>
        <img className='h-100 w-4xl ' src={homeHero} alt="Hero" />
      </div>
      <div className="flex flex-col items-center text-center gap-4 mt-0 mb-12">
  <h1 className="text-3xl font-medium text-gray-800">
    Invest in everything
  </h1>

  <p className="text-gray-600 font-medium text-2xl mb-5">
    Online platform to invest in stocks, derivatives, mutual funds,
    ETFs, bonds, and more.
  </p>

  <Button variant="contained" className='hello'>
    Sign up for free
  </Button>
</div>
    </div>
  );
};

export default HeroSection;