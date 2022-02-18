import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openTransactionModal } from '../../../../../../redux/slices/globalSlice.js';
import Button from '../../../../../../components/Button';

const ButtonEdit = ({ transactionID, className = '', onClick: closeInfoModal }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    closeInfoModal();
    dispatch(openTransactionModal(transactionID));
  };

  return (
    <Button className={className} onClick={clickHandler}>Edit</Button>
  );
};

ButtonEdit.propTypes = {
  transactionID: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonEdit;
