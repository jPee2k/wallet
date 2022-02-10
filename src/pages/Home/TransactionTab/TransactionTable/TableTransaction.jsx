import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TRANSACTION_TYPES = { inc: 'INCOME', dec: 'EXPENSE' };

const TableTransaction = ({ data = [] }) => {
  if (data.length === 0) {
    return null;
  }

  const { transactionTable, table, decTransaction } = styles;
  return (
    <div className={transactionTable}>
      <table className={table}>
        <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comments</th>
          <th>Amount</th>
          <th>Balance</th>
          <th>Operations</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({ id, transactionDate, type, categoryId, comment, amount, balanceAfter }) => {
          return (
            <tr key={id} className={type === TRANSACTION_TYPES.dec ? decTransaction : null}>
              <td>{new Date(transactionDate).toLocaleDateString()}</td>
              <td>{type === TRANSACTION_TYPES.inc ? '+' : '-'}</td>
              <td>{categoryId}</td>
              <td>{comment}</td>
              <td>{amount.toFixed(2)}</td>
              <td>{balanceAfter.toFixed(2)}</td>
              <td>
                <button>edit</button>
                <button>remove</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

TableTransaction.propTypes = {
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
    }),
  ).isRequired,
};

export default TableTransaction;
