import React from "react";
import LeftSectionNav from "./LeftSectionNav";
import LeftSummary from "./LeftSummary";
import { Outlet } from "react-router-dom";

const LeftandRightHome = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* LEFT */}
      <div className="hidden md:block md:w-1/3 border-r bg-white p-6 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
        <LeftSummary />
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-2/3 bg-gray-50 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
        <LeftSectionNav />
        <Outlet />
      </div>

    </div>
  );
};

export default LeftandRightHome;