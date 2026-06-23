import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Position = () => {

const [allPositions,setAllPositions]=useState([]);
const API_URL = import.meta.env.VITE_API_URL;
useEffect(()=>{
  const fetchPositons= async()=>{
    try{
      const res=await axios.get(`${API_URL}/allPosition`);
      setAllPositions(res.data);
    }catch (err) {
      console.log(err);
    }
  };
  fetchPositons();
},[])

  return (
    <div>
      <div>
        <h1 className='text-xl font-semibold mt-10 text-gray-600 px-5'>Positions ({allPositions.length})</h1>
      </div>
      <div>
        <table className='w-full border border-collapse mt-10 border-gray-300'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 p-4 text-left text-gray-400'><input type="checkbox" /></th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>Product</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>Instrument</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>LTP</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>P&amp;L</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>chg</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, idx) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0;
              const profitLoss = isProfit ? <span className='text-green-400'>+{(currVal - stock.avg * stock.qty).toFixed(2)}</span> : <span className='text-red-500'>{(currVal - stock.avg * stock.qty).toFixed(2)}</span>
              const changPer = ((stock.price - stock.avg) / stock.avg) * 100;
            const Change = <p
              className={
                ((stock.price - stock.avg) / stock.avg) * 100 >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {changPer >= 0 ? "+" : ""}
              {changPer.toFixed(2)}%
            </p>
             return (
              <tr  key={idx} className='bg-gray-100'>
                <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'><input type="checkbox" /></td>
                <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.product}</td>
                <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.name}</td>
                {/* <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.qty}</td> */}
                {/* <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.avg}</td> */}
                <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.price}</td>
                <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{profitLoss}</td>
                <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{Change}</td>
              </tr>
             )
            })}
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Position
