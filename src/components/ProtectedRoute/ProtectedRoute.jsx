import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAuthState } from '../../redux/slices/selectors.js';

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector(getAuthState);
  return isAuth ? children : <Navigate to="/login"/>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
