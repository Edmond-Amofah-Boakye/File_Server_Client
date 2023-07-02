import { Context } from '../../store/AppContext'
import { useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const LineChart = () => {
  const { getUsers, getFiles } = useContext(Context)

  const labels = ["Users", "Files", "", ""];
  // Data for the pie chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total",
        data: [getUsers.length, getFiles.length],
        backgroundColor: ['#2ECC71', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  // Chart.js options for responsive behavior
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Total Number of Users and Files',
        font: {
          size: 32,
        },
      
      },
    },
  };

  return <Bar data={data} width={20} height={600} options={options} />;
};

export default LineChart;
