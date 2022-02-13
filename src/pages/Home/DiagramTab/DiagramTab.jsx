import React from 'react';
import { useSelector } from 'react-redux';
import { getTransactionCategoriesFromState, getTransactionsFromState } from '../../../app/slices/selectors';
import DiagramRenderer from './DiagramRenderer';
import LabelsRender from './LabelsRenderer';

const DiagramTab = () => {
  const transactions = useSelector(getTransactionsFromState);
  const categories = useSelector(getTransactionCategoriesFromState);

  return (
    <div>
      <DiagramRenderer data={transactions} categories={categories}/>
      <LabelsRender data={transactions} categories={categories}/>
    </div>
  );
};

export default DiagramTab;
