import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DiagramRenderer = ({ data = {} }) => {
  if (data.labels && data.labels.length === 0) {
    return <p className='noData'>no data to display</p>;
  }
  const chartOptions = { plugins: { legend: { display: false } } };
  return <Doughnut data={data} options={chartOptions}/>; // TODO -> type ??
};

DiagramRenderer.propTypes = {
  data: PropTypes.shape({
    categoryName: PropTypes.string,
    amountData: PropTypes.number,
    color: PropTypes.string,
  }),
};

export default DiagramRenderer;
