import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTransactionsQuery } from '../../../services/transactionsAPI.js';
import { getTransactionsFromState } from '../../../app/slices/selectors.js';
import { addData } from '../../../app/slices/financeSlice.js';
import { useLoader } from '../../../hooks/useLoader.js';

import ButtonAddTransaction from '../../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../../components/ModalAddTransaction';
import TableTransaction from './TransactionTable';
import styles from './styles.module.scss';

const TransactionTab = () => {
  const { isLoading, isError, isSuccess, data = [], refetch } = useGetTransactionsQuery();
  const transactions = useSelector(getTransactionsFromState);
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
      <TableTransaction data={transactions}/>

      <ButtonAddTransaction/>
      <ModalAddTransaction/>
    </div>
  );
};

export default TransactionTab;
