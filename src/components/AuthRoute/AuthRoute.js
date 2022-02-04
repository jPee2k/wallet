import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
  const isAuth = useSelector(({ auth }) => auth.session.isAuth);
  return isAuth ? <Navigate to="/"/> : children;
};

AuthRoute.propTypes = {
  children: PropTypes.node,
};

export default AuthRoute;
