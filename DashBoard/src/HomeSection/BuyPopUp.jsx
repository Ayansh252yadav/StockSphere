import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const BuyPopUp = ({ stock, onClose }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock?.price || 0);

  const handleButtonBuyClick = async () => {
    try {
      const res = await axios.post("http://localhost:8080/newOrder", {
        name: stock.name,
        qty: Number(stockQuantity),
        price: Number(stockQuantity) * Number(stock.price),
        mode: "Buy",
      });

      console.log("Order placed:", res.data);
      onClose();
    } catch (err) {
      console.error("Order failed:", err);
    }
  };


  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
      <div className="w-96 bg-white rounded shadow-xl">

        {/* Header */}
        <div className="bg-blue-500 text-white p-4">
          <h2 className="text-lg font-medium">
            {stock?.name || "RELIANCE"}
          </h2>
          <p className="text-sm">NSE</p>
        </div>

        {/* Form */}
        <div className="p-4 flex flex-col gap-4">

          <TextField
            label="Qty."
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

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">

          <p className="text-sm text-gray-600 mb-3">
            Margin required ₹{stockPrice}
          </p>

          <Button
            variant="contained"
            fullWidth
            sx={{ mb: 1 }}
            onClick={handleButtonBuyClick}
          >
            Buy
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

export default BuyPopUp;