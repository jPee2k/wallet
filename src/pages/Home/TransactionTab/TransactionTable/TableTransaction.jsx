import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalTransactionInfo from './ModalTransactionInfo';
import styles from './styles.module.scss';

const TRANSACTION_TYPES = { inc: 'INCOME', dec: 'EXPENSE' };
const { transactionTable, table, decTransaction, newTransaction } = styles;

const TableTransaction = ({ data = {} }) => {
  const [isVisibleModal, setVisibilityModal] = useState(false);
  const [transactionData, setTransactionData] = useState({});

  const { items = [], categories = [] } = data;
  if (items.length === 0) {
    return <p className='noData'>no transactions</p>;
  }

  const clickHandler = (transaction) => {
    const categoryName = getCategoryNameByID(categories, transaction.categoryId);
    setTransactionData({ ...transaction, categoryName });
    showModal();
  };

  const showModal = () => {
    setVisibilityModal(true);
  };

  const hideModal = () => {
    setVisibilityModal(false);
  };

  return (
    <div className={transactionTable}>
      <table className={table}>
        <thead>
        <tr>
          <th>Type</th>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
        </thead>
        <tbody>
        {items.map((transaction) => {
          const {
            id, transactionDate, type, categoryId, amount, balanceAfter, status,
          } = transaction;
          return (
            <tr key={id} className={getClassName(type, status)}
              onClick={() => clickHandler(transaction)}
            >
              <td><span>Type</span>{type === TRANSACTION_TYPES.inc ? '+' : '-'}</td>
              <td><span>Date</span>{new Date(transactionDate).toLocaleDateString()}</td>
              <td><span>Category</span>{getCategoryNameByID(categories, categoryId)}</td>
              <td><span>Amount</span>{amount.toFixed(2)}</td>
              <td><span>Balance</span>{balanceAfter.toFixed(2)}</td>
            </tr>
          );
        })}
        </tbody>
      </table>

      <ModalTransactionInfo
        isVisible={isVisibleModal}
        hideModal={hideModal}
        transaction={transactionData}
      />
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

function getCategoryNameByID(categories = [], id = '') {
  const currItem = categories.find((category) => category.id === id);
  return currItem?.name || '';
}

export default TableTransaction;
