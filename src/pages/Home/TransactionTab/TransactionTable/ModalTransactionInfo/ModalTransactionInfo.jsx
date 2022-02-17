import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Close } from '../../../../../assets/images/icons/delete.svg';
import styles from './styles.module.scss';

import TransactionInfoTable from './TransactionInfoTable';
import ButtonEdit from '../../ButtonEdit';
import ButtonDelete from '../../ButtonDelete';

const ModalTransactionInfo = ({ isVisible = false, hideModal, transaction = {} }) => {
  useEffect(() => {
    const closeOnPress = (evt) => (evt.code === 'Escape') && hideModal();
    window.addEventListener('keyup', closeOnPress);
    return () => window.removeEventListener('keyup', closeOnPress);
  }, []);

  if (!isVisible) {
    return null;
  }

  const { id, type, comment } = transaction;
  const {
    buttonClose, buttonRemove, buttonEdit, message, title, wrapper, modal, navSection, table,
  } = styles;
  return (
    <div className={wrapper}>
      <div className={modal}>
        <h3 className={title}>{type}</h3>
        {comment ? <p className={message}>{comment}</p> : null}
        <TransactionInfoTable className={table} transaction={transaction}/>
        <div className={navSection}>
          <ButtonDelete className={buttonRemove} transactionID={id} onClick={hideModal}/>
          <ButtonEdit className={buttonEdit} transactionID={id} onClick={hideModal}/>
          <button className={buttonClose} onClick={hideModal}><Close/></button>
        </div>
      </div>
    </div>
  );
};

ModalTransactionInfo.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  transaction: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    balanceAfter: PropTypes.number.isRequired,
    transactionDate: PropTypes.string,
    type: PropTypes.string,
    categoryName: PropTypes.string,
    comment: PropTypes.string,
  })).isRequired,
};

export default ModalTransactionInfo;
