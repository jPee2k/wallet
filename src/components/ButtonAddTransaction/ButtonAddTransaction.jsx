import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/slices/globalSlice.js';
import Button from '../Button';

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openModal());
  };

  return (
    <Button onClick={clickHandler}>+ Add transaction</Button>
  );
};

export default ButtonAddTransaction;
