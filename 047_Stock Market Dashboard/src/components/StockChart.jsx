import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockChart = ({ symbol }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // Using demo API key - replace with your own in production
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`
        );
        
        const timeSeries = response.data['Time Series (Daily)'];
        const dates = Object.keys(timeSeries).slice(0, 30).reverse();
        const prices = dates.map(date => parseFloat(timeSeries[date]['4. close']));

        setChartData({
          labels: dates,
          datasets: [
            {
              label: `${symbol} Price`,
              data: prices,
              borderColor: prices[0] <= prices[prices.length - 1] ? '#4CAF50' : '#F44336',
              tension: 0.1
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [symbol]);

  if (!chartData) return <div className="chart-loading">Loading chart...</div>;

  return (
    <div className="stock-chart">
      <Line 
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default StockChart;