import React ,{useState,useEffect}from 'react'
// import { holdings } from '../data/data.js';
import axios from 'axios';
import { VerticalGraph } from './VerticalGraph';
const Holdings = () => {

const [allHoldings,setAllHoldings]=useState([]);
const API_URL = import.meta.env.VITE_API_URL;
useEffect(() => {
  const fetchHoldings = async () => {
    try {
      const res =await axios.get(`${API_URL}/allHoldings`);
      console.log(res.data);
      setAllHoldings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchHoldings();
}, []);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 const labels=allHoldings.map((subArray)=>subArray["name"]);

 const data={
  labels,
  datasets: [
    {
      label: 'stock price',
      data: allHoldings.map((stock)=>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
 }
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

  return (
    <div>
      <div>
        <h1 className='text-xl font-semibold mt-10 text-gray-600 px-5'>Holdings ({allHoldings.length}) </h1>
      </div>
      <div>
        <table className='w-full border border-gray-300 border-collapse mt-10'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>Instrument</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>QTY.</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>Avg. cost</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>LTP</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>Cur. val</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>P&amp;L</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>Net chg.</th>
              <th className='border border-gray-300 p-4 text-left text-gray-400'>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, idx) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? <span className='text-green-400'>+{(currVal - stock.avg * stock.qty).toFixed(2)}</span> : <span className='text-red-500'>{(currVal - stock.avg * stock.qty).toFixed(2)}</span>
              const netPer = ((stock.price - stock.avg) / stock.avg) * 100;
              const netChange = <p
                className={
                  ((stock.price - stock.avg) / stock.avg) * 100 >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                 {netPer >= 0 ? "+" : ""}
  {netPer.toFixed(2)}%
              </p>
              return (
                <tr key={idx} className='bg-gray-100'>
                  <td  className='border  text-[13px]  border-gray-300 p-4 text-left text-gray-700'>{stock.name}</td>
                  <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.qty}</td>
                  <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.avg.toFixed(2)}</td>
                  <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{stock.price.toFixed(2)}</td>
                  <td  className='border text-[13px] border-gray-300 p-4 text-left text-gray-700'>{currVal}</td>
                  <td  className='border text-[13px] border-gray-300 p-4 text-left'>{profClass}</td>
                  <td  className='border text-[13px] border-gray-300 p-4 text-left'>{netChange}</td>
                  <td className={
                    stock.day.startsWith("+") ?"text-green-500 border text-[13px] border-gray-300 p-4 text-left":"text-red-500 border text-[13px] border-gray-300 p-4 text-left"
                  }>{stock.day}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <VerticalGraph data={data}/>
    </div>
  )
}

export default Holdings
