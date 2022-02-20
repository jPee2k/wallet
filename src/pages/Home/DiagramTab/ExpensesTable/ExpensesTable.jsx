import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ExpensesTable = ({ data = {} }) => {
  if (data.expensesData && data.expensesData.length === 0) {
    return null;
  }

  const { expensesData, totalIncome, totalExpenses } = data;
  const { statisticsTable, table } = styles;
  return (
    <div className={statisticsTable}>
      <table className={table}>
        <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {expensesData.map(({ categoryName, amountData, color }) => (
          <tr key={`${categoryName}-${amountData}`} style={{ color }}>
            <td>{categoryName}</td>
            <td>{amountData}</td>
          </tr>
        ))}
        <tr>
          <td>Total income</td>
          <td>{totalIncome}</td>
        </tr>
        <tr>
          <td>Total expenses</td>
          <td>{totalExpenses}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

ExpensesTable.propTypes = {
  data: PropTypes.shape({
    expensesData: PropTypes.arrayOf(
      PropTypes.shape({
        categoryName: PropTypes.string,
        amountData: PropTypes.number,
        color: PropTypes.string,
      }),
    ),
    totalIncome: PropTypes.number,
    totalExpenses: PropTypes.number,
  }),
};

export default ExpensesTable;
