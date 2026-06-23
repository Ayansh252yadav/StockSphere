import React, { useState } from "react";
import { RiSearchLine } from "@remixicon/react";
import { Tooltip } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { DroughnutChart } from "./DroughnutChart";

const WatchList = ({ setShowBuyPopup, setShowSellPopup, setSelectedStock }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ filter stocks
  const filteredStocks = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ labels inside component (FIXED)
  const labels = watchlist.map((stock) => stock.name);

  // ✅ chart data FIXED
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full px-3">
      {/* SEARCH BAR */}
      <div className="relative w-full">
        <RiSearchLine
          size={12}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search (INFY, NIFTY, etc)"
          className="w-full border border-gray-400 pl-10 pr-16 py-2 outline-none placeholder:text-xs"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
          {watchlist.length}/50
        </span>
      </div>

      {/* LIST */}
      <ul>
        {filteredStocks.map((stock, idx) => (
          <WatchlistItem
            key={idx}
            stock={stock}
            setShowBuyPopup={setShowBuyPopup}
            setShowSellPopup={setShowSellPopup}
            setSelectedStock={setSelectedStock}
          />
        ))}
      </ul>

      {/* CHART */}
      <DroughnutChart data={data} />
    </div>
  );
};

export default WatchList;

/* ---------------- WATCHLIST ITEM ---------------- */

const WatchlistItem = ({
  stock,
  setShowBuyPopup,
  setShowSellPopup,
  setSelectedStock,
}) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className="flex justify-between items-center px-4 border-b py-2 hover:bg-gray-100"
    >
      {/* NAME */}
      <p className={stock.isDown ? "text-red-500" : "text-green-500"}>
        {stock.name}
      </p>

      {/* PRICE + % */}
      <div className="flex items-center gap-4">
        <span>{stock.percent}</span>

        {stock.isDown ? (
          <KeyboardArrowDownIcon fontSize="small" />
        ) : (
          <KeyboardArrowUpIcon fontSize="small" />
        )}

        <span className={stock.isDown ? "text-red-500" : "text-green-500"}>
          {stock.price}
        </span>
      </div>

      {/* ACTIONS */}
      {showActions && (
        <WatchListAction
          stock={stock}
          setSelectedStock={setSelectedStock}
          setShowBuyPopup={setShowBuyPopup}
          setShowSellPopup={setShowSellPopup}
        />
      )}
    </li>
  );
};

/* ---------------- ACTION BUTTONS ---------------- */

const WatchListAction = ({
  stock,
  setSelectedStock,
  setShowSellPopup,
  setShowBuyPopup,
}) => {
  return (
    <div className="flex items-center gap-1">
      <Tooltip title="Buy">
        <button
          onClick={() => {
            setSelectedStock(stock);
            setShowBuyPopup(true);
          }}
          className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
        >
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell">
        <button
          onClick={() => {
            setSelectedStock(stock);
            setShowSellPopup(true);
          }}
          className="bg-red-600 text-white px-2 py-1 rounded text-xs"
        >
          S
        </button>
      </Tooltip>

      <Tooltip title="Analytics">
        <button className="px-2">
          <BarChartOutlinedIcon fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More">
        <button className="border px-2 py-1 rounded text-xs">⋯</button>
      </Tooltip>
    </div>
  );
};