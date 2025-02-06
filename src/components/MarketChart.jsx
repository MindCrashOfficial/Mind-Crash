import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function MarketChart({ title, data, labels }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        color: '#39ff14',
        font: {
          size: 16,
          family: 'Orbitron',
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(57, 255, 20, 0.1)',
        },
        ticks: {
          color: '#39ff14',
        }
      },
      x: {
        grid: {
          color: 'rgba(57, 255, 20, 0.1)',
        },
        ticks: {
          color: '#39ff14',
        }
      }
    }
  };

  const chartData = {
    labels,
    datasets: [
      {
        data,
        borderColor: '#ff00ff',
        backgroundColor: 'rgba(255, 0, 255, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ]
  };

  return (
    <div className="neon-border p-4 rounded-lg bg-black/40">
      <Line options={options} data={chartData} />
    </div>
  );
}

export default MarketChart