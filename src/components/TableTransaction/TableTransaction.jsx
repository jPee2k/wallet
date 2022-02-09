import React from 'react';
import styles from './styles.module.scss';

const TableTransaction = () => {
  const { transactionTable, table } = styles;

  return (
    <div className={transactionTable}>
      <table className={table}>
        <thead>
          <tr>
            <th>test</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comments</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>04.01.09</td>
            <td>dd</td>
            <td>Food</td>
            <td>Dinner</td>
            <td>55.70</td>
            <td>127,254.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;