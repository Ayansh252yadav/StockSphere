import React from "react";
import benefitsImg from "../../assets/acop-benefits.svg";
const Bebefits = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-center text-gray-600 mb-16">
        Benefits of opening a Zerodha demat account
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
           
          <img
            src={benefitsImg}
            alt="Benefits"
            className="w-full max-w-lg"
          />
          </div>

        </div>

        {/* Right Side Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-600">
              Unbeatable pricing
            </h2>
            <p className="text-gray-600 mt-3 leading-7">
              Zero charges for equity delivery investments and direct mutual
              funds. Flat ₹20 per executed order for intraday and F&O trades.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-600">
              Seamless investing experience
            </h2>
            <p className="text-gray-600 mt-3 leading-7">
              Invest in stocks, mutual funds, IPOs, ETFs, and bonds through a
              single powerful platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-600">
              Advanced trading platforms
            </h2>
            <p className="text-gray-600 mt-3 leading-7">
              Access modern web and mobile applications designed for speed,
              reliability, and ease of use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-600">
              Secure and trusted
            </h2>
            <p className="text-gray-600 mt-3 leading-7">
              Trusted by millions of investors with secure account management
              and industry-standard protection measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bebefits;