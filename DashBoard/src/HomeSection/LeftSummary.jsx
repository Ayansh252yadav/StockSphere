import React, { useState } from 'react';
import WatchList from './WatchList';
import BuyPopUp from './BuyPopUp';
import SellPopUp from './SellPopUp';

const LeftSummary = () => {
  const [showBuyPopup, setShowBuyPopup] = useState(false);
  const [showSellPopup, setShowSellPopup] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  return (
    <div className='w-full'>

      {/* HEADER */}
      <div className='flex justify-between'>
        <div className='flex gap-6'>
          <h1>Nifty 50</h1>
          <h1 className='text-red-500'>100.2</h1>
        </div>

        <div className='flex gap-6'>
          <h1>SENSEX</h1>
          <h1 className='text-red-500'>100.2</h1>
        </div>
      </div>

      <div className='border border-gray-200 mt-5'></div>

      {/* WATCHLIST */}
      <WatchList
        setShowBuyPopup={setShowBuyPopup}
        setShowSellPopup={setShowSellPopup}   
        setSelectedStock={setSelectedStock}
      />

      {/* BUY POPUP */}
      {showBuyPopup && (
        <BuyPopUp
          stock={selectedStock}
          onClose={() => setShowBuyPopup(false)}
        />
      )}

      {/* SELL POPUP */}
      {showSellPopup && (
        <SellPopUp
          stock={selectedStock}
          onClose={() => setShowSellPopup(false)}
        />
      )}

    </div>
  );
};

export default LeftSummary;