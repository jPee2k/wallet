import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTransactionsQuery } from '../../services/transactionsAPI.js';
import { hideSpinner, showSpinner } from '../../app/slices/globalSlice.js';
import { addData } from '../../app/slices/financeSlice.js';

import Currency from '../Currency';
import UserCard from '../UserCard';
import ButtonAddTransaction from '../ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction';
import TableTransaction from '../TableTransaction';
import styles from './styles.module.scss';

const TabTransaction = () => {
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

  const { mainSectionBlock, currencyInfoBlock, mainBlock } = styles;
  return (
    <div className={mainSectionBlock}>
      <div className={currencyInfoBlock}>
        <UserCard />
        <Currency />
      </div>
      <div className={mainBlock}>
        <TableTransaction data={transactions}/>
        <ButtonAddTransaction />
        <ModalAddTransaction />
      </div>
    </div>
  );
};

export default TabTransaction;
