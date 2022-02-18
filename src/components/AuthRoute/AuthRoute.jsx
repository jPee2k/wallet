import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAuthState } from '../../redux/slices/selectors.js';

const AuthRoute = ({ children }) => {
  const isAuth = useSelector(getAuthState);
  return isAuth ? <Navigate to="/"/> : children;
};

AuthRoute.propTypes = {
  children: PropTypes.node,
};

export default AuthRoute;
