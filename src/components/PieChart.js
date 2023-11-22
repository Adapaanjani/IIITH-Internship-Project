// StatisticalPieChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './piechart.css';
import Navbar from './Navbar';
import Footer from './Footer';

const StatisticalPieChart = () => {
  const dataSets = [
    {
      title: 'Biryani',
      data: [
        { count: 2163, label: 'no' },
        { count: 4655, label: 'Age(16-25)' },
        { count: 3778, label: 'Age(26-35)' },
        { count: 3778, label: 'Age(36-45)' },
        { count: 3778, label: 'Age(26-35)' },
      ],
    },
    {
      title: 'Sweets',
      data: [
        { count: 2163, label: 'Age(6-15)' },
        { count: 4655, label: 'Age(16-25)' },
        { count: 3778, label: 'Age(26-35)' },
        { count: 3778, label: 'Age(36-45)' },
        { count: 3778, label: 'Age(26-35)' },
      ],
    },
    {
        title: 'Soups',
        data: [
          { count: 2163, label: 'Age(6-15)' },
          { count: 4655, label: 'Age(16-25)' },
          { count: 3778, label: 'Age(26-35)' },
          { count: 3778, label: 'Age(36-45)' },
          { count: 3778, label: 'Age(26-35)' },
        ],
      },
      {
        title: 'Soups',
        data: [
          { count: 2163, label: 'Age(6-15)' },
          { count: 4655, label: 'Age(16-25)' },
          { count: 3778, label: 'Age(26-35)' },
          { count: 3778, label: 'Age(36-45)' },
          { count: 3778, label: 'Age(26-35)' },
        ],
      },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <Navbar/>
      

    <div className="pie-chart-container">

      {dataSets.map((dataset, index) => (
        <div key={index} className="pie-chart">
          <h3>{dataset.title}</h3>
          <div className="pie-chart-wrapper">
          <PieChart width={400} height={400}>
            <Pie
              data={dataset.data}
              dataKey="count"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {dataset.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default StatisticalPieChart;