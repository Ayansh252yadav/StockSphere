import React from 'react'

const CurrencyTab = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-8">
  <table className="w-full border border-gray-300 border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-4 text-left"></th>
        <th className="border border-gray-300 p-4 text-left">
          Currency Futures
        </th>
        <th className="border border-gray-300 p-4 text-left">
          Currency Options
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
        <td className="border border-gray-300 p-4">No STT</td>
        <td className="border border-gray-300 p-4">No STT</td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Transaction Charges
        </td>
        <td className="border border-gray-300 p-4">
          NSE: 0.00035%
          <br />
          BSE: 0.00045%
        </td>
        <td className="border border-gray-300 p-4">
          NSE: 0.0311%
          <br />
          BSE: 0.001%
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
          0.0001% or ₹10 / crore on buy side
        </td>
        <td className="border border-gray-300 p-4">
          0.0001% or ₹10 / crore on buy side
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default CurrencyTab
