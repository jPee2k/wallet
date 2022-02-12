import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openRemoveTransactionModal } from '../../../../app/slices/globalSlice.js';
import { ReactComponent as Delete } from '../../../../assets/images/icons/delete.svg';

const ButtonDelete = ({ transactionID }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(openRemoveTransactionModal(transactionID));
  };

  return (
    <button onClick={clickHandler}><Delete/></button>
  );
};

ButtonDelete.propTypes = {
  transactionID: PropTypes.string.isRequired,
};

export default ButtonDelete;
