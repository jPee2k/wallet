import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import useEscapeButton from '../../hooks/useEscapeButton.js';
import useUpdateUserData from '../../hooks/useUpdateUserData.js';
import useRemoveTransaction from '../../hooks/useRemoveTransaction.js';
import { closeRemoveTransactionModal } from '../../redux/slices/globalSlice.js';
import { removeTransaction as removeTransactionFromStore } from '../../redux/slices/financeSlice.js';
import { getRemoveTransactionModalState, getTransactionID } from '../../redux/slices/selectors.js';

import Button from '../Button';
import styles from './styles.module.scss';

const ModalRemoveTransaction = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getRemoveTransactionModalState);
  const transactionID = useSelector(getTransactionID);
  const removeTransaction = useRemoveTransaction();
  const { refetch, skip } = useUpdateUserData();

  useEscapeButton(closeRemoveTransactionModal);

  const clickHandler = async () => {
    skip.current = false;
    try {
      await removeTransaction(transactionID).unwrap();
      dispatch(removeTransactionFromStore(transactionID));
      dispatch(closeRemoveTransactionModal());
      await refetch();
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
