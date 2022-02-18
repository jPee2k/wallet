import React from 'react';
import { useSelector } from 'react-redux';

import { getTransactionsState } from '../../../redux/slices/selectors.js';

import ButtonAddTransaction from '../../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../../components/ModalAddTransaction';
import ModalRemoveTransaction from '../../../components/ModalRemoveTransaction';
import TableTransaction from './TransactionTable';

import styles from './styles.module.scss';

const TransactionTab = () => {
  const transactionsState = useSelector(getTransactionsState);

  const { mainBlock, transactionsContainer } = styles;
  return (
    <div className={mainBlock}>
      <div className={transactionsContainer}>
        <TableTransaction data={transactionsState}/>
        <ButtonAddTransaction/>
      </div>
      <ModalAddTransaction/>
      <ModalRemoveTransaction/>
    </div>
  );
};

export default TransactionTab;
