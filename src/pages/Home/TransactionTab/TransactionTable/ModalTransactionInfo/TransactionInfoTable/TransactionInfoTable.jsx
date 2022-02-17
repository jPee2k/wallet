import React from 'react';
import PropTypes from 'prop-types';

const TransactionInfoTable = ({ className = '', transaction = {} }) => {
  const { categoryName, transactionDate, amount, balanceAfter } = transaction;

  return (
    <table className={className}>
      <tr>
        <td>Category:&nbsp;</td>
        <td>{categoryName}</td>
      </tr>
      <tr>
        <td>Date:&nbsp;</td>
        <td>{new Date(transactionDate).toLocaleDateString()}</td>
      </tr>
      <tr>
        <td>Amount:&nbsp;</td>
        <td>{amount.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Balance:&nbsp;</td>
        <td>{balanceAfter.toFixed(2)}</td>
      </tr>
    </table>
  );
};

TransactionInfoTable.propTypes = {
  className: PropTypes.string,
  transaction: PropTypes.objectOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    balanceAfter: PropTypes.number.isRequired,
    transactionDate: PropTypes.string,
    categoryName: PropTypes.string,
  })).isRequired,
};

export default TransactionInfoTable;
