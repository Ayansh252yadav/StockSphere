import React, { useEffect, useState } from "react";
import { RiSearchLine } from "@remixicon/react";
import axios from "axios";

const Order = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res =await axios.get(`${API_URL}/allOrders`);
        setAllOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = allOrders.filter((order) =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex mt-10 px-5 items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-700">
          Orders ({filteredOrders.length})
        </h1>

        <div className="relative w-64">
          <RiSearchLine
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="px-5 mt-8">
        <table className="w-full border border-collapse border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-4 text-left text-gray-500">
                Stock
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-500">
                Type
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-500">
                Qty
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-500">
                Price
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-500">
                Total Value
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 text-gray-700">
                    {order.name}
                  </td>

                  <td
                    className={`border border-gray-300 p-4 font-semibold ${
                      order.mode === "Buy"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {order.mode}
                  </td>

                  <td className="border border-gray-300 p-4 text-gray-700">
                    {order.qty}
                  </td>

                  <td className="border border-gray-300 p-4 text-gray-700">
                    ₹{Number(order.price).toFixed(2)}
                  </td>

                  <td className="border border-gray-300 p-4 text-gray-700">
                    ₹{(order.qty * order.price).toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-6 text-gray-500"
                >
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;