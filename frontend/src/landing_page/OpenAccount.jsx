import React from 'react'
import Button from '@mui/material/Button';

const OpenAccount = () => {
  return (
    <div className="flex flex-col items-center text-center py-20">
      <h1 className="text-3xl font-[10px] text-gray-800 mb-4">
        Open a StockSphere account
      </h1>

      <p className="text-gray-600 max-w-2xl mb-8">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
   <a href="/signup">
   <Button variant="contained" >
        Sign up for free
      </Button>
</a>
    
    </div>
  );
};

export default OpenAccount;