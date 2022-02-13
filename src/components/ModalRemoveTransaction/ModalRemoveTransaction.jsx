import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useLoader } from '../../hooks/useLoader.js';
import { useRemoveTransactionMutation } from '../../services/transactionsAPI.js';
import { closeRemoveTransactionModal } from '../../app/slices/globalSlice.js';
import { removeTransaction as removeTransactionFromStore } from '../../app/slices/financeSlice.js';
import { getRemoveTransactionModalState, getTransactionID } from '../../app/slices/selectors.js';

import Button from '../Button';
import styles from './styles.module.scss';

const ModalRemoveTransaction = () => {
  const dispatch = useDispatch();
  const transactionID = useSelector(getTransactionID);
  const isModalOpen = useSelector(getRemoveTransactionModalState);
  const [removeTransaction, { isLoading, isError, isSuccess }] = useRemoveTransactionMutation();

  useLoader({ dispatch, isLoading, isError, isSuccess });
  useEffect(() => {
    const closeOnPress = (evt) => (evt.code === 'Escape') && dispatch(closeRemoveTransactionModal());
    window.addEventListener('keyup', closeOnPress);
    return () => window.removeEventListener('keyup', closeOnPress);
  }, []);

  const clickHandler = async () => {
    try {
      await removeTransaction(transactionID).unwrap();
      dispatch(removeTransactionFromStore(transactionID));
      dispatch(closeRemoveTransactionModal());
      // TODO -> update user balance
    } catch (err) {
      toast.error(err?.data?.message || 'Oops, something went wrong =(');
    }
  };

  if (!isModalOpen) {
    return null;
  }

  const { buttonCancel, buttonConfirm, message, title, wrapper, modal, navSection } = styles;
  return (
    <div className={wrapper}>
      <div className={modal} style={{ color: 'black' }}>
        <h2 className={title}>Remove</h2>
        <p className={message}>Are you sure you want to remove transaction?</p>
        <div className={navSection}>
          <Button className={buttonCancel}
            onClick={() => dispatch(closeRemoveTransactionModal())}>Cancel</Button>
          <Button className={buttonConfirm} onClick={clickHandler}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalRemoveTransaction;
