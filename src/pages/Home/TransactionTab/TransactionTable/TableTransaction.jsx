import React from 'react';
import PropTypes from 'prop-types';
import ButtonEdit from '../ButtonEdit';
import ButtonDelete from '../ButtonDelete';
import styles from './styles.module.scss';

const TRANSACTION_TYPES = { inc: 'INCOME', dec: 'EXPENSE' };
const { transactionTable, table, decTransaction, newTransaction } = styles;

const TableTransaction = ({ data = {} }) => {
  const { items = [], categories = [] } = data;
  if (items.length === 0) {
    return <p>no transactions</p>;
  }

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
        {/* eslint-disable-next-line max-len */}
        {items.map(({ id, transactionDate, type, categoryId, comment, amount, balanceAfter, status }) => {
          return (
            <tr key={id} className={getClassName(type, status)}>
              <td> {new Date(transactionDate).toLocaleDateString()}</td>
              <td>{type === TRANSACTION_TYPES.inc ? '+' : '-'}</td>
              <td>{getCategoryNameByID(categories, categoryId)}</td>
              <td>{comment}</td>
              <td>{amount.toFixed(2)}</td>
              <td>{balanceAfter.toFixed(2)}</td>
              <td>
                <ButtonEdit transactionID={id}/>
                <ButtonDelete transactionID={id}/>
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
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
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
    ),
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf([TRANSACTION_TYPES.inc, TRANSACTION_TYPES.dec]).isRequired,
      }),
    ),
  }).isRequired,
};

function getClassName(type, status) {
  const typeClass = (type === TRANSACTION_TYPES.dec) ? decTransaction : null;
  const statusClass = (status === 'new') ? newTransaction : null;
  return `${typeClass} ${statusClass}`.trim();
}

function getCategoryNameByID(categories, id) {
  const currItem = categories.find((category) => category.id === id);
  return currItem?.name || '';
}

export default TableTransaction;
