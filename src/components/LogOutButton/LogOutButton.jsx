import React from 'react';
import { useDispatch } from 'react-redux';
import { openLogoutModal } from '../../redux/slices/globalSlice.js';
import NavButton from '../NavButton';
import ModalLogOut from '../ModalLogOut';
import { ReactComponent as Exit } from '../../assets/images/icons/exit.svg';

const LogOutButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openLogoutModal());
  };

  return (
    <React.Fragment>
      <NavButton ariaLabel="log-out" onClick={clickHandler}><Exit/></NavButton>
      <ModalLogOut/>
    </React.Fragment>
  );
};

export default LogOutButton;
