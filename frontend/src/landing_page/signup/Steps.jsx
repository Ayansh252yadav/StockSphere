import React from "react";
import stepsImg from "../../assets/steps-acopenStockSphere.svg";

const Steps = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-center text-gray-600 mb-16">
        Steps to open a Zerodha account
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
           <img src={stepsImg} alt=""className="w-full max-w-md" />
          </div>
        </div>

        {/* Right Side Steps */}
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="text-2xl font-semibold text-gray-400">01</div>
            <div>
              <h2 className="text-xl font-medium text-gray-800">
                Enter the requested details
              </h2>
              <p className="text-gray-600 mt-2">
                Enter your mobile number, email address, and basic details to
                begin the account opening process.
              </p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex gap-6">
            <div className="text-2xl font-semibold text-gray-400">02</div>
            <div>
              <h2 className="text-xl font-medium text-gray-800">
                Complete eKYC verification
              </h2>
              <p className="text-gray-600 mt-2">
                Verify your identity using PAN, Aadhaar, and OTP-based
                authentication.
              </p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex gap-6">
            <div className="text-2xl font-semibold text-gray-400">03</div>
            <div>
              <h2 className="text-xl font-medium text-gray-800">
                Upload required documents
              </h2>
              <p className="text-gray-600 mt-2">
                Upload PAN card, bank proof, signature, and other required
                documents.
              </p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex gap-6">
            <div className="text-2xl font-semibold text-gray-400">04</div>
            <div>
              <h2 className="text-xl font-medium text-gray-800">
                Start investing
              </h2>
              <p className="text-gray-600 mt-2">
                Once your account is activated, you can start investing and
                trading across various instruments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;