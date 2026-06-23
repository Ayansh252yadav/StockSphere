import React from 'react'

const CommodityTab = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-8">
  <table className="w-full border border-gray-300 border-collapse text-gray-700">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-4 text-left"></th>
        <th className="border border-gray-300 p-4 text-left">
          Commodity Futures
        </th>
        <th className="border border-gray-300 p-4 text-left">
          Commodity Options
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Brokerage
        </td>
        <td className="border border-gray-300 p-4">
          0.03% or ₹20/executed order whichever is lower
        </td>
        <td className="border border-gray-300 p-4">
          ₹20/executed order
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          STT/CTT
        </td>
        <td className="border border-gray-300 p-4">
          0.01% on sell side (Non-Agri)
        </td>
        <td className="border border-gray-300 p-4">
          0.05% on sell side
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Transaction Charges
        </td>
        <td className="border border-gray-300 p-4">
          MCX: 0.0021%
          <br />
          NSE: 0.0001%
        </td>
        <td className="border border-gray-300 p-4">
          MCX: 0.0418%
          <br />
          NSE: 0.001%
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          GST
        </td>
        <td className="border border-gray-300 p-4">
          18% on (brokerage + SEBI charges + transaction charges)
        </td>
        <td className="border border-gray-300 p-4">
          18% on (brokerage + SEBI charges + transaction charges)
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          SEBI Charges
        </td>
        <td className="border border-gray-300 p-4">
          Agri:
          <br />
          ₹1 / crore
          <br />
          Non-agri:
          <br />
          ₹10 / crore
        </td>
        <td className="border border-gray-300 p-4">
          ₹10 / crore
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Stamp Charges
        </td>
        <td className="border border-gray-300 p-4">
          0.002% or ₹200 / crore on buy side
        </td>
        <td className="border border-gray-300 p-4">
          0.003% or ₹300 / crore on buy side
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default CommodityTab
