import React from 'react';
import { useDispatch } from 'react-redux';
import { openTransactionModal } from '../../app/slices/globalSlice.js';
import Button from '../Button';

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openTransactionModal());
  };

  return (
    <Button onClick={clickHandler}>+ Add transaction</Button>
  );
};

export default ButtonAddTransaction;
