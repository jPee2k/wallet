import React from 'react';
import { useDispatch } from 'react-redux';
import NavButton from '../NavButton';
import { resetUserData } from '../../app/slices/sessionSlice.js';
import { ReactComponent as Exit } from '../../assets/images/icons/exit.svg';

const LogOutButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // TODO -> call logOut modal instead confirm
    // eslint-disable-next-line no-restricted-globals
    const isLogOut = confirm('Are you sure, you want to log out?');
    if (isLogOut) {
      dispatch(resetUserData());
    }
  };

  return <NavButton ariaLabel="log-out" onClick={clickHandler}><Exit/></NavButton>;
};

export default LogOutButton;
