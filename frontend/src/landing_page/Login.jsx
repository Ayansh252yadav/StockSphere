import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
const API_URL = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        setResponse("Login successful");
        window.location.href = `http://localhost:5174/?username=${encodeURIComponent(
          res.data.user.username
        )}`;
      } else {
        setResponse(res.data.message);
      }
    } catch (err) {
      console.error("Login Error:", err);
      setResponse("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mt-24 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="grid place-items-center text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-600">
          Login to your account
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Welcome back! Access your portfolio and continue trading.
        </p>
      </div>

      {/* Form */}
      <div className="grid place-items-center">
        <form onSubmit={handleLogin} className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-semibold text-gray-600">Login</h2>
            <p className="text-gray-500 mt-2 mb-8">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>

            <div className="space-y-5">
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

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Error/Success Message */}
              {response && (
                <p className="text-red-500 text-sm">{response}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 cursor-pointer rounded-lg font-medium hover:bg-blue-700 transition active:scale-95"
              >
                Login
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

export default Login;