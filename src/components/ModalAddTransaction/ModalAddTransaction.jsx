import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeTransactionModal } from '../../redux/slices/globalSlice.js';
import { getTransactionID, getTransactionModalState } from '../../redux/slices/selectors.js';

import EditTransactionForm from './EditTransactionForm';
import TransactionForm from './TransactionForm';
import styles from './styles.module.scss';

const ModalAddTransaction = () => {
  const isModalOpen = useSelector(getTransactionModalState);
  const transactionID = useSelector(getTransactionID);
  const dispatch = useDispatch();

  useEffect(() => {
    const closeOnPress = (evt) => (evt.code === 'Escape') && dispatch(closeTransactionModal());
    window.addEventListener('keyup', closeOnPress);
    return () => window.removeEventListener('keyup', closeOnPress);
  }, []);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        {transactionID ? (
          <React.Fragment>
            <h2 className={styles.title}>Edit transaction</h2>
            <EditTransactionForm transactionID={transactionID}/>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2 className={styles.title}>Add transaction</h2>
            <TransactionForm/>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ModalAddTransaction;
