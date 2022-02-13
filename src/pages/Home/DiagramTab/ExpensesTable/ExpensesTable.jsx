import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TRANSACTION_TYPES = { inc: 'INCOME', dec: 'EXPENSE' };

const ExpensesTable = ({ data = [], categories = [] }) => {
  if (data.length === 0) {
    return <p>no transactions</p>;
  }
  const { expensesData, totalIncome, totalExpenses } = ExpensesDataMapper(data, categories);

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
          <tr>
            <td>Food</td>
            <td>560</td>
          </tr>
          {/* eslint-disable-next-line max-len */}
          {expensesData.map(({ id, categoryName, amountData }) => {
            return (
              <tr key={id}>
                <td>{categoryName}</td>
                <td>{amountData}</td>
              </tr>
            );
          })}
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

const ExpensesDataMapper = (data, categories) => {
  return data.reduce((result, dataItem) => {
    const { id, categoryId, amount } = dataItem;
    const amountData = Math.abs(amount);

    if (categoryId === '063f1132-ba5d-42b4-951d-44011ca46262') {
      // eslint-disable-next-line no-param-reassign
      result.totalIncome += amountData;
      return result;
    }

    const categoryName = getCategoryNameByID(categories, categoryId);

    const existingResultIndex = result.expensesData.findIndex((existingExpensesData) => {
      return existingExpensesData.categoryName === categoryName;
    });
    if (existingResultIndex >= 0) {
      // eslint-disable-next-line no-param-reassign
      result.expensesData[existingResultIndex].amountData += amountData;
      // eslint-disable-next-line no-param-reassign
      result.totalExpenses = amountData + result.totalExpenses;
      return result;
    }

    const expensesData = { id, categoryName, amountData };
    result.expensesData.push(expensesData);
    // eslint-disable-next-line no-param-reassign
    result.totalExpenses = amountData + result.totalExpenses;
    return result;
  }, { expensesData: [], totalIncome: 0, totalExpenses: 0 });
};

ExpensesTable.propTypes = {
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

function getCategoryNameByID(categories, id) {
  const currItem = categories.find((category) => category.id === id);
  return currItem?.name || '';
}

export default ExpensesTable;
