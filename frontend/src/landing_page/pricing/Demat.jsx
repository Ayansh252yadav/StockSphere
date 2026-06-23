import React from 'react'

const Demat = () => {
    return (
        <div className='mt-25 px-60'>
            <h1 className='text-2xl font-thin-[700] text-gray-600'>Demat AMC (Annual Maintenance Charge)</h1>
          <div className="flex items-center mt-10  mb-5">
  <span className="w-1 h-12 bg-blue-400 rounded-2xl"></span>

  <span className="text-[20px] font-light bg-blue-50 px-3 py-2">
    Free for first year *
  </span>
</div>
<div>
    <p className='max-w-sm text-xs mb-3'>From second year onwards, for BSDA accounts:</p>
    </div>            <div>
                <table className='w-full border border-gray-300 text-gray-700 border-collapse'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border border-gray-300 p-4 text-left'>
                                Value of holdings</th>
                            <th className="border border-gray-300 p-4 text-left">AMC</th>
                        </tr>
                    </thead>
                  <tbody>
                    <tr>
                        <td className='border border-gray-300 p-4'>Up to ₹4 lakh</td>
                        <td className='border border-gray-300 p-4'>
                             <span className="bg-green-500 text-white px-3 py-1 rounded-md">
            Free
          </span>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-4'>₹4 lakh – ₹10 lakh</td>
                        <td className='border border-gray-300 p-4'>	₹100 per year + 18% GST, charged quarterly</td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 p-4'>Above ₹10 lakh</td>
                        <td className='border border-gray-300 p-4'>₹300 per year + 18% GST, charged quarterly</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <p className='max-w-full text-xs mb-3 mt-5'>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
        </div>
    )
}

export default Demat
