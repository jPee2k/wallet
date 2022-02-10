import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTransactionsQuery } from '../../../services/transactionsAPI.js';
import { hideSpinner, showSpinner } from '../../../app/slices/globalSlice.js';
import { addData } from '../../../app/slices/financeSlice.js';

import ButtonAddTransaction from '../../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../../components/ModalAddTransaction';
import TableTransaction from './TransactionTable';
import styles from './styles.module.scss';

const TransactionTab = () => {
  const { isLoading, isError, isSuccess, data } = useGetTransactionsQuery();
  const transactions = useSelector((state) => state.finance.data);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(hideSpinner());
    }
  }, [isSuccess, isError]);

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
