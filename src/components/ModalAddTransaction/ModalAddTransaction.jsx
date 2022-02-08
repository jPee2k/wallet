import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../app/slices/globalSlice.js';
import TransactionForm from './TransactionForm';
import styles from './styles.module.scss';

const ModalAddTransaction = () => {
  const isModalOpen = useSelector((state) => state.global.isModalAddTransactionOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const closeOnPress = (evt) => (evt.code === 'Escape') && dispatch(closeModal());
    window.addEventListener('keyup', closeOnPress);
    return () => window.removeEventListener('keyup', closeOnPress);
  }, []);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={styles.wrapper} onKeyUp={closeModal}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Add transaction</h2>
        <TransactionForm/>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
