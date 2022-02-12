import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTransactionsQuery } from '../../../services/transactionsAPI.js';
import { getTransactionCategoriesFromState, getTransactionsFromState } from '../../../app/slices/selectors.js';
import { addData } from '../../../app/slices/financeSlice.js';
import { useLoader } from '../../../hooks/useLoader.js';

import ButtonAddTransaction from '../../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../../components/ModalAddTransaction';
import TableTransaction from './TransactionTable';
import styles from './styles.module.scss';
import ModalRemoveTransaction from '../../../components/ModalRemoveTransaction';

const TransactionTab = () => {
  const { isLoading, isError, isSuccess, data = [], refetch } = useGetTransactionsQuery();
  const transactions = useSelector(getTransactionsFromState);
  const categories = useSelector(getTransactionCategoriesFromState);
  const dispatch = useDispatch();

  useLoader({ dispatch, isSuccess, isError, isLoading });
  useEffect(() => refetch(), []);
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addData(data));
    }
  }, [data]);

  const { mainBlock } = styles;
  return (
    <div className={mainBlock}>
      <TableTransaction data={transactions} categories={categories}/>
      <ButtonAddTransaction/>

      <ModalAddTransaction/>
      <ModalRemoveTransaction/>
    </div>
  );
};

export default TransactionTab;
