"use client"
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import { ChartOptions, ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Page: React.FC = () => {
  // Data for the chart
  // Define data type
  const data: ChartData<'bar'> = {
    labels: ['Auto', 'Health', 'Life', 'Home', 'Renters', 'Car'],
    datasets: [
      {
        label: 'Reviews Distribution',
        data: [25, 15, 20, 10, 5, 25], // These values are just examples
        backgroundColor: [
          '#3498db', // Auto
          '#e91e63', // Health
          '#2ecc71', // Life
          '#f39c12', // Home
          '#e74c3c', // Renters
          '#1abc9c', // Car
        ],
        borderRadius: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  // Define options type
  const options: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 20,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`, // Format tooltip to show %
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        max: 30, // Adjust this value as per your data
      },
    },
  };


  return (
    <div className='  ' >

      <div className=' flex flex-row items-center gap-x-12 ' >
        {/* user list  */}
        <div className=' bg-[#FAF5EC] shadow shadow-[#00000033] rounded-[7px] py-3.5 pl-8 w-[224px] ' >
          <h1 className=' text-sm font-normal text-[#000000] ' >Total Users</h1>
          <h1 className=' mt-2 font-medium text-xl ' >12,847</h1>
          <span className=' mt-2 flex flex-row text-[#28A745] text-sm gap-x-0.5 font-normal  ' >
            +12% <p className=' text-[#000000] ' >
              from last month
            </p>
          </span>
        </div>
        {/* Active Providers  */}
        <div className=' bg-[#FAF5EC] shadow shadow-[#00000033] rounded-[7px] py-3.5 pl-8 w-[224px] ' >
          <h1 className=' text-sm font-normal text-[#000000] ' >Active Providers</h1>
          <h1 className=' mt-2 font-medium text-xl ' >247</h1>
          <span className=' mt-2 flex flex-row text-[#28A745] text-sm gap-x-0.5 font-normal  ' >
            +12% <p className=' text-[#000000] ' >
              from last month
            </p>
          </span>
        </div>
        {/* Reviews Pending */}
        <div className=' bg-[#FAF5EC] shadow shadow-[#00000033] rounded-[7px] py-3.5 pl-8 w-[224px] ' >
          <h1 className=' text-sm font-normal text-[#000000] ' >Reviews Pending</h1>
          <h1 className=' mt-2 font-medium text-xl ' >89</h1>
          <span className=' mt-2  text-[#000000] text-sm  font-normal  ' >
            Urgent requires moderation
          </span>
        </div>
        {/* Active Users */}
        <div className=' bg-[#FAF5EC] shadow shadow-[#00000033] rounded-[7px] py-3.5 pl-8 w-[224px] ' >
          <h1 className=' text-sm font-normal text-[#000000] ' >Active Users</h1>
          <h1 className=' mt-2 font-medium text-xl ' >12,847</h1>
          <span className=' mt-2 flex flex-row text-[#28A745] text-sm gap-x-0.5 font-normal  ' >
            +12% <p className=' text-[#000000] ' >
              from last month
            </p>
          </span>
        </div>
      </div>


      {/* bar chat  */}


      <div>


        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center">Reviews Distribution</h3>
          <div className="flex justify-center mt-4">
            <Bar data={data} options={options} />
          </div>
          <div className="mt-6 flex justify-between text-xs">
            <div className="text-blue-600">Auto</div>
            <div className="text-pink-600">Health</div>
            <div className="text-green-600">Life</div>
            <div className="text-red-600">Home</div>
            <div className="text-orange-600">Renters</div>
            <div className="text-teal-600">Car</div>
          </div>
        </div>










      </div>



























    </div>
  )
}

export default Page