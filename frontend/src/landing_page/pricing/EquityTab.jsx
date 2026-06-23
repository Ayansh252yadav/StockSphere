import React from 'react'

const EquityTab = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-8">
  <table className="w-full border border-gray-300 border-collapse text-gray-700">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-4 text-left"></th>
        <th className="border border-gray-300 p-4 text-left">
          Equity Delivery
        </th>
        <th className="border border-gray-300 p-4 text-left">
          Equity Intraday
        </th>
        <th className="border border-gray-300 p-4 text-left">
          F&O - Futures
        </th>
        <th className="border border-gray-300 p-4 text-left">
          F&O - Options
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Brokerage
        </td>
        <td className="border border-gray-300 p-4">
          Zero Brokerage
        </td>
        <td className="border border-gray-300 p-4">
          0.03% or ₹20/executed order whichever is lower
        </td>
        <td className="border border-gray-300 p-4">
          0.03% or ₹20/executed order whichever is lower
        </td>
        <td className="border border-gray-300 p-4">
          Flat ₹20 per executed order
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          STT/CTT
        </td>
        <td className="border border-gray-300 p-4">
          0.1% on buy & sell
        </td>
        <td className="border border-gray-300 p-4">
          0.025% on the sell side
        </td>
        <td className="border border-gray-300 p-4">
          0.05% on the sell side
        </td>
        <td className="border border-gray-300 p-4">
          0.15% of the intrinsic value on options that are bought and exercised
          <br />
          <br />
          0.15% on sell side (on premium)
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Transaction Charges
        </td>
        <td className="border border-gray-300 p-4">
          NSE: 0.00307%
          <br />
          BSE: 0.00375%
        </td>
        <td className="border border-gray-300 p-4">
          NSE: 0.00307%
          <br />
          BSE: 0.00375%
        </td>
        <td className="border border-gray-300 p-4">
          NSE: 0.00183%
          <br />
          BSE: 0
        </td>
        <td className="border border-gray-300 p-4">
          NSE: 0.03553% (on premium)
          <br />
          BSE: 0.0325% (on premium)
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
        <td className="border border-gray-300 p-4">₹10 / crore</td>
        <td className="border border-gray-300 p-4">₹10 / crore</td>
        <td className="border border-gray-300 p-4">₹10 / crore</td>
        <td className="border border-gray-300 p-4">₹10 / crore</td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Stamp Charges
        </td>
        <td className="border border-gray-300 p-4">
          0.015% or ₹1500 / crore on buy side
        </td>
        <td className="border border-gray-300 p-4">
          0.003% or ₹300 / crore on buy side
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

export default EquityTab
