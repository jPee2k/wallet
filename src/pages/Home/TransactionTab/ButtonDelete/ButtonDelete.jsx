import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Delete } from '../../../../assets/images/icons/delete.svg';

const ButtonDelete = ({ transactionID }) => {
  // console.log(transactionID);

  return (
    <button><Delete/></button>
  );
};

ButtonDelete.propTypes = {
  transactionID: PropTypes.string.isRequired,
};

export default ButtonDelete;
