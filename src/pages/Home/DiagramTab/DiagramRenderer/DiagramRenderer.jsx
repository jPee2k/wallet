import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DiagramRenderer = ({ data = {} }) => {
  if (data.length === 0) {
    return <p className='noData'>no data to display</p>;
  }
  const chartOptions = { plugins: { legend: { display: false } } };
  return <Doughnut data={data} options={chartOptions}/>;
};

DiagramRenderer.propTypes = {
  data: PropTypes.object,
};

export default DiagramRenderer;
