import React from 'react'

const OptionalValue = () => {
  return (
       <div className='mt-25 px-60'>
            <h1 className='text-2xl font-thin-[700] text-gray-600'>Charges for optional value added services</h1>
            <div className="overflow-x-auto mt-8">
  <table className="w-full border border-gray-300 border-collapse text-gray-700">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-4 text-left">
          Service
        </th>
        <th className="border border-gray-300 p-4 text-left">
          Billing Frequency
        </th>
        <th className="border border-gray-300 p-4 text-left">
          Charges
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Tickertape
        </td>
        <td className="border border-gray-300 p-4">
          Monthly / Quarterly / Annual
        </td>
        <td className="border border-gray-300 p-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
            Free: ₹0
          </span>
          <br />
          <span className="mt-2 inline-block">
            Pro: ₹249 / ₹699 / ₹2399
          </span>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Smallcase
        </td>
        <td className="border border-gray-300 p-4">
          Per transaction
        </td>
        <td className="border border-gray-300 p-4">
          Buy & Invest More: ₹100
          <br />
          SIP: ₹10
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4 font-medium">
          Kite Connect
        </td>
        <td className="border border-gray-300 p-4">
          Monthly
        </td>
        <td className="border border-gray-300 p-4">
          Connect: ₹500
          <br />
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm inline-block mt-2">
            Personal: Free
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default OptionalValue
