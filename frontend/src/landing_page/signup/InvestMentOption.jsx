import React from "react";
import image1 from '../../assets/stocks-Option1.svg'
import image2 from '../../assets/mf-acopOption2.svg'
import image3 from '../../assets/ipo-acopOption3.svg'
import image4 from '../../assets/fo-acopOption4.svg'
const InvestMentOption = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-16">
        Investment options with StockSphere demat account
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Stocks */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24  rounded-lg flex items-center justify-center">
           <img className="bg-cover" src={image1} alt="" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Stocks
            </h2>
            <p className="text-gray-600 mt-2">
              Invest in all exchange-listed securities.
            </p>
          </div>
        </div>

        {/* Mutual Funds */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-lg flex items-center justify-center">
           <img className='bg-cover' src={image2} alt="" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Mutual Funds
            </h2>
            <p className="text-gray-600 mt-2">
              Invest in commission-free direct mutual funds.
            </p>
          </div>
        </div>

        {/* IPO */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-lg flex items-center justify-center">
           <img src={image3} alt="" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              IPO
            </h2>
            <p className="text-gray-600 mt-2">
              Apply to public issues instantly from your account.
            </p>
          </div>
        </div>

        {/* Futures & Options */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-lg flex items-center justify-center">
            <img src={image4} alt="" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Futures & Options
            </h2>
            <p className="text-gray-600 mt-2">
              Trade derivatives on stocks and indices.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded">
          Explore Investments
        </button>
      </div>
    </div>
  );
};

export default InvestMentOption;