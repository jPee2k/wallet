import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ExpensesTable = ({ data = {} }) => {
  if (data.length === 0) {
    return <p className='noData'> no transactions</p>;
  }
  const { expensesData, totalIncome, totalExpenses } = data;

  const {
    tableContainer, tableContainerHeader, tableContainerHeaderItem,
    tableContainerList, tableContainerListItem, tableContainerListItemCategory,
    tableContainerListItemAmount, tableContainerFooter, tableContainerFooterItem,
  } = styles;
  return (
    <div className={tableContainer}>
      <div className={tableContainerHeader}>
        <div className={tableContainerHeaderItem}>Category</div>
        <div className={tableContainerHeaderItem}>Amount</div>
      </div>
      <div className={tableContainerList}>
        {expensesData.map(({ categoryName, amountData, color }, index) => (
          <div key={`diagram-expenses-table-key-${index}`} className={tableContainerListItem} style={{ color }}>
            <div className={tableContainerListItemCategory}>{categoryName}</div>
            <div className={tableContainerListItemAmount}>{amountData}</div>
          </div>
        ))}
      </div>
      <div className={tableContainerFooter}>
        <div className={tableContainerFooterItem}>
          Total income: {totalIncome}
        </div>
        <div className={tableContainerFooterItem}>
          Total expenses: {totalExpenses}
        </div>
      </div>
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
