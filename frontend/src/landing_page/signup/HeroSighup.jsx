import React, { useState } from "react";
import sighUp from "../../assets/account_openSighUp.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HeroSighup = () => {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ mobileNumber, setMobileNumber ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ response, setResponse ] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL;
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/signup`, {
        email,
        username,
        mobileNumber,
        password,
      },
     {
    withCredentials: true,
  });
      if (res.data.success) {
        setResponse("Signup successful");
       window.location.href = `${DASHBOARD_URL}/?username=${encodeURIComponent(
  res.data.user.username
)}`;
      } else {
        setResponse(res.data.message);
      }
    } catch (err) {
      console.error("Signup Error:", err);
    }
  };

  return (
    <div className="mt-24 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="grid place-items-center text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-600">
          Open a free demat and trading account online
        </h1>

        <p className="text-lg text-gray-600 mt-4">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-lg"
            src={sighUp}
            alt="Signup Illustration"
          />
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSignUp}>
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-semibold text-gray-600">
              Signup Now
            </h2>

            <p className="text-gray-500 mt-2 mb-8">
              Or track your existing application
            </p>

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>
              {response && (
                <p className="text-red-500 text-sm">
                  {response}
                </p>
              )}
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 cursor-pointer rounded-lg font-medium hover:bg-blue-700 transition active:scale-95 "
              >
                Create Account
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-5 text-center">
              By proceeding, you agree to the Terms & Conditions and Privacy
              Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSighup;