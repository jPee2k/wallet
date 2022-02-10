import React from 'react';
import Currency from '../Currency';
import UserCard from '../UserCard';
import ButtonAddTransaction from '../ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction';
import TableTransaction from '../TableTransaction';
import styles from './styles.module.scss';

const TabTransaction = () => {
  const { mainSectionBlock, currencyInfoBlock, mainBlock } = styles;
  return (
    <div className={mainSectionBlock}>
      <div className={currencyInfoBlock}>
        <UserCard />
        <Currency />
      </div>
      <div className={mainBlock}>
        <TableTransaction />
        <ButtonAddTransaction />
        <ModalAddTransaction />
      </div>
    </div>
  );
};

export default TabTransaction;
