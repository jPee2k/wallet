import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useLogOutMutation } from '../../services/authAPI.js';
import { hideSpinner, showSpinner } from '../../app/slices/globalSlice.js';
import { resetUserData } from '../../app/slices/sessionSlice.js';
import NavButton from '../NavButton';
import { ReactComponent as Exit } from '../../assets/images/icons/exit.svg';

const LogOutButton = () => {
  const dispatch = useDispatch();
  const [logOut, { isLoading, isError, isSuccess }] = useLogOutMutation();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(hideSpinner());
    }
  }, [isSuccess, isError]);

  const clickHandler = async () => {
    // TODO -> call logOut modal instead confirm
    // eslint-disable-next-line no-restricted-globals
    const isLogOut = confirm('Are you sure, you want to log out?');
    if (isLogOut) {
      try {
        await logOut().unwrap();
        dispatch(resetUserData());
      } catch (err) {
        toast.error(err?.data?.message || 'Oops, something went wrong =(');
      }
    }
  };

  return <NavButton ariaLabel="log-out" onClick={clickHandler}><Exit/></NavButton>;
};

export default LogOutButton;
