import React, { useEffect, useState } from "react";
import { Clock, Briefcase } from "lucide-react";
import axios from "axios";

const Summary = () => {
  const [userName, setUserName] = useState("");

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/me",
        {
          withCredentials: true,
        }
      );

      setUserName(res.data.username);
      console.log(userName);
    } catch (err) {
      console.log(err);
    }
  };

  fetchUser();
}, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-light text-gray-800 mb-8">
        Hi, {userName || "Loading..."}!
      </h1>

      <p className="border border-gray-300"></p>

      <div>
        {/* Equity */}
        <div className="mt-20">
          <div className="flex items-center gap-2 pb-3">
            <Clock size={15} />
            <span className="font-medium">Equity</span>
          </div>

          <div className="flex gap-40">
            <div className="py-6">
              <h1 className="text-5xl font-light">3.74k</h1>
              <p className="text-gray-500 mt-2">Margin available</p>
            </div>

            <span className="border border-gray-200"></span>

            <div className="pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Margin used</span>
                <span>0</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Opening balance &nbsp;
                </span>
                <span>3.74k</span>
              </div>
            </div>
          </div>
        </div>

        <p className="border border-gray-300 mt-10"></p>

        {/* Holdings */}
        <div className="mt-10">
          <div className="flex items-center gap-2 pb-3">
            <Briefcase size={18} />
            <span className="font-medium">Holdings (13)</span>
          </div>

          <div className="flex gap-40">
            <div className="py-6">
              <div className="flex items-end gap-3">
                <h1 className="text-5xl text-green-600 font-light">
                  1.55k
                </h1>

                <span className="text-green-600 font-medium">
                  +5.20%
                </span>
              </div>

              <p className="text-gray-500 mt-2">P&amp;L</p>
            </div>

            <span className="border border-gray-200"></span>

            <div className="pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Current value &nbsp;
                </span>
                <span>31.43k</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Investment</span>
                <span>29.88k</span>
              </div>
            </div>
          </div>
        </div>

        <p className="border border-gray-300 mt-10"></p>
      </div>
    </div>
  );
};

export default Summary;