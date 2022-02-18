import React from 'react';
import { useDispatch } from 'react-redux';
import { openTransactionModal } from '../../redux/slices/globalSlice.js';
import Button from '../Button';
import styles from './styles.module.scss';

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const { btnTransaction } = styles;

  const clickHandler = () => {
    dispatch(openTransactionModal());
  };

  return (
    <Button onClick={clickHandler} className={btnTransaction}>+<span>Add transaction</span></Button>
  );
};

export default ButtonAddTransaction;
