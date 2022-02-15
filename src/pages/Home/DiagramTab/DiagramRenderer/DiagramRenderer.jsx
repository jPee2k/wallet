import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TRANSACTION_TYPES = { inc: 'INCOME', dec: 'EXPENSE' };

const DiagramRenderer = ({ data = [], categories = [] }) => {
  if (data.length === 0) {
    return <p className='noData'>no data to display</p>;
  }
  const doughnutChartData = getDoughnutChartData(data, categories);
  const chartOptions = { plugins: { legend: { display: false } } };
  return <Doughnut data={doughnutChartData} options={chartOptions}/>;
};

DiagramRenderer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      transactionDate: PropTypes.string.isRequired,
      type: PropTypes.oneOf([TRANSACTION_TYPES.inc, TRANSACTION_TYPES.dec]).isRequired,
      categoryId: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      balanceAfter: PropTypes.number.isRequired,
      status: PropTypes.string,
    }),
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf([TRANSACTION_TYPES.inc, TRANSACTION_TYPES.dec]).isRequired,
    }),
  ).isRequired,
};

const getCategoryNameByID = (categories, id) => {
  const currItem = categories.find((category) => category.id === id);
  return currItem?.name || '';
};

const getCategoryColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const getDoughnutChartData = (data, categories) => {
  return data.reduce((result, dataItem) => {
    const { categoryId, amount } = dataItem;
    // id for incomes. Item shall not be displayed in chart
    if (categoryId === '063f1132-ba5d-42b4-951d-44011ca46262') {
      return result;
    }
    const { labels } = result;
    const label = getCategoryNameByID(categories, categoryId);
    const numericData = Math.abs(amount);
    const color = getCategoryColor(label);

    const labelAlreadyPresent = labels.includes(label);
    if (labelAlreadyPresent) {
      const labelIndex = labels.indexOf(label);
      // eslint-disable-next-line no-param-reassign
      result.datasets[0].data[labelIndex] += numericData;
    } else {
      result.labels.push(label);
      result.datasets[0].data.push(numericData);
      result.datasets[0].backgroundColor.push(color);
    }
    // eslint-disable-next-line consistent-return
    return result;
  }, { labels: [], datasets: [{ data: [], backgroundColor: [] }] });
};

export default DiagramRenderer;
