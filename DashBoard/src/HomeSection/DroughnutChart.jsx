import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function DroughnutChart({data}) {
  return <div className='mt-20'>
    <Doughnut data={data} />
  </div>;
}