import React from 'react'

const AccountOpening = () => {
  return (
    <div className='mt-25 px-60'>
      <h1 className='text-2xl font-thin-[700] text-gray-600'>Charges for account opening</h1>
      <div className="overflow-x-auto mt-8">
  <table className="w-full border border-gray-300 border-collapse text-gray-700">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-4 text-left">
          Type of Account
        </th>
        <th className="border border-gray-300 p-4 text-left">
          Charges
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 p-4">
          Individual account
        </td>
        <td className="border border-gray-300 p-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-md">
            Free
          </span>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4">
          Minor account
        </td>
        <td className="border border-gray-300 p-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-md">
            Free
          </span>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4">
          NRI account
        </td>
        <td className="border border-gray-300 p-4">
          ₹ 500
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4">
          HUF account
        </td>
        <td className="border border-gray-300 p-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-md">
            Free (online)
          </span>
          <span className="ml-2">
            / ₹ 500 (offline)
          </span>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-4">
          Partnership, LLP, and Corporate accounts (offline only)
        </td>
        <td className="border border-gray-300 p-4">
          ₹ 500
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AccountOpening
