import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openRemoveTransactionModal } from '../../../../app/slices/globalSlice.js';
import Button from '../../../../components/Button';

const ButtonDelete = ({ transactionID, className = '', onClick: closeInfoModal }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    closeInfoModal();
    dispatch(openRemoveTransactionModal(transactionID));
  };

  return (
    <Button className={className} onClick={clickHandler}>Delete</Button>
  );
};

ButtonDelete.propTypes = {
  transactionID: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonDelete;
