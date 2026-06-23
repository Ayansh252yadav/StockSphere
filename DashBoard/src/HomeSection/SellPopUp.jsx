import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const SellPopUp = ({ stock, onClose }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock?.price || 0);
  const [holdingsQty, setHoldingsQty] = useState(0);
const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
  if (!stock?.name) return;   

  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`${API_URL}/holdings`);

      const found = res.data.find(h => h.name === stock.name);
      setHoldingsQty(found ? found.qty : 0);

    } catch (err) {
      console.log(err);
    }
  };

  fetchHoldings();
}, [stock]);


  const handleSell = async () => {
    try {
      if (stockQuantity > holdingsQty) {
        alert("You don't have enough shares!");
        return;
      }

      await axios.post(`${API_URL}/newOrder`, {
        name: stock.name,
        qty: stockQuantity,
        price: stock.price,
        mode: "Sell",
      });

      alert("Sell Order Placed Successfully!");
      onClose();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">

      <div className="w-96 bg-white rounded-xl shadow-2xl overflow-hidden">

        <div className="bg-orange-500 text-white p-4">
          <h2 className="text-lg font-bold">
            {stock?.name || "RELIANCE"}
          </h2>
          <p className="text-sm">NSE • SELL ORDER</p>
        </div>

        {/* FORM */}
        <div className="p-5 flex flex-col gap-4">

          <div className="text-sm text-gray-600">
            You own: <span className="font-bold text-black">{holdingsQty}</span> shares
          </div>

          <TextField
            label="Qty"
            type="number"
            size="small"
            value={stockQuantity}
            onChange={(e) => {
              const qty = Number(e.target.value);
              setStockQuantity(qty);
              setStockPrice(qty * (stock?.price || 0));
            }}
            fullWidth
          />

          <TextField
            label="Price"
            type="number"
            size="small"
            value={stockPrice}
            disabled
            fullWidth
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm text-gray-600">
              Intraday
            </span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t p-4 bg-gray-50">

          <p className="text-sm text-gray-600 mb-3">
            Total Value: ₹{stockPrice}
          </p>

          {/* SELL BUTTON (ORANGE) */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mb: 1,
              backgroundColor: "orange",
              "&:hover": { backgroundColor: "#e69500" }
            }}
            onClick={handleSell}
          >
            SELL
          </Button>

          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>

      </div>
    </div>
  );
};

export default SellPopUp;