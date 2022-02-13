import React from 'react';
import { useSelector } from 'react-redux';
import {
  getTransactionCategoriesFromState,
  getTransactionsFromState,
} from '../../../app/slices/selectors';
import DiagramRenderer from './DiagramRenderer';
import ExpensesTable from './ExpensesTable';
import styles from './styles.module.scss';

const DiagramTab = () => {
  const transactions = useSelector(getTransactionsFromState);
  const categories = useSelector(getTransactionCategoriesFromState);

  const { statisticsBlock, statistics } = styles;

  return (
    <div className={statisticsBlock}>
        <div className={statistics}>
          <DiagramRenderer data={transactions} categories={categories} />
        </div>
        <ExpensesTable data={transactions} categories={categories} />
      </div>
  );
};

export default DiagramTab;
