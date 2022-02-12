import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openTransactionModal } from '../../../../app/slices/globalSlice.js';
import { ReactComponent as Edit } from '../../../../assets/images/icons/edit.svg';

const ButtonEdit = ({ transactionID }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(openTransactionModal(transactionID));
  };

  return (
    <button onClick={clickHandler}><Edit/></button>
  );
};

ButtonEdit.propTypes = {
  transactionID: PropTypes.string.isRequired,
};

export default ButtonEdit;
