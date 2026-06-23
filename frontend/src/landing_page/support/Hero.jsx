import React from "react";
import Button from "@mui/material/Button";
import { RiSearchLine } from "@remixicon/react";

const Hero = () => {
  return (
    <div className="bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Top Row */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold text-gray-700">
            Support Portal
          </h1>

          <Button variant="contained">
            My Ticket
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mt-8 max-w-7xl">
          <RiSearchLine
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={22}
          />

          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            className="w-full rounded-md border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;